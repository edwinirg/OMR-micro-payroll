import { Inject, Injectable } from '@nestjs/common';
import { PAYROLL_REPOSITORY } from 'src/core/constants';
import { Puesto } from './entities/puesto.entity';
import { BaseService } from 'src/core/global/services/global.service';
import { CreatePuestoDTO } from './dto/create.dto';
import { FindPuestoDTO } from './dto/find.dto';
import { UpdatePuestoDTO } from './dto/update.dto';


@Injectable()
export class PuestoService extends BaseService<Puesto, CreatePuestoDTO, FindPuestoDTO, UpdatePuestoDTO> {
  constructor(
    @Inject(PAYROLL_REPOSITORY)
    private readonly PuestoRepository: typeof Puesto,
  ) {
    super(PuestoRepository, 'Puesto')
  }
}
