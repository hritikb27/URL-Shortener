import { Test, TestingModule } from '@nestjs/testing';
import { UrlTextController } from '../controllers/url-text.controller';

describe('UrlTextController', () => {
  let controller: UrlTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlTextController],
    }).compile();

    controller = module.get<UrlTextController>(UrlTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
