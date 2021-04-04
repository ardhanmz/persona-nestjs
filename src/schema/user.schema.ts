import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  username: string;

  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  income: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
