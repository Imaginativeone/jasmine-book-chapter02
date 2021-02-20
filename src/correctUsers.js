function correctUsers(users, state) {

  return users.filter(user => {
    if (!user.state) {
      user.state = state;
      return user;
    }
  })

  // return users;
  
}
