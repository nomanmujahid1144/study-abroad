const express = require("express");
const router = express.Router();
const {
    AddGetUniverisityFinder,
    GetUniverisityFinder,
    GetUniverisityFinders,
    GetAllSinleUserUniverisityFinders,
    GetAllSinleUserUniverisityFindersById,
    UpdateUniverisityFinder,
} = require("../controllers/universityfinder.controllers");
const checkAuth = require("../middleware/check-auth");

router.post('/add-university-finder', checkAuth , AddGetUniverisityFinder);
router.patch('/update-university-finder', checkAuth , UpdateUniverisityFinder);
router.get('/get-university-finder', checkAuth , GetUniverisityFinders);
router.get('/get-all-single-user-university-finder', checkAuth , GetAllSinleUserUniverisityFinders);
router.get('/get-all-single-user-university-finder-by-id', checkAuth , GetAllSinleUserUniverisityFindersById);
router.get('/get-single-university-finder', checkAuth , GetUniverisityFinder);

module.exports = router;
