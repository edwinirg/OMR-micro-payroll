import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/global/services/global.service';
import { Departamento } from './entities/departamento.entity';
import { PAYROLL_REPOSITORY } from 'src/core/constants';
import { CreateDepartamentoDTO } from './dto/create.dto';
import { FindDepartamentoDTO } from './dto/find.dto';
import { UpdateDepartamentoDTO } from './dto/update.dto';

@Injectable()
export class DepartamentoService extends BaseService<Departamento, CreateDepartamentoDTO, FindDepartamentoDTO, UpdateDepartamentoDTO> {
  constructor(
    @Inject(PAYROLL_REPOSITORY)
    private readonly DepartamentoRepository: typeof Departamento,
  ) {
    super(DepartamentoRepository, 'Departamento')
  }
}
