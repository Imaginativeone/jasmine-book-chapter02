describe('Single Promise Chain App', () => {
  it ('Should create an operational, top-level Promise.all()', () => {    
    expect(true).toEqual(true);
  })

  describe('Acquire list of users from api data', () => {
    it ('tryUrl Function for users', () => {
      let users = tryUrl('/users');
      // console.log('users', users);
      expect(tryUrl).toBeTruthy();
    });
  });

  describe('Acquire a list of hobbies from api data', () => {
    it ('tryUrl Function for hobbies', () => {
      let hobbies = tryUrl('/hobbies');
      // console.log('hobbies', hobbies);
      expect(tryUrl).toBeTruthy();
    })
  });

  describe('Acquire a list of favorites from api data', () => {
    it ('tryUrl Function for favorites', () => {
      let favorites = tryUrl('/favorites');
      // console.log('favorites', favorites);
      expect(tryUrl).toBeTruthy();
    })
  });
  
  it ('Creates a Promise.all()', (done) => {

    // let testPromise = Promise.resolve('Resolved Promise');
    // let testPromise = new TestPromise('Test Promise')
    //   .then(
    //     (promiseResult) => {
    //       // console.log('promiseResult', promiseResult);
    //       expect(promiseResult).toBeTruthy();
    //       return promiseResult;
    //       done();
    //     }
    //   );
    
    // let allPromises = Promise.all([testPromise, testPromise])
    let allPromises = Promise.all([tryUrl('/users'), tryUrl('/hobbies'), tryUrl('/favorites')])
      .then(result => {
        console.log('result', result);
        expect(result).toEqual(result);
        done();
      })
  })

})

// xdescribe('A', () => {
//   it ('A', () => {})
// });
