describe('Corrected Data Spec', () => {

  describe('The promise happens in here', () => {

    let allPromises = Promise.all([tryUrl('/users'), tryUrl('/hobbies'), tryUrl('/favorites')])
      .then(result => {
        // console.log('it-then: result', result);
        // expect(result).toEqual(result);
        expect(true).toEqual(true);        
        return result;
      })
      describe('CorrectedDataSpec: allPromises, working with the Promise.all()', () => {
        console.log('allPromises', allPromises);
        
        it ('CorrectedDataSpec: First Working it() Elements', (done) => {
          allPromises.then((elements) => {
            console.log('elements', elements);
            expect(true).toBe(true);
            done();
          })
        })
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
