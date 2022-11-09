import { Query } from './index';
import { IUser, MysqlResponse, UsersTable } from '../../types'

const allUsers = async () => Query<IUser[]>('SELECT * FROM users');
const oneUser = async (id: number) => Query<IUser[]>('SELECT * FROM users WHERE id = ?', [id]);
const createUser = async (user: IUser) => Query(`INSERT INTO users SET ?`, [user]);
const updateUser = async (user: IUser, id: number) => Query(`UPDATE users SET ? WHERE id = ?`, [user, id]);
const deleteUser = async (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);

const find = (column: string, value: string) => Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);
const insert = (newUser: { name: string, email: string, password: string }) => Query<MysqlResponse>('INSERT INTO users SET ?', newUser);

export default{
    allUsers,
    oneUser,
    createUser,
    updateUser,
    deleteUser,
    find,
    insert
}

