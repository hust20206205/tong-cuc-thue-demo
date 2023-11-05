import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TraCuuMaSoThueService } from './tra-cuu-ma-so-thue.service';
import { CreateTraCuuMaSoThueDto } from './dto/create-tra-cuu-ma-so-thue.dto';
import { UpdateTraCuuMaSoThueDto } from './dto/update-tra-cuu-ma-so-thue.dto';

@Controller('tra-cuu-ma-so-thue')
export class TraCuuMaSoThueController {
  constructor(private readonly traCuuMaSoThueService: TraCuuMaSoThueService) {}

  @Post()
  create(@Body() createTraCuuMaSoThueDto: CreateTraCuuMaSoThueDto) {
    return this.traCuuMaSoThueService.create(createTraCuuMaSoThueDto);
  }

  @Get()
  findAll() {
    return this.traCuuMaSoThueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traCuuMaSoThueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTraCuuMaSoThueDto: UpdateTraCuuMaSoThueDto) {
    return this.traCuuMaSoThueService.update(+id, updateTraCuuMaSoThueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traCuuMaSoThueService.remove(+id);
  }
}
