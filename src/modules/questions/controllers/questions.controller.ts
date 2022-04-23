import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from '../dtos/create-message-dto';

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
  public create(@Body() body: CreateMessageDto): void {
    console.log(body);
  }
}
