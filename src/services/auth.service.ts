import { Inject, Service } from 'typedi';
import { Logger } from 'winston';
import { LoginDto, LoginUserInfoDto } from '../dtos/login.dto';
import HttpException from '../exceptions/http.exception';
import UserRepository from '../repositories/user.repository';

@Service()
class AuthService {
    constructor(private readonly userRepository: UserRepository, @Inject('logger') private readonly log: Logger) {}

    async login(loginDto: LoginDto): Promise<LoginUserInfoDto> {
        try {
            const user = await this.userRepository.findUserByUserName(loginDto.userName);

            if (!user) {
                throw new HttpException(404, `The user doesn't exists in the website`);
            }

            const isValidPassword = await user.comparePassword(loginDto.password);

            if (!isValidPassword) {
                throw new HttpException(401, 'The password is incorrect');
            }

            return {
                userName: user.userName,
                name: user.name,
            };
        } catch (err) {
            this.log.error('An error has been occurred  in the sync service');
            throw err;
        }
    }
}

export default AuthService;
