import { Module } from '@nestjs/common';
import { QuestionsModule } from './modules';

@Module({
  imports: [QuestionsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
