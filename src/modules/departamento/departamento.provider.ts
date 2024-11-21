import { PAYROLL_REPOSITORY } from "src/core/constants";
import { Departamento } from "./entities/departamento.entity";


export const DepartamentoProvider = [
  {
    provide: PAYROLL_REPOSITORY,
    useValue: Departamento,
  },
]