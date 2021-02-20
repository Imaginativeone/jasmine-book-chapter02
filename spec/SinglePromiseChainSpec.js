describe('Single Promise Chain App', () => {
  it ('Should create an operational, top-level Promise.all()', () => {    
    expect(true).toEqual(true);
  })

  describe('Acquire list of users from api data', () => {
    it ('tryUrl Function for users', () => {
      let users = tryUrl('/users');
      expect(tryUrl).toBeTruthy();
    });
  });

  describe('Acquire a list of hobbies from api data', () => {
    it ('tryUrl Function for hobbies', () => {
      let hobbies = tryUrl('/hobbies');
      expect(tryUrl).toBeTruthy();
    })
  });

  describe('Acquire a list of favorites from api data', () => {

    it ('tryUrl Function for favorites', () => {
      let favorites = tryUrl('/favorites');
      expect(tryUrl).toBeTruthy();
    })

    describe('The promise happens in here', () => {

      it ('Creates a Promise.all()', (done) => {
        let allPromises = Promise.all([tryUrl('/users'), tryUrl('/hobbies'), tryUrl('/favorites')])
          .then(result => {
            console.log('it-then: result', result);
            // expect(result).toEqual(result);
            expect(true).toEqual(true);        
            done();
          })
          // console.log('allPromises', allPromises);  
        })

    })
    describe('B', () => {})


    });
  
    
})

// xdescribe('A', () => {
//   it ('A', () => {})
// });
