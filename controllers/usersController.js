function usersController(User) {
  function isValid(req, res) {
    const user = new User(req.body);
    User.where("username")
      .equals(user.username)
      .exec((err, data) => {
        if (err) {
          return res.send(err);
        }
        if (data.length == 0) {
          return res.sendStatus(201);
        }
        data.forEach((item) => {
          if (item.password == user.password) {
            return res.json(item); //default is 200 for successfully
          } else {
            return res.sendStatus(202);
          }
        });
      });
  }

  function addUser(req, res) {
    const u = new User(req.body);
    u.save();
    res.json(u);
  }

  return { isValid, addUser };
}

module.exports = usersController;
