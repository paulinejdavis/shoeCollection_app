const {Router} = require('express');
const {getShoeCull, saveShoeCull} = require('../controllers/shoeCullController');
// const {saveShoeCull} = require('../controllers/shoeCullController');
const router = Router();

router.get("/", getShoeCull);
router.post("/save", saveShoeCull);

module.exports = router;