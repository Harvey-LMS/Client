"use client"

const checkPassword = (password: string):string => {
    if (password.trim() === "") {
        return "Password cannot be empty"
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        return "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
    }

    return ""
}

export { checkPassword }