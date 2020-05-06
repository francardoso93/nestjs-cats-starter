import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  // imports: [TypeOrmModule.forRoot(), AutomapperModule.withMapper(), CatsModule],
  imports: [TypeOrmModule.forRoot(), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
