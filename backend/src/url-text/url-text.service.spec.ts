import { Test, TestingModule } from '@nestjs/testing';
import { UrlTextService } from './url-text.service';

describe('UrlTextService', () => {
  let service: UrlTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlTextService],
    }).compile();

    service = module.get<UrlTextService>(UrlTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
