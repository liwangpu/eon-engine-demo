import { Test, TestingModule } from '@nestjs/testing';
import { BusinessObjectController } from './business-object.controller';

describe('BusinessObjectController', () => {
  let controller: BusinessObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessObjectController],
    }).compile();

    controller = module.get<BusinessObjectController>(BusinessObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
