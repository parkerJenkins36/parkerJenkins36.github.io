const express = require('express');
const controller = require('../controllers/cardController'); 
const router = express.Router();
const { upload } = require('../middleware/fileUpload');


router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/new', controller.new);

router.post('/', upload, controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.put('/:id', upload, controller.update);

router.delete('/:id', controller.delete);

module.exports = router;