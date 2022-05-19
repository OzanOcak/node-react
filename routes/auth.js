const router = require("express").Router();
const User = require("../models/User");

//Register
router.get("/register", async (req, res) => {
  const user = await new User({
    username: "john",
    email: "jojo@gmail.com",
    password: "12356",
  });
  await user.save();
  res.send("ok");
});

module.exports = router;
