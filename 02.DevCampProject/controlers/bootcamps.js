// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200)
    res.json({success : true, msg:"Show all bootcamps."});
}

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200)
    res.json({success : true, msg:"Show all bootcamps."});
}

// @desc Get all bootcamps
// @route POST /api/v1/bootcamps
// @access Public
exports.createBootcamps = (req, res, next) => {
    res.status(200)
    res.json({success : true, msg:"create a new bootcamp"});
}

// @desc Get all bootcamps
// @route POST /api/v1/bootcamps
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200)
    res.json({success : true, msg:"Update a bootcamp : " + req.params.id});
}

// @desc Get all bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200)
    res.json({success : true, msg:"delete a bootcamp" + req.params.id});
}
