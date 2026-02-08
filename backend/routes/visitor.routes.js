const express = require("express");
const router = express.Router();
const Visitor = require("../models/visitor.model.js");

router.get('/count', async (req, res) => {
  try {
    const visitorData = await Visitor.findOne();
    // console.log('count routes',visitorData);
    
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

// module.exports = router;


router.get("/visit", async (req, res) => {
  try {
    // Normalize IP (MOST IMPORTANT)
    let ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    ip = ip.replace("::ffff:", ""); // normalize

    let visitor = await Visitor.findOne();

    // first time ever
    if (!visitor) {
      visitor = await Visitor.create({
        count: 1,
        uniqueIps: [ip]
      });

      return res.json({ totalVisitors: visitor.count });
    }

    // already visited IP
    if (visitor.uniqueIps.includes(ip)) {
      return res.json({ totalVisitors: visitor.count });
    }

    // new unique IP
    visitor.uniqueIps.push(ip);
    visitor.count += 1;
    await visitor.save();

    res.json({ totalVisitors: visitor.count });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
