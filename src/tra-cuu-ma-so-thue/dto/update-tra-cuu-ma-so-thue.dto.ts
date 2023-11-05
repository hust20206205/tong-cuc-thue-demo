import { PartialType } from '@nestjs/mapped-types';
import { CreateTraCuuMaSoThueDto } from './create-tra-cuu-ma-so-thue.dto';

export class UpdateTraCuuMaSoThueDto extends PartialType(CreateTraCuuMaSoThueDto) {}
