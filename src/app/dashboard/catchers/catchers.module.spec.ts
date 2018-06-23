import { CatchersModule } from './catchers.module';

describe('CatchersModule', () => {
  let catchersModule: CatchersModule;

  beforeEach(() => {
    catchersModule = new CatchersModule();
  });

  it('should create an instance', () => {
    expect(catchersModule).toBeTruthy();
  });
});
