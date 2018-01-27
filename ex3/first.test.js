const read = require('./first');

filelocation = '/Users/parthsrivastava/worknode/ex/file.txt';
describe('defining test case first ', () => {
  it('test case 1 use case', () => {
    expect(read(filelocation)).toBe(5);
  });
  it('test case 2 by passing file having 0 lines', () => {
    expect(read('/Users/parthsrivastava/worknode/ex3/file0.txt')).toBe(0);
  });
  it('test case 3 by passing nothing', () => {
    expect(read());
  });
  it('test case 4 byv passing null', () => {
    expect(read(null));
  });
  it('test case 5 by passing spoof file location', () => {
    expect(read('sfsdsds')).toBe(false);
  });
});
