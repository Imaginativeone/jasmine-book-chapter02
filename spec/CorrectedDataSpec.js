describe('Corrected Data Spec', () => {

  describe('The promise happens in here', () => {

    it ('Creates a Promise.all()', (done) => {
      let allPromises = Promise.all([tryUrl('/users'), tryUrl('/hobbies'), tryUrl('/favorites')])
        .then(result => {
          console.log('it-then: result', result);
          // expect(result).toEqual(result);
          expect(true).toEqual(true);        
          done();
          return result;
        })
        .then((data) => {
          console.log('data', data);
          describe('data: C', () => {})
          done();
        })
        console.log('allPromises', allPromises);  
      })

  })

  describe('B', () => {})

});

// xdescribe('A', () => {
//   it ('A', () => {})
// });
