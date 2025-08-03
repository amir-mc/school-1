import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { ParentService } from './parent.service';

@Controller('admin/parents')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  create(@Body() body: { userId: string }) {
    return this.parentService.createParent(body.userId);
  }

  @Get('list')
  findAll() {
    return this.parentService.getAllParents();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentService.getParentById(id);
  }
@Patch(':id')
updateParent(
  @Param('id') id: string,
  @Body() body: { name?: string; username?: string; password?: string }
) {
  return this.parentService.updateParent(id, body);
}


@Delete(':id')
deleteParent(@Param('id') id: string) {
  return this.parentService.deleteParent(id);
}

}
 