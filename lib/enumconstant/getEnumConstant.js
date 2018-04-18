const getLibrary = require('../library/getLibrary');

class getEnumConstant extends getLibrary {
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

    Init(EnumObject, OtherResource) {
        if(!EnumObject) EnumObject=``;
        if(!OtherResource) OtherResource=`// Theemkey phân quyền hệ thống`
        let result = super.initEnumLibrary +
            `namespace HRM.Infrastructure.Utilities
            {
                ${EnumObject}
                /// <summary>
                /// Các resource phân quyền trong hệ thống
                /// Format: [Module]__[ResourceName]
                /// </summary>
                public enum OtherResource
                {
                    ${OtherResource}
                }
        }\n`
        return result;
    }

    EnumObject(NameEnum, ContentEnum) {
        return `/// <summary>
        ///[${this.NamePerson}][${this.DateDoTask}][${this.IdTask}]
        ///bo enum cho ${NameEnum}
        /// </summary>
        public enum ${NameEnum}
        {
            ${ContentEnum}
        }\n`
    }

    SetPropertiesEnum(NameProperties, Description) {
        return
        `[Description("${Description}")]
        ${NameProperties},\n`
    }
    
    SetOtherResource(NameEnum) {
        return `${NameEnum},\n`
    }


}

module.exports = getEnumConstant;