const express = require('express')
const router = express.Router();
const app = express();
const {getBootcamps, createBootcamps, deleteBootcamp,getBootcamp,updateBootcamp} = require('../controlers/bootcamps')


router.route('/').get(getBootcamps).post(createBootcamps)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router;