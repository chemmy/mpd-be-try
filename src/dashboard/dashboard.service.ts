import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  private dashboard = ['This is the dashboard'];

  getAllDashboardItems() {
    return this.dashboard;
  }
}
