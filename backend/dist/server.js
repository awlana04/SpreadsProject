"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var port = process.env.PORT || 3333;
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use('/uploads', _express.default.static(_path.default.resolve(__dirname, '..', 'uploads')));
app.listen(3333); // app.listen(port, () => {
//   console.log('Backend Started...')
// })