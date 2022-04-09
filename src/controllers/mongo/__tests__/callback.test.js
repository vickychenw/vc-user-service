/**
 * Demo how to test Callback functions
 */

const cbTest = (callback) => {
  setImmediate(() => callback('yay'));
};

// Tests are not asynchronous
describe('Callback Tests', () => {
  it('should test callback function - negative', (done) => {
    function callback(value) {
      try {
        expect(value).not.toBe('nooo');
        done();
      } catch (err) {
        done(err);
      }
    }

    cbTest(callback);
  });
  it('should test callback function - positive', (done) => {
    cbTest((value) => {
      try {
        expect(value).toBe('yay');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
