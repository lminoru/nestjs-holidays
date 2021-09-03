import { Injectable } from '@nestjs/common';

@Injectable()
export class HolidaysService {
  private holidays = [];

  getAllHolidays() {
    return this.holidays;
  }
}
