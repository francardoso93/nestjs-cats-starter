import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const MockRepository = jest.fn().mockImplementation(() => {
  return {
    create: (dto: any) => dto,
    save: (dto: any) => dto,
  };
});
const mockRepository = new MockRepository();

describe('Cats Controller', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        CatsService,
        {
          provide: getRepositoryToken(Cat),
          useValue: mockRepository,
        },
      ]
    }).compile();

    catsController = module.get<CatsController>(CatsController);
    catsService = module.get<CatsService>(CatsService);
  });

  describe('findAll', () => {
    it('should return a list of cats', async () => {
      const result: Cat[] = [{ Name: 'TestCat', Age: 1, Breed: 'TestBreed' }];
      const somethingSpy = jest.spyOn(catsService, 'findAll').mockImplementation(() => new Promise<Cat[]>((resolve) => {
        resolve(result);
      }))
      expect(await catsController.findAll()).toBe(result)
    }
    )
  })

  describe('create', () => {
    it('should call service create method once', async () => {
      const cat: Cat = { Name: 'TestCat', Age: 1, Breed: 'TestBreed' };
      const somethingSpy = jest.spyOn(catsService, 'create').mockImplementation(() => new Promise<Cat>((resolve) => {
        resolve(cat);
      }))
      await catsController.create(cat);
      expect(somethingSpy).toBeCalledTimes(1);
    }
    )
  })
});


