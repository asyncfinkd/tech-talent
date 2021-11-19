import { Controller, Get, Res } from '@nestjs/common';
import { AdminService } from '../service/admin.service';

@Controller('api')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('get/admins')
  async getItem(@Res() res) {
    return res.send(await this.adminService.getItem());
  }
}
