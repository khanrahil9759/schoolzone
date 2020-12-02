import * as dotenv from 'dotenv';

const result = dotenv.config()


if (result?.error) {
    throw new Error('Add .env file')
}

export const config = {
    env: process.env.SZ_ENV,
    appName: process.env.SZ_APP,
    port: process.env.SZ_PORT,
    mongoUri: `mongodb+srv://service:service123@cluster0.xgz6x.mongodb.net/local?retryWrites=true&w=majority`,
}