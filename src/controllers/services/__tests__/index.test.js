const { getUUID } = require('../');

describe('***Services Tests***', () => {
  it('should return a random UUID', () => {
    const actual = getUUID();

    expect(actual.length > 0).toBeTruthy();
    expect(actual.length).toBeGreaterThan(0);
  });

  it('should not return empty or undefined', () => {
    const actual = getUUID();

    expect(actual.length <= 0).toBeFalsy();
    expect(actual).toBeDefined();
  });
});
