import { DashboardService } from './dashboard.service';
import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  getAllDashboardItems() {
    return this.dashboardService.getAllDashboardItems();
  }
}
