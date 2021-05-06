import { UserDocument } from 'db/documents/user-document';
import { model, Schema } from 'mongoose';

const userSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true,
    },
    passwordHash: {
        type: String,
        required: true,
        select: false,
    },
});

export default model<UserDocument>('user', userSchema);
