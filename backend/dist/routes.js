"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _FileController = _interopRequireDefault(require("./controllers/FileController"));

var _ConcludeController = _interopRequireDefault(require("./controllers/ConcludeController"));

var _SupervisorController = _interopRequireDefault(require("./controllers/SupervisorController"));

var _PromoterController = _interopRequireDefault(require("./controllers/PromoterController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

const upload = (0, _multer.default)({
  dest: 'uploads/'
});
const fileController = new _FileController.default();
const concludeController = new _ConcludeController.default();
const supervisorController = new _SupervisorController.default();
const promoterController = new _PromoterController.default();
routes.get('/conclude', concludeController.index);
routes.get('/conclude/:id', concludeController.show);
routes.put('/conclude/:id', concludeController.update);
routes.get('/supervisor', supervisorController.index);
routes.get('/promoter', promoterController.index);
routes.post('/upload', upload.single("conclude"), fileController.create);
var _default = routes;
exports.default = _default;