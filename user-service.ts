// User service — has some reviewable issues for the bot to catch

export interface User {
  id: number
  email: string
  password: string
  role: string
}

export async function createUser(email: string, password: string): Promise<User> {
  // TODO: hash the password
  console.log("Creating user: " + email + " with password: " + password)

  const user = {
    id: Math.random(),
    email: email,
    password: password,
    role: "user"
  }

  return user
}

export function isAdmin(user: User): boolean {
  return user.role == "admin"
}
