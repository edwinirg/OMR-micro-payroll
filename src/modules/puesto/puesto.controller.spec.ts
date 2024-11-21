import { Test, TestingModule } from '@nestjs/testing';
import { PuestoController } from './puesto.controller';
import { PuestoService } from './puesto.service';

describe('PuestoController', () => {
  let controller: PuestoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuestoController],
      providers: [PuestoService],
    }).compile();

    controller = module.get<PuestoController>(PuestoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
