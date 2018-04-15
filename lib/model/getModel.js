const getLibrary = require('../library/getLibrary');

class getModel extends getLibrary {
    constructor(Controller,
        NamePerson,
        DateDoTask,
        IdTask
    ) {
        super();
        this.Controller = Controller;
        this.NamePerson = NamePerson;
        this.DateDoTask = DateDoTask;
        this.IdTask = IdTask;
    }
    get initEnum() {
        return this.Init;
    }

    Init(FieldModel, FieldGrid, FieldSearch, FieldExport) {
        if (!FieldModel) FieldModel = `//Thêm thông tin field model`;
        if (!FieldGrid) FieldGrid = `//Thêm thông tin field cho lưới`;
        if (!FieldSearch) FieldSearch = `//Thêm thông tin field cho điều kiện search`;
        if (!FieldExport) FieldExport = `//Thêm thông tin cho điều kiện export`;
        
        let result = super.initModelLibrary +
            `namespace HRM.Presentation.Payroll.Models
            {
                //[${this.NamePerson}][${this.DateDoTask}][${this.IdTask}]
                public class ${this.Controller}Model : BaseViewModel
                {
                    ${FieldModel}
                    public partial class FieldNames
                    {
                        ${FieldGrid}
                    }
                }

                //Model dùng cho điều kiện search
                //Thứ tự model search trùng với thứ tự param trong sql
                public class ${this.Controller}SearchModel
                {
                    ${FieldSearch}
                }

                //Model dùng cho xuất báo cáo
                public class ${this.Controller}ForExportModel
                {
                    ${FieldExport}
                }
        }\n`
        return result;
    }

    SetFieldTranslateProperties(TypeData, FieldName, translate) {
        var result = `public ${TypeData} ${FieldName} { get; set; }\n`;
        if (translate) {
            result = `[DisplayName(ConstantDisplay.${translate})]
            public ${TypeData} ${FieldName} { get; set; }\n`;

            return result;
        }
        return result;
    }

    SetFieldGridProperties(FieldName) {
        return `public const string ${FieldName} = "${FieldName}";\n`;
    }

}

module.exports = getModel;