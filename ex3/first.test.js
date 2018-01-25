const read = require('./first');

filelocation = './file.txt';

describe('defining test case first ', () => {
  it('test case 1', () => {
    expect(read(filelocation)).toBe(5);
  });
});
