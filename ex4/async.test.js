const read = require('./async');

filelocation = '/Users/parthsrivastava/worknode/ex3/file.txt';
describe('defining file path ', () => {
  it('test case 1 for null being passed', () => {
    expect(read(null)).toBe(false);
  });
  it('test case 2 for nothing being passed', () => {
    expect(read()).toBe(false);
  });
  it('test case 3 for undefined being passed', () => {
    expect(read(undefined)).toBe(false);
  });
  it('test case 3 for wrong file being passed', () => {
    expect(read('assdasdss')).toBe(false);
  });
});
