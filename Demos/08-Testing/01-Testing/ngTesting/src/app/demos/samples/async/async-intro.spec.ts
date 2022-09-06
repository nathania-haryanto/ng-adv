import { tick } from '@angular/core/testing';

describe('Component - AsyncTest - Intro', () => {
  // Comment after understanding
  //   it('should not be reached or does not pass', () => {
  //     let pass = false;

  //     setTimeout(() => {
  //       console.log('inside timeout');
  //       pass = true;
  //       // unreachable
  //       expect(pass).toBeTruthy();
  //     }, 500);

  //     expect(pass).toBeTruthy();
  //   });

  it('should not be reached or does not pass', (done) => {
    let pass = false;

    setTimeout(() => {
      console.log('inside timeout');
      pass = true;
      expect(pass).toEqual(true);
      done();
    }, 500);
  });
});
