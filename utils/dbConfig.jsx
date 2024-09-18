import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://expenses-tracker_owner:nFk7fXqp1udJ@ep-restless-bar-a5v256m1.us-east-2.aws.neon.tech/expenses-tracker?sslmode=require');
export const db = drizzle(sql,{schema});