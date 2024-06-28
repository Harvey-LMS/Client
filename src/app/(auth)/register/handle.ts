"use client"

import { getUser, postUser } from "@/api/register/register"
import { IUser, User } from "@/types/register"

const checkUsername = async (username: string):Promise<string> => {
    if (username.trim() === "") {
        return "Username cannot be empty"
    }

    if (!username.match(/^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/)) {
        return "Username must be between 3 and 20 characters long and can only contain letters, numbers, underscores, and hyphens"
    }

    const user:IUser[] = await getUser()

    if (user.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
        return "Username already exists"
    }

    return ""
}

const checkEmail = async (email: string):Promise<string> => {
    if (email.trim() === "") {
        return "Email cannot be empty"
    }

    if (!email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i)) {
        return "Invalid email"
    }

    const user:IUser[] = await getUser()

    if (user.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        return "Email already exists"
    }

    return ""
}

const checkPassword = (password: string):string => {
    if (password.trim() === "") {
        return "Password cannot be empty"
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        return "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
    }

    return ""
}

const checkConfirmPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
        return "Passwords do not match"
    }

    return ""
}

const register = async (username: string, email: string, password: string, confirmPassword: string): Promise<User> => {
    const valueTemp: User = {
        username: username,
        email: email,
        password: password
      }

      const user:User = await postUser(valueTemp)

    return user
}

export { checkUsername, checkEmail, checkPassword, checkConfirmPassword, register }
