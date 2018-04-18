
const FileSystem = require('../../lib/system/sys.file');

var getLibrary = require('../../lib/library/getLibrary');
var getController = require('../../lib/controller/getController');
var getConstantDisplay = require('../../lib/constantdisplay/getConstantDisplay');
var getLangVN = require('../../lib/langvn/getLangVN');
var getLangEN = require('../../lib/langen/getLangEN');
var getEnumConstant = require('../../lib/enumconstant/getEnumConstant');
var getConstantPermission = require('../../lib/constantpermission/getConstantPermission');
var getConstantSQL = require('../../lib/constantsql/getConstantSQL');
var getApiController = require('../../lib/apicontroller/getApiController');
var getEntity = require('../../lib/entity/getEntity');
var getModel = require('../../lib/model/getModel');

const fs = require('fs');
class getData {
    constructor(Controller,
        NamePerson,
        DateDoTask,
        IdTask) {
            this.Controller=Controller,
            this.NamePerson=NamePerson,
            this.DateDoTask=DateDoTask,
            this.IdTask=IdTask
         }
    //hàm build controller
    BuildController(NameView,
        TypeParam,
        ParamView,
        callback) {
        var resultLibrary = new getLibrary();
        var resultController = new getController(
            NameView,
            TypeParam,
            ParamView,
            this.Controller
        );
        var dir = './build/Controller';
        var namefile = `${this.Controller}Controller.cs`;
        FileSystem.writeAndAppendFileData(dir, namefile, resultLibrary.initLibrary, resultController.InitController, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    };

    //hàm build ConstantDisplay
    BuildConstantDisplay(
        Field,
        GridName,
        PopupName,
        callback) {
        var ConstantDisplay = new getConstantDisplay(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resutlField = "";
        Field.forEach(element => {
            resutlField += ConstantDisplay.SetConstantDisplayForField(element);
        });
        var resultConstant = resutlField +
            ConstantDisplay.SetConstantDisplayForGrid(GridName) +
            ConstantDisplay.SetConstantDisplayForPopup(PopupName);
        var resultData = ConstantDisplay.Init(resultConstant)
        var dir = './build/HRM_Infrastructure_Utilities';
        var namefile = 'ConstantDisplay.cs';
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    };

    // build Lang VN
    BuildLangVN(
        FieldData,
        callback) {
        var LangVN = new getLangVN(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultLangVN = "";
        FieldData.forEach(element => {
            resultLangVN += LangVN.SetLangtranslateVN(element.Key, element.Translate);
        });
        var resultData = LangVN.Init(resultLangVN)
        var dir = './build/Settings';
        var namefile = 'LANG_VN.XML';
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }

    // build Lang EN
    BuildLangEN(
        FieldData,
        callback) {
        var LangEN = new getLangEN(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultLangEN = "";
        FieldData.forEach(element => {
            resultLangEN += LangEN.SetLangtranslateEN(element.Key, element.Translate);
        });
        var resultData = LangEN.Init(resultLangEN)
        var dir = './build/Settings';
        var namefile = 'LANG_EN.XML';
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }

    // build Lang EN
    BuildEnum(
        EnumData,
        NameEnum,
        OtherResourceEnum,
        callback) {
        var EnumConstant = new getEnumConstant(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultEnum = "";
        var resultData = "";
        if (OtherResourceEnum) {
            OtherResourceEnum.forEach(element => {
                resultEnum += EnumConstant.SetOtherResource(element.moduleEnum, element.NameEnum, element.orderExt);
            });
            var OtherResourceEnum = resultEnum;
        }
        else {
            EnumData.forEach(element => {
                resultEnum += EnumConstant.SetPropertiesEnum(element.NameEnum, element.Description);
            });
            var EnumObject = EnumConstant.EnumObject(NameEnum, resultEnum)
        }
        resultData = EnumConstant.Init(EnumObject, OtherResourceEnum)
        var dir = './build/HRM_Infrastructure_Utilities';
        var namefile = 'EnumConstant.cs';
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }

    // build constant permission
    BuildConstantPermission(
        PermissionData,
        callback) {
        var ConstantPermission = new getConstantPermission(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultPermission = "";
        PermissionData.forEach(element => {
            resultPermission += ConstantPermission.SetConstantPermission(element);
        });
        var resultData = ConstantPermission.Init(resultPermission)
        var dir = './build/HRM_Infrastructure_Security';
        var namefile = 'ConstantPermission.cs';
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }
    // build constant sql
    BuildConstantSQL(
        SQLData,
        callback) {
        var ConstantSQL = new getConstantSQL(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultSQL = "";
        SQLData.forEach(element => {
            resultSQL += ConstantSQL.SetConstantSQL(element);
        });
        var resultData = ConstantSQL.Init(resultSQL)
        var dir = './build/HRM_Infrastructure_Utilities';
        var namefile = 'ConstantSQL.cs';
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }
    // build api controller
    BuilldApiController(
        SQLNameById,
        callback) {
        var ApiController = new getApiController(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultData = ApiController.Init(SQLNameById);
        var dir = './build/HRM_Presentation_Hr_Service';
        var namefile = `${this.Controller}Controller.cs`;
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }
    // build entity
    BuildEnitity(
        FieldData,
        callback) {
        var Entity = new getEntity(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultEntity = "";
        FieldData.forEach(element => {
            resultEntity += Entity.SetFieldProperties(element.TypeData, element.NameField);
        });
        var resultData = Entity.Init(resultEntity)
        var dir = './build/Enity';
        var namefile = `${this.Controller}Enity.cs`;
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }
    // build model
    BuildModel(
        FieldModelData,
        FieldGridData,
        FieldModelSearch,
        FieldModelExport,
        callback) {
        var Model = new getModel(
            this.Controller,
            this.NamePerson,
            this.DateDoTask,
            this.IdTask
        );
        var resultFieldModel = "";
        var resultFieldModelGrid = "";
        var resultFieldModelSearch = "";
        var resultFieldModelExport = "";
        if(FieldModelData)
        {
            FieldModelData.forEach(element => {
                resultFieldModel += Model.SetFieldTranslateProperties(element.TypeData, element.NameField,element.Translate);
            });
        }
        if(FieldGridData)
        {
            FieldGridData.forEach(element => {
                resultFieldModelGrid += Model.SetFieldGridProperties(element);
            });
        }
        if(FieldModelSearch)
        {
            FieldModelSearch.forEach(element => {
                resultFieldModelSearch += Model.SetFieldTranslateProperties(element.TypeData, element.NameField,element.Translate);
            });
        }
        if(FieldModelExport)
        {
            FieldModelExport.forEach(element => {
                resultFieldModelExport += Model.SetFieldTranslateProperties(element.TypeData, element.NameField,element.Translate);
            });
        }
        var resultData = Model.Init(resultFieldModel,resultFieldModelGrid,resultFieldModelSearch,resultFieldModelExport)
        var dir = './build/Model';
        var namefile = `${this.Controller}Model.cs`;
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }

}

module.exports =  getData;