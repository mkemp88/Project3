const router = require("express").Router();
const huntingRoutes = require("./hunting.js");

// Book routes
router.use("/hunting", huntingRoutes);

module.exports = router;
