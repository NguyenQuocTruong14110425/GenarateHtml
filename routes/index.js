var express = require('express');
var router = express.Router();
const fs = require('fs');
var createHTML = require('create-html')
var template = require('html-template');
var getData = require('./Controller/getData');
var setData = require('./Controller/setData');
var TranferData = require('../lib/tranfer/TranferData');
var TranferService = require('../lib/tranfer/TranferService');

const DataBasic = require('./config/DataBasic');
const DataRender = require('./config/DataRender');
const Setting = require('./config/Setting');

var SaveTemp = {
  DataBasic: DataBasic,
  DataRender: DataRender
};
router.get('/', function (req, res, next) {
  message = [{
    status: "Chào mừng tới với genetor code tool",
    message: "Hello! hãy bắt đầu dự án của bạn"
  }];
  res.render("index", { setting: Setting, message: message });
});
router.get('/rendercode', function (req, res, next) {
  message = [{
    status: "Chào mừng tới bàn làm việc",
    message: "Hãy trở về khởi tạo dự án của bạn tại trang chủ"
  }];
  res.render("rendercode", { result: SaveTemp.DataBasic,setting: Setting,message: message});
});
router.post('/', function (req, res, next) {
  var data = new TranferData(DataBasic);
  data.SetData(req.body);
  SaveTemp.DataBasic = data.getdata;
  message = [{
    status: "Chào mừng tới bàn làm việc",
    message: "Hãy trở về khởi tạo dự án của bạn tại trang chủ"
  }];
  res.render("rendercode", { result: data.getdata,message: message });
});
router.post('/rendercode', function (req, res, next) {
  var message = [];
  var NameView = "ProductiveConveyorInfo";
  var TypeParam = "string";
  var ParamView = "id";
  var NameController = SaveTemp.DataBasic.nametable;
  var sortNametable = SaveTemp.DataBasic.nametable.replace(SaveTemp.DataBasic.modulname + "_", "")
  var namePerson = SaveTemp.DataBasic.author;
  var DateDoTask = SaveTemp.DataBasic.datecreate;
  var IdTask = SaveTemp.DataBasic.idtask;
  var nameEnum = req.body.nameEnum;
  InputData = new setData(req.body, SaveTemp.DataBasic)
  OutputData = new getData(NameController, namePerson, DateDoTask, IdTask)
  InputData.setTitleScreen();
  InputData.setFieldModel();
  InputData.setFieldEntity();
  InputData.setFieldModelSearch();
  InputData.setFieldModelExport();
  InputData.setFieldGrid();
  InputData.setPermission();
  InputData.setEnumData();
  InputData.setStoreSQL();
  //khởi tạo controller
  OutputData.BuildController(NameView, TypeParam, ParamView, function (err, result) {
    var _mess = InputData.PrintMessage(err, result);
    message.push(_mess)
  });
  // Khởi tạo constant display
  OutputData.BuildConstantDisplay(
    InputData.getData.ConstantDislay,
    sortNametable,
    sortNametable,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });
  //Khởi tạo dịch tiếng việt
  OutputData.BuildLangVN(
    InputData.getData.TranslateVN,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });
  //Khởi tạo dịch tiếnganh
  OutputData.BuildLangEN(
    InputData.getData.TranslateEN,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });
  //Khởi tạo file enum
  OutputData.BuildEnum(
    nameEnum,
    InputData.getData.EnumData,
    InputData.getData.OtherResourceEnum,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });
  //khởi tạo key permission
  OutputData.BuildConstantPermission(
    InputData.getData.KeyPermission,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });
  // khởi tạo constant sql
  OutputData.BuildConstantSQL(
    InputData.getData.Store,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });
  // khởi tạo api controller
  var SQLNameById = "";
  for (let index = 0; index < SaveTemp.DataBasic.storenumber; index++) {
    console.log(req.body[`checkById${index + 1}`])
    if (req.body[`checkById${index + 1}`] == true) {
      var store = req.body[`namestore${index + 1}`].replace("hrm_", "")
      if (store) {
        SQLNameById = store;
      }
      else {
        SQLNameById = req.body[`namestore${index + 1}`]
      }
    }
  }
  OutputData.BuilldApiController(
    SQLNameById,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });


  OutputData.BuildEnitity(
    InputData.getData.FieldEnity,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });

  OutputData.BuildModel(
    InputData.getData.FieldModel,
    InputData.getData.FieldGird,
    InputData.getData.FieldModelSearch,
    InputData.getData.FieldModelExport,
    function (err, result) {
      var _mess = InputData.PrintMessage(err, result);
      message.push(_mess)
    });
  res.render("index", { setting: Setting,message: message });
});



module.exports = router;
