import { UserDocument, UserModel } from 'db/documents/user-document';
import { CreateUserDto } from 'dtos/user.dto';
import { Types } from 'mongoose';
import { Inject, Service } from 'typedi';
import { Logger } from 'winston';

@Service()
class UserRepository {
    constructor(@Inject('userModel') private userModel: UserModel, @Inject('logger') private readonly log: Logger) {}

    async findUserById(userId: Types.ObjectId): Promise<UserDocument | null> {
        return this.userModel.findById(userId);
    }

    async findUserByUserName(userName: string): Promise<UserDocument | null> {
        return this.userModel.findOne({
            userName,
        });
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
        try {
            const result = await this.userModel.create(createUserDto);
            return result;
        } catch (err) {
            this.log.error('An error has been occurred  creating the user');
            throw err;
        }
    }
}

export default UserRepository;
