import {FormatResultPipe} from './format-result.pipe';

describe('Pipe: Default', () => {
  let pipe: FormatResultPipe;

  beforeEach(() => {
    pipe = new FormatResultPipe();
  });

  it('should be able to append the result String to answer', () => {
    expect(pipe.transform(4)).toBe('Result is 4');
  });

});