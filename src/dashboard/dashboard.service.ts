import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  private dashboard = [];

  getAllDashboardItems() {
    return this.dashboard;
  }
}
