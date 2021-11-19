import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDocument, AdminSchema } from '../model/admin.model';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(AdminSchema.name) private adminModel: Model<AdminDocument>,
  ) {}

  getItem = async () => {
    try {
      const item = await this.adminModel.find();

      if (!item) return { success: true, msg: 'not found' };

      return { success: true, item };
    } catch (err) {
      return err;
    }
  };
}
