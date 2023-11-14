const express = require("express");
const router = express.Router();
const {
    AddScholarship,
    GetScholarships,
    UpdateScholarship,
    GetScholarship,
    GetAllSinleUserScholarships,
    GetAllSinleUserScholarshipsById,
} = require("../controllers/scholarship.controllers");
const checkAuth = require("../middleware/check-auth");

router.post('/add-scholarship', checkAuth , AddScholarship);
router.patch('/update-scholarship', checkAuth , UpdateScholarship);
router.get('/get-scholarships', checkAuth , GetScholarships);
router.get('/get-all-single-user-scholarships', checkAuth , GetAllSinleUserScholarships);
router.get('/get-all-single-user-scholarships-by-id', checkAuth , GetAllSinleUserScholarshipsById);
router.get('/get-single-scholarship', checkAuth , GetScholarship);

module.exports = router;
