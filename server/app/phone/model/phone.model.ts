import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PhoneSchema = new Schema({
    phone: String
})

export const Phone = mongoose.model('Phone', PhoneSchema);
