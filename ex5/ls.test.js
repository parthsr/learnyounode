const ls = require('./ls');

describe('Use case testing', () => {
  it('TEST CASE 1', () => {
    expect(ls('/Users/parthsrivastava/worknode/ex3', 'txt')).toBe(['file.txt', 'file0.txt']);
  });

  it('TEST CASE 2 passing empty file location', () => {
    expect(ls('', 'txt')).toBe(false);
  });
  it('TEST CASE 3 passing null as file location', () => {
    expect(ls(null, 'txt')).toBe(false);
  });
  it('TEST CASE 4 passing undefined as file location', () => {
    expect(ls(undefined, 'txt')).toBe(false);
  });

  it('TEST CASE 5 by passing null extension', () => {
    expect(ls('/Users/parthsrivastava/worknode/ex3', null)).toBe(false);
  });
  it('TEST CASE 6 by passing undefined extension', () => {
    expect(ls(undefined, undefined)).toBe(false);
  });
});
