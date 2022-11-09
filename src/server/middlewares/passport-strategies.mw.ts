import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import { Payload, UsersTable } from '../../types';
import db from '../db';
import { compareHash } from '../utils/passwords';
import * as PassportJWT from 'passport-jwt';
import config from '../config';
import { Application } from 'express';

export function configurePassport(app: Application) {
    passport.serializeUser((user: Payload, done) => {
        if (user.password) {
            delete user.password
        }
        done(null, user);
    });
    passport.deserializeUser((user, done) => done(null, user!));
    
    passport.use(new PassportLocal.Strategy({
        usernameField: 'email',
        session: false
    }, async (email, password, done) => {
        try {
            const [userFound] = await db.Users.find('email', email);
            if (userFound && compareHash(password, userFound.password!)) {
                delete userFound.password;
                done(null, userFound);
            } else {
                done(null, false, { message: 'invalid credentials'}); //Status 401 text of 'Unauthorized', or add function for custom message
            }
        } catch (error) {
            done(error);
        }
    }));
    
    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret
    }, (payload: Payload, done) => {
        try {
            done(null, payload);
        } catch (error) {
            done(error);
        }
    }));
    app.use(passport.initialize());
}

