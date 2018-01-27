const read = require('./async');

filelocation = '/Users/parthsrivastava/worknode/ex3/file.txt';
describe('defining file path ', () => {
  it('test case 1 for null being passed', () => {
    expect(read(null)).toBe(false);
  });
});
