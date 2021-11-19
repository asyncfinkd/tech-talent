import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = AdminSchema & Document;

@Schema({ collection: 'admins' })
export class AdminSchema {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;
}

export const Admin = SchemaFactory.createForClass(AdminSchema);
