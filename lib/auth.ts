import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByEmail } from './users'

const JWT_SECRET = process.env.JWT_SECRET || 'dba-network-hub-secret-key-2024'

export async function verifyCredentials(email: string, password: string) {
  const user = await getUserByEmail(email)
  if (!user) return null
  if (user.status !== 'active') return null
  const valid = await bcrypt.compare(password, user.password_hash)
  if (!valid) return null
  return { id: user.id, email: user.email, name: user.name, church: user.church, isAdmin: user.is_admin }
}

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as {
      id: string
      email: string
      name: string
      church: string
      isAdmin: boolean
    }
  } catch {
    return null
  }
}
