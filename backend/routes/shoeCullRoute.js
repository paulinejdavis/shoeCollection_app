const {Router} = require('express');
const {getShoeCull, saveShoeCull, updateShoeCull, deleteShoeCull} = require('../controllers/shoeCullController');
// const {saveShoeCull} = require('../controllers/shoeCullController');
const router = Router();

router.get("/", getShoeCull);
router.post("/save", saveShoeCull);
router.post("/update", updateShoeCull);
router.post("/delete", deleteShoeCull);

module.exports = router;