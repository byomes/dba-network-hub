import { supabase } from './supabase'
import bcrypt from 'bcryptjs'

export interface User {
  id: string
  email: string
  password_hash: string
  name: string
  church: string
  role: string
  expertise: string[]
  status: string
  is_admin: boolean
  created_at: string
}

export async function getUsers(): Promise<User[]> {
  const { data } = await supabase.from('users').select('*')
  return data || []
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const { data } = await supabase.from('users').select('*').eq('email', email).single()
  return data
}

export async function getUserById(id: string): Promise<User | null> {
  const { data } = await supabase.from('users').select('*').eq('id', id).single()
  return data
}

export async function createUser(userData: {
  email: string
  password: string
  name: string
  church: string
  role: string
  expertise: string[]
}): Promise<User | null> {
  const passwordHash = await bcrypt.hash(userData.password, 10)
  const { data } = await supabase.from('users').insert({
    email: userData.email,
    password_hash: passwordHash,
    name: userData.name,
    church: userData.church,
    role: userData.role,
    expertise: userData.expertise,
    status: 'pending',
    is_admin: false,
  }).select().single()
  return data
}

export async function updateUserStatus(id: string, status: string): Promise<User | null> {
  const { data } = await supabase.from('users').update({ status }).eq('id', id).select().single()
  return data
}

export async function updateUserAdmin(id: string, isAdmin: boolean): Promise<User | null> {
  const { data } = await supabase.from('users').update({ is_admin: isAdmin }).eq('id', id).select().single()
  return data
}

export async function deleteUser(id: string): Promise<void> {
  await supabase.from('users').delete().eq('id', id)
}
