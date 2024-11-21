import { PAYROLL_REPOSITORY } from "src/core/constants";
import { Puesto } from "./entities/puesto.entity";


export const PuestoProvider = [
  {
    provide: PAYROLL_REPOSITORY,
    useValue: Puesto,
  },
]