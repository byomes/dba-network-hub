import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dba-network-hub-secret-key-2024'

// Hardcoded users for proof of concept
// In production this would be a real database
const USERS = [
  {
    id: '1',
    email: 'pastorbill@catalyst302.com',
    passwordHash: bcrypt.hashSync('John3:16!', 10),
    name: 'Pastor Bill Yomes',
    church: 'Catalyst Community Church',
    expertise: ['Apologetics', 'Theological Education', 'Digital Ministry']
  }
]

export async function verifyCredentials(email: string, password: string) {
  const user = USERS.find(u => u.email.toLowerCase() === email.toLowerCase())
  if (!user) return null
  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) return null
  return { id: user.id, email: user.email, name: user.name, church: user.church, expertise: user.expertise }
}

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; email: string; name: string; church: string }
  } catch {
    return null
  }
}
