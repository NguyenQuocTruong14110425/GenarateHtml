var express = require('express');
var router = express.Router();
const fs = require('fs');
var createHTML = require('create-html')
var template = require('html-template');
var getData = require('./Controller/getData');

var totalFielModel=2;
router.get('/', function (req, res, next) {
  res.render("index.ejs",{totalFielModel:totalFielModel});
});
router.get('/rendercode', function (req, res, next) {
  res.render("rendercode.ejs",{totalFielModel:totalFielModel});
});
router.post('/addfield', function (req, res, next) {
    totalFielModel=req.body.count;
   res.send(totalFielModel);
});
router.post('/', function (req, res, next) {
  var NameView = "ProductiveConveyorInfo";
  var TypeParam = "string";
  var ParamView = "id";
  var NameController = "Sal_ProductiveConveyor";
  var field = ["HRM_Sal_HoldSalary_IsRestoreRequest","HRM_Sal_HoldSalary_CutoffDuration2","HRM_Sal_HoldSalary_IsAppreved"];
  var PermissionData = ["HRM_Sal_HoldSalary_Index","HRM_Sal_HoldSalary_Index_bntTrafic"];
  var SQLData = ["Cat_sp_get_HealthTreatmentPlace","Cat_sp_get_HealthTreatmentPlaceByID","Cat_sp_get_HealthTreatmentPlaceByIDs"];
  var SQLNameById = "Cat_sp_get_HealthTreatmentPlaceByID";
  var Table = "HoldSalary";
  var namePerson = "Truong.Nguyen";
  var DateDoTask = "16/01/2018";
  var IdTask = "952661";
  var fieldData = [
    {FieldName:"HRM_Sal_HoldSalary_IsRestoreRequest",
    Translate:"Tập tin"
    },
    {FieldName:"Hre_FacilityIssue_EvictionNo",
    Translate:"Số biên bản"
    },
    {FieldName:"EvictAmount",
    Translate:"Số lượng chưa thu hồi"
    }
  ];
  var EnumData = [
    {EnumName:"HRM_Sal_HoldSalary_IsRestoreRequest",
    Description:"Tập tin"
    },
    {FieldName:"Hre_FacilityIssue_EvictionNo",
    Translate:"Số biên bản"
    },
    {FieldName:"EvictAmount",
    Translate:"Số lượng chưa thu hồi"
    }
  ];
  var EnumData = [
    {EnumName:"HRM_Sal_HoldSalary_IsRestoreRequest",
    Description:"Tập tin"
    },
    {EnumName:"Hre_FacilityIssue_EvictionNo",
    Description:"Số biên bản"
    },
    {EnumName:"EvictAmount",
    Description:"Số lượng chưa thu hồi"
    }
  ];
  OtherResourceEnum = [
    {moduleEnum:"Salary",
    NameEnum:"Sal_HoldSalary",
    orderExt:"Index"
    },
    {moduleEnum:"Salary",
    NameEnum:"Sal_HoldSalary",
    orderExt:"bntTrafic"
    }
  ];

  EntityData =[
    {
      TypeData:"string",
      FieldName:"ProfileName"
    },
    {
      TypeData:"DateTime?",
      FieldName:"DateHire"
    },
    {
      TypeData:"Guid?",
      FieldName:"ResReasonID"
    },
    {
      TypeData:"float",
      FieldName:"WorkHours"
    },
    {
      TypeData:"string",
      FieldName:"ProfileIds"
    },
    {
      TypeData:"string",
      FieldName:"Note1"
    },
  ]

 FieldModelData =[
    {
      TypeData:"string",
      FieldName:"ProfileName",
      Translate:`${NameController}_`+"ProfileName"
    },
    {
      TypeData:"DateTime?",
      FieldName:"DateHire",
      Translate:`${NameController}_`+"DateHire"
    },
    {
      TypeData:"Guid?",
      FieldName:"ResReasonID",
      Translate:`${NameController}_`+"ResReasonID"
    },
    {
      TypeData:"float",
      FieldName:"WorkHours"
    },
    {
      TypeData:"string",
      FieldName:"ProfileIds",
    },
    {
      TypeData:"string",
      FieldName:"Note",
      Translate:`${NameController}_`+"Note"
    },
  ]

  FieldModelGrid =["ProfileName","ProfileID","WorkHours","Note","ResReasonID"]

  FieldModelSearch =[
    {
      TypeData:"string",
      FieldName:"ProfileName",
      Translate: `${NameController}_`+"ProfileName"
    },
    {
      TypeData:"DateTime?",
      FieldName:"DateHire",
      Translate:`${NameController}_`+"DateHire"
    },
    {
      TypeData:"Guid?",
      FieldName:"ResReasonID",
      Translate:`${NameController}_`+"ResReasonID"
    },
    {
      TypeData:"float",
      FieldName:"WorkHours",
      Translate:`${NameController}_`+"WorkHours"
    },
    {
      TypeData:"string",
      FieldName:"ProfileIds",
    },
    {
      TypeData:"string",
      FieldName:"Note",
      Translate:`${NameController}_`+"Note"
    },
  ]

  FieldModelExport =[
    {
      TypeData:"string",
      FieldName:"ProfileName",
    },
    {
      TypeData:"DateTime?",
      FieldName:"DateHire",
    },
    {
      TypeData:"Guid?",
      FieldName:"ResReasonID",
    },
    {
      TypeData:"Guid",
      FieldName:"ExportId",
    },
    {
      TypeData:"bool",
      FieldName:"IsExport",
    },
    {
      TypeData:"string",
      FieldName:"ValueFields",
    },
  ]
  getData.BuildController(NameView, TypeParam, ParamView, NameController, function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });


  getData.BuildConstantDisplay(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    field,
    Table,
    Table,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  
  getData.BuildLangVN(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    fieldData,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  getData.BuildLangEN(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    fieldData,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  getData.BuildEnum(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    null,
    null,
    OtherResourceEnum,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  getData.BuildConstantPermission(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    PermissionData,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  getData.BuildConstantSQL(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    SQLData,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  getData.BuilldApiController(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    SQLNameById,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  getData.BuildEnitity(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    EntityData,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  getData.BuildModel(
    NameController, 
    namePerson, 
    DateDoTask, 
    IdTask,
    FieldModelData,
    FieldModelGrid,
    FieldModelSearch,
    FieldModelExport,
    function (err, resutl) {
    if (err) {
      console.log(err)
    } else {
      console.log(resutl)
    }
  });

  res.render("index.ejs");
  });


  
  module.exports = router;
