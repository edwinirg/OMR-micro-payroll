import { BaseController } from "src/core/global/controller/base.controller";
import { DepartamentoService } from "./departamento.service";
import { CreateDepartamentoDTO } from "./dto/create.dto";
import { FindDepartamentoDTO } from "./dto/find.dto";
import { UpdateDepartamentoDTO } from "./dto/update.dto";
import { Departamento } from "./entities/departamento.entity";

const DepartamentoController = BaseController<CreateDepartamentoDTO, FindDepartamentoDTO, UpdateDepartamentoDTO, Departamento>(DepartamentoService, 'Departamento');
export { DepartamentoController }
