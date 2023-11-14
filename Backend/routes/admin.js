const express = require("express");
const router = express.Router();
const {
  adminSignup,
  adminLogin,
  getDashboardData,
  getUserDashboardData,
  getEmployeeDashboardData,
  getContentDashboardData,
  getAdmin,
} = require("../controllers/admin.controllers");
const checkAuth = require("../middleware/check-auth");

router.post("/signup", adminSignup);
router.post("/login", adminLogin);
router.get("/getdashboarddata", getDashboardData);
router.get("/get-user-dashboarddata", getUserDashboardData);
router.get("/get-employee-dashboarddata", getEmployeeDashboardData);
router.get("/get-content-dashboarddata", getContentDashboardData);
router.get("/getadmin", getAdmin);

module.exports = router;
