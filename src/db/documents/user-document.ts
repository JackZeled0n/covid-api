import { Document } from 'mongoose';

export interface UserDocument extends Document {
    name: string;
    userName: string;
    passwordHash: string;
}
