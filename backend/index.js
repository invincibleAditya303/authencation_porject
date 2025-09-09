const express = require('express')

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const path = require('path')
const dbPath = path.join(__dirname, 'users.db')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { error } = require('console')

const PORT = process.env.PORT || 5000

let db = null

const intializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })

        app.listen(PORT, () => {
            console.log('Server running on http://localhost:5000')
        })
    } catch(e) {
        console.log(`DB Error: ${e.message}`)
    }
}

intializeDBAndServer()

//Register user API
app.post('/register', async (request, response) => {
    const {email, password, gender} = request.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const getUserQuery = `
        SELECT
            *
        FROM
            users
        WHERE
            email='${email}';
    `

    const dbUser = await db.get(getUserQuery)

    if (dbUser === undefined) {
        if (password.length >= 6) {
            const addUserQuery  = `
                INSERT INTO
                    users
                    (email, password, gender)
                VALUES
                    ('${email}', '${hashedPassword}', '${gender}');
            `

            await db.run(addUserQuery)
            response.status(200)
            response.json('User registered successfully')
        } else {
            response.status(400)
            response.json('Password is too short')
        }
    } else {
        response.status(400)
        response.json('User already exists')
    }
})

//Login user API
app.post('/login', async (request, response) => {
    const {email, password} = request.body

    const getUserQuery = `
        SELECT
            *
        FROM
            users
        WHERE
            email='${email}';
    `

    const dbUser = await db.get(getUserQuery)

    if (dbUser === undefined) {
        response.status(401)
        response.json('Invalid user')
    } else {
        const isPasswordMatched = await bcrypt.compare(password, dbUser.password)

        if (isPasswordMatched) {
            const payload = {
                id: dbUser.id,
                email: dbUser.email,
                gender: dbUser.gender
            }

            const jwtToken = jwt.sign(payload, 'userDetails')
            response.status(200)
            response.json(jwtToken)
        } else {
            response.status(401)
            response.json('Invalid password')
        }
    }
})