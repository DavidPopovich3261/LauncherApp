import { verify } from '../utils/token.js'

export function admin(req, res, next) {
    if (!(req.headers && req.headers.authorization)) {
        res.status(400).json({ "message": "bed req" })
        return
    }
    const user = verify(req.headers.authorization)
    if (user.user_type == "admin") {
        req.user = user
        next()
        return
    }
    res.status(400).json({ "message": "unauthorization" })

}

export function intelligence(req, res, next) {
    if (!(req.headers && req.headers.authorization)) {
        res.status(400).json({ "message": "bed req" })
        return
    }
    const user = verify(req.headers.authorization)
    if (user.user_type == "intelligence" || user.user_type == "admin") {
        req.user = user
        next()
        return
    }
    res.status(400).json({ "message": "unauthorization" })

}

export function air(req, res, next) {
    if (!(req.headers && req.headers.authorization)) {
        res.status(400).json({ "message": "bed req" })
        return
    }
    const user = verify(req.headers.authorization)
    if (user.user_type == "air" || user.user_type == "intelligence" || user.user_type == "admin") {
        req.user = user
        next()
        return
    }
    res.status(400).json({ "message": "unauthorization" })

}
