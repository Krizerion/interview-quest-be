import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/create-question-dto';

@Controller('questions')
export class QuestionsController {
  @Get()
  public getAll(@Query() query: any) {
    console.log(query);
    return 'asdf';
  }

  @Get('/:id')
  public getById(@Param() id: string): void {
    console.log(id);
  }

  @Post()
  public create(@Body() body: CreateQuestionDto): void {
    console.log(body);
  }
}
