import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool()
 
export const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}