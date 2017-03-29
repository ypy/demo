import { MyPipesPipe } from './my-pipes.pipe';

describe('MyPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipesPipe();
    expect(pipe).toBeTruthy();
  });
});
