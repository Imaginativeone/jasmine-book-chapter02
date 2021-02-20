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
        
        it ('CorrectedDataSpec: Promise.all() Elements are available here', (done) => {
          allPromises.then((elements) => {
            console.log('elements', elements);

            let usrs = elements[0];
            let hobs = elements[1];
            let favs = elements[2];

            console.log('usrs', usrs, 'hobs', hobs, 'favs', favs);

            expect(true).toBe(true);
            done();
          })
        }) ///////////////////////////////////

        it ('CorrectedDataSpec: Correct the elements', (done) => {
          allPromises.then((elements) => {

            // console.log('elements: before', elements); // same as line 40

            elements[0] = correctUsers(elements[0], 'PA');
            elements[1] = correctHobbies(elements[1]);
            elements[2] = correctFavorites(elements[2]);

            console.log('elements: after', elements);

            expect(true).toBe(true);
            done();
          })
        }) ///////////////////////////////////

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
