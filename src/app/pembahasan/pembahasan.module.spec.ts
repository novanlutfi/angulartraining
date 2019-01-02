import { PembahasanModule } from './pembahasan.module';

describe('PembahasanModule', () => {
  let pembahasanModule: PembahasanModule;

  beforeEach(() => {
    pembahasanModule = new PembahasanModule();
  });

  it('should create an instance', () => {
    expect(pembahasanModule).toBeTruthy();
  });
});
