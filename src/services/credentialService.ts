import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import User from '../models/User';

export class CredentialService {
    constructor() {}
    async findUserByEmail(email: string) {
        try {
            const user = await User.findOne({
                where: { email },
            });

            // console.log('user in service', user)

            return user;
        } catch {
            const err = createHttpError(500, 'unable to find user ,server error');
            throw err;
        }
    }

    async verifyPassword(password: string, hashedPassword: string) {
        return await bcrypt.compare(password, hashedPassword);
    }
}
