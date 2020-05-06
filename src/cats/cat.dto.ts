import { IsNotEmpty, IsNumber } from 'class-validator';

export class CatDto {
    id?: number;

    @IsNotEmpty()
    Name: string;

    @IsNotEmpty()
    @IsNumber()
    Age: number;
    
    @IsNotEmpty()
    Breed: string;
}
