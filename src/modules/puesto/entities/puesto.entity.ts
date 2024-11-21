import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Departamento } from "src/modules/departamento/entities/departamento.entity";

@Table({
  indexes: [],
  paranoid: true,
})

export class Puesto extends Model<Puesto>{
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true
  })
  _id: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string;

  @ForeignKey(()=>Departamento)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  departamento_id: string;
  @BelongsTo(() => Departamento)
  departamento: Departamento

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  salario: string;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nivel: string;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  salario_base: string;
}
