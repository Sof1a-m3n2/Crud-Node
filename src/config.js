
import {config} from 'dotenv'

config()

export const base = process.env.MONGODB_URI;

export const PORT = process.env.PORT || 5000;