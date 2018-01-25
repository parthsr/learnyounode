const read = require('./first');

filelocation = '/Users/parthsrivastava/worknode/ex3/file.txt';

describe('defining test case first ', () => {
  it('test case 1', () => {
    expect(read(filelocation)).toBe(5);
  });
});
