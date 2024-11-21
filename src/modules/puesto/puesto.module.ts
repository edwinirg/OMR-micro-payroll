import { Module } from '@nestjs/common';
import { PuestoService } from './puesto.service';
import { PuestoController } from './puesto.controller';
import { PuestoProvider } from './puesto.provider';

@Module({
  controllers: [PuestoController],
  providers: [PuestoService, ...PuestoProvider],
})
export class PuestoModule {}
