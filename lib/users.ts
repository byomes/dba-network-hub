import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'

const DB_PATH = path.join(process.cwd(), 'data', 'users.json')

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

async function ensureDb(): Promise<void> {
  try {
    await fs.access(DB_PATH)
  } catch {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true })
    await fs.writeFile(DB_PATH, '[]', 'utf-8')
  }
}

export async function getUsers(): Promise<User[]> {
  await ensureDb()
  const raw = await fs.readFile(DB_PATH, 'utf-8')
  return JSON.parse(raw)
}

export async function saveUsers(users: User[]): Promise<void> {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true })
  await fs.writeFile(DB_PATH, JSON.stringify(users, null, 2), 'utf-8')
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const users = await getUsers()
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) ?? null
}

export async function getUserById(id: string): Promise<User | null> {
  const users = await getUsers()
  return users.find(u => u.id === id) ?? null
}

export async function createUser(
  userData: Omit<User, 'id' | 'status' | 'createdAt'>
): Promise<User> {
  const users = await getUsers()
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
  const users = await getUsers()
  const idx = users.findIndex(u => u.id === id)
  if (idx === -1) throw new Error('User not found')
  users[idx].status = status
  await saveUsers(users)
}

export async function updateUserAdmin(id: string, isAdmin: boolean): Promise<void> {
  const users = await getUsers()
  const idx = users.findIndex(u => u.id === id)
  if (idx === -1) throw new Error('User not found')
  users[idx].isAdmin = isAdmin
  await saveUsers(users)
}
