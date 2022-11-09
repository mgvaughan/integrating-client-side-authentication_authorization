import * as mysql from 'mysql';

import Chirps from './chirps';
import Users from './users';
import config from '../config'

export const pool = mysql.createPool(config.db);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results)
        });
    });
};

export default {
    Chirps,
    Users,
};