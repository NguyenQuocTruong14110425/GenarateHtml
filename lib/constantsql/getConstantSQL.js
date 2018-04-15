class getConstantSQL {
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
  Init(ConstantSql) {
    return `namespace HRM.Infrastructure.Utilities
    {
        /// <summary>
        /// Quy tắc đặt tên store và tên hàm
        /// TenProject_TenModule_Loai(sp hoặc fn)_Action(get, add, edit, delete...)_Tên
        /// vd: hrm_hr_sp_get_Profile
        /// </summary>
        public class ConstantSql
        {
          #region ${this.Controller}
          //[${this.NamePerson}][${this.DateDoTask}][${this.IdTask}]
          ${ConstantSql}
          #endregion
        }
      }\n`
  }

  SetConstantSQL(NameSQL) {
    var ToUpperCaseName =NameSQL.toUpperCase();
    return ` public static string hrm_${NameSQL}
    {
        get
        {
            if (Common.UseDataBaseName == DATABASETYPE.ORACLE.ToString())
            {
                return "${ToUpperCaseName}";
            }
            else
            {
                return "exec hrm_${NameSQL}";
            }
        }

    }\n`
  }

}

module.exports = getConstantSQL;