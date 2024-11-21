import { BaseController } from "src/core/global/controller/base.controller";
import { CreatePuestoDTO } from "./dto/create.dto";
import { FindPuestoDTO } from "./dto/find.dto";
import { UpdatePuestoDTO } from "./dto/update.dto";
import { Puesto } from "./entities/puesto.entity";
import { PuestoService } from "./puesto.service";


const PuestoController = BaseController<CreatePuestoDTO, FindPuestoDTO, UpdatePuestoDTO, Puesto>(PuestoService, 'Puesto');
export { PuestoController }