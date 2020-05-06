import { Cat } from './cat.entity';
import { Repository } from 'typeorm';
import { CatDto } from './cat.dto';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: Repository<Cat>);
    findAll(): Promise<Cat[]>;
    create(catDto: CatDto): Promise<Cat>;
}
