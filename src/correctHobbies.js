function correctHobbies(hobbies) {
  return hobbies.filter(hobby => {
    if(!hobby.experience) {
      switch(hobby.years_played) {
        case 1:
        hobby.experience = 'beginner';
        break;
        case 2:
        hobby.experience = 'advanced';
        break;
        case 3:
        hobby.experience = 'expert';
        break;
      }
      return hobby;
    }
  })
}
