const express = require("express");
const router = express.Router();
const {
    AddFormSubmission,
    UpdateFormSubmissionToContacted,
    GetAllContactedFormsSubmissions,
    GetAllUnContactedFormsSubmissions,
} = require("../controllers/formSubmission.controllers");
const checkAuth = require("../middleware/check-auth");

router.post('/add-forms',  AddFormSubmission);
router.patch('/update-form-to-contacted', UpdateFormSubmissionToContacted);
router.get('/get-contacted-forms', GetAllContactedFormsSubmissions);
router.get('/get-uncontacted-forms', GetAllUnContactedFormsSubmissions);

module.exports = router;
