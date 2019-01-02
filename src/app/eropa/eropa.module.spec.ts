import { EropaModule } from './eropa.module';

describe('EropaModule', () => {
  let eropaModule: EropaModule;

  beforeEach(() => {
    eropaModule = new EropaModule();
  });

  it('should create an instance', () => {
    expect(eropaModule).toBeTruthy();
  });
});
