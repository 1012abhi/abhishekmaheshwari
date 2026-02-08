const mongoose = require('mongoose');

// const VisitorSchema = new mongoose.Schema({
//   count: { type: Number, default: 0 },
//   uniqueIps: [String] // Stores IPs to ensure 1 visitor = 1 desktop/network
// });

const VisitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  uniqueIps: { type: [String], default: [] }
});

module.exports = mongoose.model('Visitor', VisitorSchema);

// const visitorSchema = new mongoose.Schema({
//   ipAddress: {
//     type: String,
//     required: true,
//   },
//   browser: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
//   uniqueVisitor: {
//     type: Boolean,
//     required: true,
//   },
// });

// const Visitor = mongoose.model('Visitor', visitorSchema);

// module.exports = Visitor;