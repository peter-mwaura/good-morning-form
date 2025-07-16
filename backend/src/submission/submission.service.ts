import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubmissionDto } from './dtos/create-submission.dto';

@Injectable()
export class SubmissionService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateSubmissionDto) {
    return this.prisma.submission.create({
      data: dto,
    });
  }
}
