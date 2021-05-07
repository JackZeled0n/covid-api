import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import AuthService from '../services/auth.service';

@Service()
class AuthController {
    constructor(private readonly authService: AuthService) {}

    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const loginInfo = await this.authService.login(req.body);
            res.send(loginInfo);
        } catch (err) {
            next(err);
        }
    }
}

export default AuthController;
