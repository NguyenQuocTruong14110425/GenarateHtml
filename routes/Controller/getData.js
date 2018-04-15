
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
    constructor() { }
    //hàm build controller
    BuildController(NameView,
        TypeParam,
        ParamView,
        NameController,
        callback) {
        var resultLibrary = new getLibrary();
        var resultController = new getController(
            NameView,
            TypeParam,
            ParamView,
            NameController
        );
        var dir = './build/Controller';
        var namefile = `${NameController}Controller.cs`;
        FileSystem.writeAndAppendFileData(dir, namefile, resultLibrary.initLibrary, resultController.InitController, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    };

    //hàm build ConstantDisplay
    BuildConstantDisplay(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        Field,
        GridName,
        PopupName,
        callback) {
        var ConstantDisplay = new getConstantDisplay(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
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
    BuildLangVN(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        FieldData,
        callback) {
        var LangVN = new getLangVN(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
        );
        var resultLangVN = "";
        FieldData.forEach(element => {
            resultLangVN += LangVN.SetLangtranslateVN(element.FieldName, element.Translate);
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
    BuildLangEN(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        FieldData,
        callback) {
        var LangEN = new getLangEN(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
        );
        var resultLangEN = "";
        FieldData.forEach(element => {
            resultLangEN += LangEN.SetLangtranslateEN(element.FieldName, element.Translate);
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
    BuildEnum(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        EnumData,
        NameEnum,
        OtherResourceEnum,
        callback) {
        var EnumConstant = new getEnumConstant(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
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
    BuildConstantPermission(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        PermissionData,
        callback) {
        var ConstantPermission = new getConstantPermission(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
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
    BuildConstantSQL(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        SQLData,
        callback) {
        var ConstantSQL = new getConstantSQL(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
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
    BuilldApiController(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        SQLNameById,
        callback) {
        var ApiController = new getApiController(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
        );
        var resultData = ApiController.Init(SQLNameById);
        var dir = './build/HRM_Presentation_Hr_Service';
        var namefile = `${Controller}Controller.cs`;
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }
    // build entity
    BuildEnitity(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        FieldData,
        callback) {
        var Entity = new getEntity(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
        );
        var resultEntity = "";
        FieldData.forEach(element => {
            resultEntity += Entity.SetFieldProperties(element.TypeData, element.FieldName);
        });
        var resultData = Entity.Init(resultEntity)
        var dir = './build/Enity';
        var namefile = `${Controller}Enity.cs`;
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }
    // build model
    BuildModel(Controller,
        NamePerson,
        DateDoTask,
        IdTask,
        FieldModelData,
        FieldGridData,
        FieldModelSearch,
        FieldModelExport,
        callback) {
        var Model = new getModel(
            Controller,
            NamePerson,
            DateDoTask,
            IdTask
        );
        var resultFieldModel = "";
        var resultFieldModelGrid = "";
        var resultFieldModelSearch = "";
        var resultFieldModelExport = "";
        if(FieldModelData)
        {
            FieldModelData.forEach(element => {
                resultFieldModel += Model.SetFieldTranslateProperties(element.TypeData, element.FieldName,element.Translate);
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
                resultFieldModelSearch += Model.SetFieldTranslateProperties(element.TypeData, element.FieldName,element.Translate);
            });
        }
        if(FieldModelExport)
        {
            FieldModelExport.forEach(element => {
                resultFieldModelExport += Model.SetFieldTranslateProperties(element.TypeData, element.FieldName,element.Translate);
            });
        }
        var resultData = Model.Init(resultFieldModel,resultFieldModelGrid,resultFieldModelSearch,resultFieldModelExport)
        var dir = './build/Model';
        var namefile = `${Controller}Model.cs`;
        FileSystem.writeFileData(dir, namefile, resultData, function (err, message) {
            if (err) return callback(err);
            else {
                return callback(null, message);
            }
        })
    }

}

module.exports = new getData();