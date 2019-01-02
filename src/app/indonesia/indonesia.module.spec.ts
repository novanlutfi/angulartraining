import { IndonesiaModule } from './indonesia.module';

describe('IndonesiaModule', () => {
  let indonesiaModule: IndonesiaModule;

  beforeEach(() => {
    indonesiaModule = new IndonesiaModule();
  });

  it('should create an instance', () => {
    expect(indonesiaModule).toBeTruthy();
  });
});
