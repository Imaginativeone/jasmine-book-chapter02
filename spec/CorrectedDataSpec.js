describe('Correct the data:', () => {

  it('Should have some promises, to plug into the Promise.all() array (of promise elements)', () => {
    expect(true).toBe(true);
  })

  describe('Specific data, in the form of arrays', () => {

    let users = tryUrl('/users');
    it ('Should have a users array, from a returned promise', () => {
      console.log('users', users);
      // expect(users).toBeAnArray();
      expect(users).toBeTruthy();
    })

    // TODO: make an isArray() custom matcher
    // TODO: make an isPromise() custom matcher
    let hobbies = tryUrl('/hobbies');
    it('Should have a hobbies array, from a returned promise', () => {
      console.log('hobbies', hobbies);
      expect(hobbies).toBeTruthy();
    })

    let favorites = tryUrl('/favorites');
    it ('Should have a favorites array, from a returned promise', () => {
      console.log('favorites', favorites);
      expect(favorites).toBeTruthy();
    })

  });

  xit('Should have a PromiseAll to work with', () => {
    expect(true).toBe(true);
  })

  Promise.all([]);
  
  // data[0] = correctUsers(data[0], 'PA');
})

// describe('A', () => {
//   it ('A', () => {})
// });
