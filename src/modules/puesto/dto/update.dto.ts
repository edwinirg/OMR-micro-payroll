import { IsNotEmpty, ValidateNested, IsString, IsUUID } from "class-validator"
import { CreatePuestoDTO } from "./create.dto"
import { Type } from "class-transformer"

export class UpdatePuestoDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreatePuestoDTO)
  readonly data: CreatePuestoDTO

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  readonly _id: string
}
