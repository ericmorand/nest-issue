import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ok } from "assert";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {
        ok(catsService, 'catsService is falsy');
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}