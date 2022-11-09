import * as dotenv from 'dotenv';

dotenv.config();

export default {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    },
    stripe: {
        secret: process.env.STRIPE_API_KEY
    },
    mailgun: {
        apiKey: process.env.MAILGUN_API_Key,
        domain: process.env.MAILGUN_DOMAIN,
        toEmail: process.env.MAILGUN_TO_EMAIL
    }
}