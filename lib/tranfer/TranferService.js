class TranferService {
    constructor(InputData) {
        this.DataTemp = {
            FieldModel: InputData.FieldModel,
            FieldEnity: InputData.FieldEnity,
            FieldModelSearch: InputData.FieldModelSearch,
            FieldModelExport: InputData.FieldModelExport,
            FieldGird: InputData.FieldGird,
            KeyPermission: InputData.KeyPermission,
            OtherResourceEnum: InputData.OtherResourceEnum,
            EnumData: InputData.EnumData,
            Store: InputData.Store,
            TranslateEN: InputData.TranslateEN,
            TranslateVN: InputData.TranslateVN,
            ConstantDislay: InputData.ConstantDislay
        }
    }
    get getdata() {
        return this.DataTemp;
    }
    SetFieldModel(lstData) {
        if (this.DataTemp.FieldModel.indexOf(lstData) >= 0 
        || this.CheckNull(lstData) == false
        || this.CheckField(lstData)==false) return;
        else
            this.DataTemp.FieldModel.push(lstData);
        return this.DataTemp;
    }
    SetFieldEntity(lstData) {
        if (this.DataTemp.FieldEnity.indexOf(lstData) >= 0 
        || this.CheckNull(lstData) == false
        || this.CheckField(lstData)==false) return;
        else
            this.DataTemp.FieldEnity.push(lstData);
        return this.DataTemp;
    }
    SetFieldModelSearch(lstData) {
        if (this.DataTemp.FieldModelSearch.indexOf(lstData) >= 0 
        || this.CheckNull(lstData) == false
        || this.CheckField(lstData)==false) return;
        else
            this.DataTemp.FieldModelSearch.push(lstData);
        return this.DataTemp;
    }
    SetFieldModelExport(lstData) {
        if (this.DataTemp.FieldModelExport.indexOf(lstData) >= 0 
        || this.CheckNull(lstData) == false
        || this.CheckField(lstData)==false) return;
        else
            this.DataTemp.FieldModelExport.push(lstData);
        return this.DataTemp;
    }
    SetFieldGird(lstData) {
        if (this.DataTemp.FieldGird.indexOf(lstData) >= 0 || this.CheckNull(lstData) == false) return;
        else
            this.DataTemp.FieldGird.push(lstData);
        return this.DataTemp;
    }

    SetKeyPermission(lstData) {
        if (this.DataTemp.KeyPermission.indexOf(lstData) >= 0 || this.CheckNull(lstData) == false) return;
        else
            this.DataTemp.KeyPermission.push(lstData);
        return this.DataTemp;
    }
    SetOtherResourceEnum(lstData) {
        if (this.DataTemp.OtherResourceEnum.indexOf(lstData) >= 0 || this.CheckNull(lstData) == false) return;
        else
            this.DataTemp.OtherResourceEnum.push(lstData);
        return this.DataTemp;
    }
    SetEnumData(lstData) {
        if (this.DataTemp.EnumData.indexOf(lstData) >= 0 || this.CheckNull(lstData) == false) return;
        else
            this.DataTemp.EnumData.push(lstData);
        return this.DataTemp;
    }
    SetStore(lstData) {
        if (this.DataTemp.Store.indexOf(lstData) >= 0 || this.CheckNull(lstData) == false) return;
        else
            this.DataTemp.Store.push(lstData);
        return this.DataTemp;
    }
    SetTranslateEN(lstData) {
        if (this.DataTemp.TranslateEN.indexOf(lstData) >= 0
            || this.CheckNull(lstData) == false
            || this.CheckTranslate(lstData) == false) return;
        else
            this.DataTemp.TranslateEN.push(lstData);
        return this.DataTemp;
    }
    SetTranslateVN(lstData) {
        if (this.DataTemp.TranslateVN.indexOf(lstData) >= 0
            || this.CheckNull(lstData) == false
            || this.CheckTranslate(lstData) == false) return;
        else
            this.DataTemp.TranslateVN.push(lstData);
        return this.DataTemp;
    }
    SetConstantDislay(lstData) {
        if (this.DataTemp.ConstantDislay.indexOf(lstData) >= 0 || this.CheckNull(lstData) == false) return;
        else
            this.DataTemp.ConstantDislay.push(lstData);
        return this.DataTemp;
    }

    CheckNull(lstData) {
        if (lstData == null || lstData === undefined) return false;
        return true
    }
    CheckTranslate(lstData) {
        if (!lstData.Key || !lstData.Translate) return false;
        return true
    }
    CheckField(lstData) {
        if (!lstData.TypeData || !lstData.NameField) return false;
        return true
    }


}

module.exports = TranferService;