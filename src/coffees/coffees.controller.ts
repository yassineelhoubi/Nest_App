import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
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

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This action update #${id} coffees`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action remove #${id} coffees`
    }

}
