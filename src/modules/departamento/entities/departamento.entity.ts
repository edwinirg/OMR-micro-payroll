import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  indexes: [],
  paranoid: true,
})
  
export class Departamento extends Model<Departamento>{
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descripcion: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  presupuesto: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  estatus: string;

}
