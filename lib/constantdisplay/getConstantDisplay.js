class getConstantDisplay {
  constructor(
    Controller,
    NamePerson,
    DateDoTask,
    IdTask
) {
        this.Controller = Controller;
        this.NamePerson = NamePerson;
        this.DateDoTask=  DateDoTask;  
        this.IdTask = IdTask;    
     }

     get initConstantDisplay() {
        return this.Init;
      }
      Init(ConstantDisplay,ConstantControlName,ConstantOtherResourceType,ConstantInsuranceElement) {
        if(!ConstantDisplay) ConstantDisplay=`//Thêm constant display cho field`;
        if(!ConstantControlName) ConstantControlName=`//Thêm ConstantControlName cho field`;
        if(!ConstantOtherResourceType) ConstantOtherResourceType=`//Thêm ConstantOtherResourceType cho field`;
        if(!ConstantInsuranceElement) ConstantInsuranceElement=`//Thêm ConstantInsuranceElement cho field`
        return `namespace HRM.Infrastructure.Utilities
                {
                    /// <summary>
                    /// Sử dụng cho mục đích tạo ra biến không thay đổi cho field hiển thị và tooltip
                    /// vd: 
                    /// </summary>
                    public class ConstantDisplay
                    {
                        #region ${this.Controller}
                        //[${this.NamePerson}][${this.DateDoTask}][${this.IdTask}]
                        ${ConstantDisplay}
                        #endregion
                    }
                    //Close ConstantDisplay

                    public class ConstantControlName
                    { 
                        ${ConstantControlName}
                    }
                    //Close ConstantControlName

                    public class ConstantOtherResourceType
                    {
                        ${ConstantOtherResourceType}
                    }
                    //Close ConstantOtherResourceType

                    public class ConstantInsuranceElement
                    {
                        ${ConstantInsuranceElement}
                    }
                    //Close ConstantInsuranceElement
                }\n`
      }

      SetConstantDisplayForField(FieldName) {
        return `public const string ${FieldName} = "${FieldName}";\n`
      }
      SetConstantDisplayForGrid(GridName) {
        return `public const string HRM_${this.Controller}_Grid_Name = "grid${GridName}";\n`
      }
      SetConstantDisplayForPopup(PopupName) {
        return `public const string HRM_${this.Controller}_PopUp_Name = "window${PopupName}";\n`
      }

}

module.exports = getConstantDisplay;