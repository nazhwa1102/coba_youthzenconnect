import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/reviews.entity';

@Module({
    imports : [TypeOrmModule.forFeature([Review])]
})
export class ReviewsModule {}
