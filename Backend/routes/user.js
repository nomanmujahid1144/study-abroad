const express = require("express");
const router = express.Router();
const {
  userLogin,
  userSignup,
  adminUserSignup,
  userSocialSignup,
  sendOTP,
  verifyOTP,
  idVerification,
  forgetPassword,
  VerifyJWTToken,
  getSingleUser,
  getSingleUserById,
  checkUserMail,
  updateUserPassword,
  changeUserPassword,
  updateUser,
  updateUserById,
  updateUserStatus,
  afterVerification,
  getAllUsers,
  disableAccount,
  getDeactivateAccount,
  deactivateaccount,
  getAdminCreatedUsers,
  userUpdateToContacted,
  getWebsiteUnContactedUsers,
  getWebsiteContactedUsers,
} = require("../controllers/user.controllers");

const checkAuth = require("../middleware/check-auth");

router.post("/login", userLogin);
router.post("/signup", userSignup);
router.post("/adminsignup", adminUserSignup);
router.patch("/forgetpassword", forgetPassword);
router.patch("/verifyjwttoken", VerifyJWTToken);
router.patch("/updatepassword", updateUserPassword);
router.patch("/changeUserPassword", checkAuth, changeUserPassword);

router.get("/getadmincreatedusers", getAdminCreatedUsers);
router.get("/get-websites-contacted-users", getWebsiteContactedUsers);
router.get("/get-websites-uncontacted-users", getWebsiteUnContactedUsers);

router.post('/sendotp',checkAuth , sendOTP);
router.post('/verify-otp', checkAuth ,verifyOTP);

router.patch("/update-to-contacted", userUpdateToContacted);
router.post("/usersocialsignup", userSocialSignup);
router.patch("/updateuser", checkAuth, updateUser);
router.patch("/updateuserbyid", updateUserById);
router.patch("/updateuserstatus",  updateUserStatus);

router.post("/idverification" , checkAuth  , idVerification);



router.patch("/disableaccount", checkAuth ,  disableAccount);
router.get("/getdeactivateaccount", checkAuth ,  getDeactivateAccount);
router.patch("/deactivateaccount",   deactivateaccount);

router.get("/checkemail", checkUserMail);
router.get("/getsingleuser", checkAuth, getSingleUser);
router.get("/getsingleuserbyid",  getSingleUserById);
router.get("/getallusers", checkAuth ,getAllUsers);
router.post('/afterverification' , afterVerification)


module.exports = router;
