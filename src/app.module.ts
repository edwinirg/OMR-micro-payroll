import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './core/config/schemas/config.schema';
import { config } from './core/config';
import { DatabaseModule } from './core/database/database.module';
import { DepartamentoModule } from './modules/departamento/departamento.module';
import { PuestoModule } from './modules/puesto/puesto.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
      envFilePath: '.env.development',
      load: [config],
    }),
    DatabaseModule,
    DepartamentoModule,
    PuestoModule
  ],
})
export class AppModule {}
