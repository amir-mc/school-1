import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ParentService } from './parent.service';

@Controller('admin/parents')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  create(@Body() body: { userId: string }) {
    return this.parentService.createParent(body.userId);
  }

  @Get()
  findAll() {
    return this.parentService.getAllParents();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentService.getParentById(id);
  }
}
