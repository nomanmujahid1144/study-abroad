const express = require("express");
const router = express.Router();
const {
    AddAccomodation,
    GetAccomodations,
    GetAllSinleUserAccomodations,
    GetAllSinleUserAccomodationsById,
    UpdateAccomodation,
    GetAccomodation,
} = require("../controllers/accomodation.controllers");
const checkAuth = require("../middleware/check-auth");

router.post('/add-accomodation', checkAuth , AddAccomodation);
router.patch('/update-accomodation', checkAuth , UpdateAccomodation);
router.get('/get-accomodations', checkAuth , GetAccomodations);
router.get('/get-all-single-user-accomodations', checkAuth , GetAllSinleUserAccomodations);
router.get('/get-all-single-user-accomodations-by-id', checkAuth , GetAllSinleUserAccomodationsById);
router.get('/get-single-accomodation', checkAuth , GetAccomodation);

module.exports = router;
