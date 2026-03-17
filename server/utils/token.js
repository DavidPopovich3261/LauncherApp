import jwt from 'jsonwebtoken'

const secret = process.env.jwt

export function sign(user_type, username) {
    const token = jwt.sign({ user_type: user_type, username: username }, secret, { expiresIn: '1h' })
    return token
}

export function verify(token) {
    const tokenVerify = jwt.verify(token, secret)
    return tokenVerify
}


