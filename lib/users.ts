import { promises as fs } from 'fs'
import fsSync from 'fs'
import path from 'path'
import crypto from 'crypto'

const dataDir = path.join(process.cwd(), 'data')
const usersFile = path.join(dataDir, 'users.json')

export interface User {
  id: string
  email: string
  passwordHash: string
  name: string
  church: string
  role: 'pastor' | 'staff'
  expertise: string[]
  status: 'pending' | 'active' | 'rejected'
  isAdmin: boolean
  createdAt: string
}

export type SafeUser = Omit<User, 'passwordHash'>

const seedUsers: User[] = [{
  id: '1',
  email: 'pastorbill@catalyst302.com',
  passwordHash: '$2b$10$vUXn2vJuKqC0IxCzahEBF.HsU8LSPKEbzFz5eE2lMxNlFLQm2T3.y',
  name: 'Pastor Bill Yomes',
  church: 'Catalyst Community Church',
  role: 'pastor',
  expertise: ['Apologetics', 'Theological Education', 'Digital Ministry'],
  status: 'active',
  isAdmin: true,
  createdAt: '2024-01-01T00:00:00.000Z',
}]

export function getUsers(): User[] {
  if (!fsSync.existsSync(dataDir)) fsSync.mkdirSync(dataDir, { recursive: true })
  if (!fsSync.existsSync(usersFile)) fsSync.writeFileSync(usersFile, JSON.stringify(seedUsers, null, 2))
  return JSON.parse(fsSync.readFileSync(usersFile, 'utf-8'))
}

export async function saveUsers(users: User[]): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), 'utf-8')
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const users = getUsers()
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) ?? null
}

export async function getUserById(id: string): Promise<User | null> {
  const users = getUsers()
  return users.find(u => u.id === id) ?? null
}

export async function createUser(
  userData: Omit<User, 'id' | 'status' | 'createdAt'>
): Promise<User> {
  const users = getUsers()
  const newUser: User = {
    ...userData,
    id: crypto.randomUUID(),
    status: 'pending',
    createdAt: new Date().toISOString(),
  }
  users.push(newUser)
  await saveUsers(users)
  return newUser
}

export async function updateUserStatus(id: string, status: User['status']): Promise<void> {
  const users = getUsers()
  const idx = users.findIndex(u => u.id === id)
  if (idx === -1) throw new Error('User not found')
  users[idx].status = status
  await saveUsers(users)
}

export async function updateUserAdmin(id: string, isAdmin: boolean): Promise<void> {
  const users = getUsers()
  const idx = users.findIndex(u => u.id === id)
  if (idx === -1) throw new Error('User not found')
  users[idx].isAdmin = isAdmin
  await saveUsers(users)
}
