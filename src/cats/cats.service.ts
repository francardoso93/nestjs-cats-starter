import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatDto } from './cat.dto';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private readonly catsRepository: Repository<Cat>,
    ) { }

    findAll(): Promise<Cat[]> {
        return this.catsRepository.find();
    }

    create(catDto: CatDto): Promise<Cat> {
        const cat: Cat = { // const cat: Cat = this.mapper.map(catDto, Cat); // TODO: Use Automapper
            Name : catDto.Name,
            Age : catDto.Age,
            Breed : catDto.Breed,
        }
        return this.catsRepository.save(cat);
    }
}
