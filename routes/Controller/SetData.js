var TranferData = require('../../lib/tranfer/TranferData');
var TranferService = require('../../lib/tranfer/TranferService');
const DataRender = require('../config/DataRender');
const Setting = require('../config/Setting');
class setData {
    constructor(reqBody, dataBasic) {
        this.reqbody = reqBody,
            this.databasic = dataBasic,
            this.result = DataRender;
    }
    get getData() {
        return this.result;
    }
    setTitleScreen()
    {
        var TranferResource = new TranferService(this.result);
        var content = "HRM_" + this.databasic.nametable + "_Title" 
        TranferResource.SetConstantDislay(content);
        // thêm dịch tiếng việt 
        let translateVN = {
            Key: content,
            Translate: this.databasic.tabletranslatevn
        }
        // thêm dịch tiếng anh
        TranferResource.SetTranslateVN(translateVN);
        let translateEN = {
            Key: content,
            Translate: this.databasic.tabletranslateen
        }
        TranferResource.SetTranslateEN(translateEN);
        this.result = TranferResource.getdata;
    }
    setFieldModel(numberfield, nametable) {
        var TranferResource = new TranferService(this.result);
        var numberfield = numberfield ? numberfield : this.databasic.modelfield
        var nametable = nametable ? nametable : this.databasic.nametable;
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`nameFieldModel${index + 1}`]) {
                // thêm  constant dispalay
                var content = "HRM_" + nametable + "_" + this.reqbody[`nameFieldModel${index + 1}`];
                TranferResource.SetConstantDislay(content);
                // thêm dịch tiếng việt 
                let translateVN = {
                    Key: content,
                    Translate: this.reqbody[`translateFieldModelvn${index + 1}`]
                }
                // thêm dịch tiếng anh
                TranferResource.SetTranslateVN(translateVN);
                let translateEN = {
                    Key: content,
                    Translate: this.reqbody[`translateFieldModelen${index + 1}`]
                }
                TranferResource.SetTranslateEN(translateEN);
                // Thêm vào field model
                let Model = {
                    TypeData: this.reqbody[`typeFieldModel${index + 1}`],
                    NameField: this.reqbody[`nameFieldModel${index + 1}`],
                    Translate: content
                }
                TranferResource.SetFieldModel(Model);
            }
        }
        this.result = TranferResource.getdata;
    }

    setFieldEntity(numberfield, nametable) {
        var TranferResource = new TranferService(this.result);
        var numberfield = numberfield ? numberfield : this.databasic.entityfield;
        var nametable = nametable ? nametable : this.databasic.nametable;
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`nameFieldEntity${index + 1}`]) {
                // Thêm vào field model
                let Entity = {
                    TypeData: this.reqbody[`typeFieldEntity${index + 1}`],
                    NameField: this.reqbody[`nameFieldEntity${index + 1}`]
                }
                TranferResource.SetFieldEntity(Entity);
            }
        }
        this.result = TranferResource.getdata;
    }

    setFieldModelSearch(numberfield, nametable) {
        var TranferResource = new TranferService(this.result);
        var numberfield = numberfield ? numberfield : this.databasic.modelsearchfield
        var nametable = nametable ? nametable : this.databasic.nametable;
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`nameFieldModelSearch${index + 1}`]) {
                // thêm  constant dispalay
                var content = "HRM_" + nametable + "_" + this.reqbody[`nameFieldModelSearch${index + 1}`];
                TranferResource.SetConstantDislay(content);
                // thêm dịch tiếng việt 
                let translateVN = {
                    Key: content,
                    Translate: this.reqbody[`transalteFieldModelSearchvn${index + 1}`]
                }
                // thêm dịch tiếng anh
                TranferResource.SetTranslateVN(translateVN);
                let translateEN = {
                    Key: content,
                    Translate: this.reqbody[`transalteFieldModelSearchen${index + 1}`]
                }
                TranferResource.SetTranslateEN(translateEN);
                // Thêm vào field model search
                let ModelSearch = {
                    TypeData: this.reqbody[`typeFieldModelSearch${index + 1}`],
                    NameField: this.reqbody[`nameFieldModelSearch${index + 1}`],
                    Translate: content
                }
                TranferResource.SetFieldModelSearch(ModelSearch);
            }
        }
        this.result = TranferResource.getdata;
    }

    setFieldModelExport(numberfield) {
        var TranferResource = new TranferService(this.result);
        var numberfield = numberfield ? numberfield : this.databasic.modelsearchfield
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`nameFieldModelSearch${index + 1}`]) {
                // Thêm vào field model export
                let ModelExport = {
                    TypeData: this.reqbody[`typeFieldModelSearch${index + 1}`],
                    NameField: this.reqbody[`nameFieldModelSearch${index + 1}`]
                }
                TranferResource.SetFieldModelExport(ModelExport);
            }
        }
        this.result = TranferResource.getdata;
    }

    setFieldGrid(numberfield) {
        var TranferResource = new TranferService(this.result);
        var numberfield = numberfield ? numberfield : this.databasic.modelsearchfield
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`nameFieldGrid${index + 1}`]) {
                // Thêm vào field grid
                TranferResource.SetFieldGird(this.reqbody[`nameFieldGrid${index + 1}`]);
            }
        }
        this.result = TranferResource.getdata;
    }

    setPermission(numberfield, nametable) {
        var TranferResource = new TranferService(this.result);
        var nametable = nametable ? nametable : this.databasic.nametable;
        var numberfield = numberfield ? numberfield : this.databasic.numberkeypermission
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`Keypermission${index + 1}`]) {
                var permissionkey = this.reqbody[`Keypermission${index + 1}`].replace(nametable + "_", "")
                var contentPermission = "";
                var enumKey = "";
                var moduleName = this.CheckModule(this.databasic.modulekey);
                if (permissionkey) {
                    enumKey = nametable + "_" + permissionkey;
                }
                else {
                    enumKey = nametable + "_" + this.reqbody[`Keypermission${index + 1}`];
                };
                contentPermission = moduleName + "__" + enumKey;
                TranferResource.SetKeyPermission(contentPermission);
                TranferResource.SetOtherResourceEnum(enumKey);
            }
        }
        // Thêm permission screen
        this.result = TranferResource.getdata;
    }

    setEnumData(numberfield) {
        var TranferResource = new TranferService(this.result);
        var numberfield = numberfield ? numberfield : this.databasic.enumnumber
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`nameEnumChild${index + 1}`]) {
                // Thêm vào field model export
                let EnumData = {
                    Description: this.reqbody[`descriptionEnum${index + 1}`],
                    Name: this.reqbody[`nameEnumChild${index + 1}`]
                }
                TranferResource.SetEnumData(EnumData);
            }
        }
        this.result = TranferResource.getdata;
    }
    setStoreSQL(numberfield, nametable) {
        var TranferResource = new TranferService(this.result);
        var numberfield = numberfield ? numberfield : this.databasic.storenumber
        var nametable = nametable ? nametable : this.databasic.nametable;
        var resutlData = "";
        for (let index = 0; index < numberfield; index++) {
            if (this.reqbody[`namestore${index + 1}`]) {
                var store = this.reqbody[`namestore${index + 1}`].replace("hrm_", "")
                if (store) {
                    resutlData = store;
                }
                else {
                    resutlData = this.reqbody[`namestore${index + 1}`]
                }
                // Thêm vào field grid
                TranferResource.SetStore(resutlData);
            }
        }
        this.result = TranferResource.getdata;
    }
    PrintMessage(err, resutl) {
        var _mess = "";
        if (err) {
            _mess = {
                status: "render code fail",
                message: err
            }
        } else {
            _mess = {
                status: "render code success",
                message: resutl
            }
        }
        return _mess
    }
    CheckModule(key) {
        var moduleNameResutl = "";
        Setting.moduleData.forEach(element => {
            if (element.key == key) {
                moduleNameResutl = element.name;
            }
        });
        return moduleNameResutl;
    }

}

module.exports = setData;