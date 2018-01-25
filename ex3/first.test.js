const read = require('./first');

filelocation = '/Users/parthsrivastava/worknode/ex3/file.txt';

describe('defining test case first ', () => {
  it('test case 1', () => {
    expect(read(filelocation)).toBe(5);
  });
  it('test case 2', () => {
    expect(read('/Users/parthsrivastava/worknode/ex3/file0.txt')).toBe(0);
  });
});
