class getConstantPermission {
  constructor(
    Controller,
    NamePerson,
    DateDoTask,
    IdTask
  ) {
    this.Controller = Controller;
    this.NamePerson = NamePerson;
    this.DateDoTask = DateDoTask;
    this.IdTask = IdTask;
  }

  get initLangEN() {
    return this.Init;
  }
  Init(ConstantPermission) {
    return `namespace HRM.Infrastructure.Security
    {
        public class ConstantPermission
        {
          #region ${this.Controller}
          //[${this.NamePerson}][${this.DateDoTask}][${this.IdTask}]
          ${ConstantPermission}
          #endregion
        }
      }\n`
  }

  SetConstantPermission(FieldName) {
    return `public const string ${FieldName} = "${FieldName}";\n`
  }

}

module.exports = getConstantPermission;