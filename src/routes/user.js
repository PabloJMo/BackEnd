const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { userService } = require("../services");
const { userController } = require('../controllers');

const { SERVER_SECRET, userIsAdminMDW } = require("../middleware/authMdw");


router.post("/login", async (req, res) => {
  const { user, pass } = req.body;

  if (user === "admin" && pass === "admin") {
    const token = jwt.sign({ user, role: "Admin" }, SERVER_SECRET, {});
    res.json({ token });
  } else {
    const userFound = await userService.validateUser(user, pass);
    if (userFound) {
      const token = jwt.sign(
        { user, role: "User" },
        SERVER_SECRET,
        { expiresIn: "1h",}
        );
      return res.json({ token });
    }
    res.status(401).json({ error: "Invalid User" });
  }
});

router.post("/", userIsAdminMDW, userController.createUser);
router.get("/:userId", userController.getUser);

module.exports = router;