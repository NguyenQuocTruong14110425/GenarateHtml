const getLibrary = require('../library/getLibrary');

class getEntity extends getLibrary {
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

    Init(FieldProperties) {
        let result = super.initEntityLibrary +
            `namespace HRM.Business.Attendance.Models
            {
                public class ${this.Controller}Entity : HRMBaseModel
                {
                #region ${this.Controller}
                //[${this.NamePerson}][${this.DateDoTask}][${this.IdTask}]
                ${FieldProperties}
                #endregion
                }
        }\n`
        return result;
    }

    SetFieldProperties(TypeData, FieldName) {
        return `public ${TypeData} ${FieldName} { get; set; }\n`
    }

}

module.exports = getEntity;