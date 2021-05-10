import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import { ACCESS_TOKEN_COOKIE_NAME } from '../utils/jwt';
import AuthService from '../services/auth.service';
import { variables } from '../environment/variables';

@Service()
class AuthController {
    constructor(private readonly authService: AuthService) {}

    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, userName, name, accessToken } = await this.authService.login(req.body);

            const secure = variables.NODE_ENV !== 'development';
            res.cookie(ACCESS_TOKEN_COOKIE_NAME, accessToken, { secure, httpOnly: true });
            res.send({ userId, userName, name, accessToken });
        } catch (err) {
            next(err);
        }
    }

    public async me(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, userName, name, accessToken } = await this.authService.me(req.userId);

            res.send({ userId, userName, name, accessToken });
        } catch (err) {
            next(err);
        }
    }

    public async logout(_req: Request, res: Response) {
        res.clearCookie(ACCESS_TOKEN_COOKIE_NAME);
        res.status(200).send('Successfully Logout');
    }
}

export default AuthController;
