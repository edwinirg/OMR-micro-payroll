import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { DepartamentoProvider } from './departamento.provider';

@Module({
  controllers: [DepartamentoController],
  providers: [DepartamentoService, ...DepartamentoProvider],
})
export class DepartamentoModule {}
