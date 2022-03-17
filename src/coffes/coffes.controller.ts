import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffes')
export class CoffesController {
    @Get()
    findAll() {
        return "This action returns all coffees"
    };

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} coffees`
    }
    @Post()
    create(@Body() body) {
        return body
    }
}
