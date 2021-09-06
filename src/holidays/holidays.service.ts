import { Injectable } from '@nestjs/common';
import { Holiday, HolidaysType } from './holidays.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateHolidayDto } from './dto/create-holiday.dto';

@Injectable()
export class HolidaysService {
  private holidays = [];

  getAllHolidays() {
    return this.holidays;
  }

  createHoliday(createHolidayDto: CreateHolidayDto) {
    const { name, date } = createHolidayDto;
    const holiday: Holiday = {
      id: uuidv4(),
      name,
      date,
      type: HolidaysType.NACIONAL,
    };

    this.holidays.push(holiday);
    return holiday;
  }

  getHolidayById(id: string): Holiday {
    return this.holidays.find((holiday) => holiday.id == id);
  }

  deleteHoliday(id: string): void {
    this.holidays = this.holidays.filter((holiday) => holiday.id !== id);
  }

  updateHoliday(id: string, name: string, date: Date): Holiday {
    const holiday = this.getHolidayById(id);
    holiday.name = name;
    holiday.date = date;

    return holiday;
  }
}
