describe('Corrected Data Spec', () => {

  describe('The promise happens in here', () => {

    let allPromises = Promise.all([tryUrl('/users'), tryUrl('/hobbies'), tryUrl('/favorites')])
      .then(result => {
        console.log('it-then: result', result);
        // expect(result).toEqual(result);
        expect(true).toEqual(true);        
        // done();
        return result;
      })
      .then((data) => {
        console.log('data', data);
        describe('data: C', () => {}) // Not presented
        // done();
      })
      describe('allPromises', () => {})
      console.log('allPromises', allPromises);  

      it ('CorrectedDataSpec: Creates a Promise.all()', () => {
        expect(true).toBe(true);
      })
      
      it ('Another it', () => {
        expect(true).toBe(true);
      })
  })

  describe('Template', () => {})

});

// xdescribe('A', () => {
//   it ('A', () => {})
// });
