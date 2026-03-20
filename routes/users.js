const router = require("express").Router();
const { getCurrentUser, updateProfile } = require("../controllers/users");
const { validateUserInfoBody } = require("../middlewares/validation");

router.get("/me", getCurrentUser);
router.patch("/me", validateUserInfoBody, updateProfile);

module.exports = router;
