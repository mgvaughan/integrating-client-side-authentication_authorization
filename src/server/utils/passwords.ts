import * as bcrypt from 'bcrypt';

export function generateHash(password: string) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function compareHash(password: string, hashed: string) {
    return bcrypt.compareSync(password, hashed);
}

// console.log(generateHash('password123'));
// console.log(compareHash('password123', '$2b$12$/.m4FDPUm8PsLX.w4WqgF..krSUer/s6H5mB1S0upLNC/YJk2b0Vi'));