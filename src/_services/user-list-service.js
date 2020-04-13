class UserService {
  constructor() {}

  fetchUser() {
    return fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(user => {
        return user;
      });
  }
}

export default UserService;
