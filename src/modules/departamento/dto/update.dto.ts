import { Type } from "class-transformer"
import { IsNotEmpty, ValidateNested, IsString, IsUUID } from "class-validator"
import { CreateDepartamentoDTO } from "./create.dto"


export class UpdateDepartamentoDTO  {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateDepartamentoDTO)
  readonly data: CreateDepartamentoDTO

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  readonly _id: string
}
