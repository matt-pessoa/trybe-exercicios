const uppercase = require('./exercise1.js');

describe('Testing uppercase function', () => {
  it('uppercase should be a function', () => {
    expect(typeof uppercase).toBe('function');
  });

  it('uppercase(test) should return TEST', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
