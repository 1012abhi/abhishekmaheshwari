const express = require("express");
const router = express.Router();
const Visitor = require("../models/visitor.model.js");

router.get('/count', async (req, res) => {
  try {
    const visitorData = await Visitor.findOne();
    res.json({ total: visitorData?.count ?? 0 });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/track', async (req, res) => {
  try {
    const userIp = req.ip || req.headers['x-forwarded-for'];
    let visitorData = await Visitor.findOne();

    if (!visitorData) {
      visitorData = new Visitor({ count: 1, uniqueIps: [userIp] });
    } else {
      // Only increment if this IP is not already in our database
      if (!visitorData.uniqueIps.includes(userIp)) {
        visitorData.count += 1;
        visitorData.uniqueIps.push(userIp);
      }
    }
    await visitorData.save();
    res.json({ total: visitorData.count });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;



// router.get("/visit", async (req, res) => {
//   try {
//     const ip =
//       req.headers["x-forwarded-for"] ||
//       req.socket.remoteAddress;

//     const browser = req.headers["user-agent"];

//     const today = new Date().toISOString().slice(0, 10);

//     const alreadyVisited = await Visitor.findOne({
//       ipAddress: ip,
//       date: today
//     });

//     if (!alreadyVisited) {
//       await Visitor.create({
//         ipAddress: ip,
//         browser,
//         date: today
//       });
//     }

//     const totalVisitors = await Visitor.countDocuments();

//     res.json({ totalVisitors });

//   } catch (err) {
//     res.status(500).json({ message: "Visitor error" });
//   }
// });

// module.exports = router;
