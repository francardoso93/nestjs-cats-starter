import { Controller, Get, Post, Body, Put, Param, NotImplementedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CatDto } from './cat.dto';

@Controller('cats')
export class CatsController {
 
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() cat: CatDto): Promise<Cat> {
      return this.catsService.create(cat);
    }   

    @Put(':id')
    upsert(@Param('id') id: string, @Body() cat: CatDto){
      // throw new NotImplementedException();
      throw new NotImplementedException({
        "code":501,
        "message": "We forgot to implement this",
        "DetailedMessage": "And we won't"
      });
    }
}

