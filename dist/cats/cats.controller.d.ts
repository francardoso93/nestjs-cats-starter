import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CatDto } from './cat.dto';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    findAll(): Promise<Cat[]>;
    create(cat: CatDto): Promise<Cat>;
    upsert(id: string, cat: CatDto): void;
}
