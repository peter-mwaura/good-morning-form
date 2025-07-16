import { Body, Controller, Post } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './dtos/create-submission.dto';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  create(@Body() dto: CreateSubmissionDto) {
    return this.submissionService.create(dto);
  }
}
