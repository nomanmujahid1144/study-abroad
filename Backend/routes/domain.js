const express = require('express');
const router = express.Router();
const {
    AddDomain,
    updateDomain,
    GetDomains,
    GetDomainById,
    deleteDomain
} = require('../controllers/domain.controllers')
const checkAuth = require("../middleware/check-auth");

router.post('/adddomain',checkAuth,  AddDomain)
router.post('/updatedomain', updateDomain)
router.get('/getdomains', GetDomains)
router.get('/getdomainbyid', GetDomainById)
router.delete('/deletedomain', deleteDomain)


module.exports = router;