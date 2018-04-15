class getLibrary {
  constructor() { }
  get initLibrary() {
    var result =
      this.HRM_Infrastructure_Security() +
      this.HRM_Infrastructure_Utilities() +
      this.HRM_Presentation_Attendance_Models() +
      this.HRM_Presentation_Category_Models() +
      this.HRM_Presentation_Hr_Models() +
      this.HRM_Presentation_Payroll_Models() +
      this.System_Collections_Generic() +
      this.System() +
      this.System_Linq() +
      this.System_Web() +
      this.System_Web_Mvc()
    return result;
  }
  get initApiLibrary() {
    var result =
      this.System_Collections_Generic() +
      this.System_Linq() +
      this.System_Net() +
      this.System_Net_Http() +
      this.System_Web_Http() +
      this.System_Web_Mvc() +
      this.HRM_Business_Payroll_Domain() +
      this.HRM_Presentation_Payroll_Models() +
      this.VnResource_Helper_Data() +
      this.HRM_Presentation_Service() +
      this.System() +
      this.HRM_Business_Payroll_Models() +
      this.HRM_Infrastructure_Utilities() +
      this.HRM_Business_Hr_Models() +
      this.HRM_Business_Hr_Domain()
    return result;
  }
  get initEnumLibrary() {
    var result =
      this.System() +
      this.System_Collections_Generic() +
      this.System_ComponentModel() +
      this.System_Reflection()
    return result;
  }
  get initEntityLibrary() {
    var result =
      this.HRM_Business_BaseModel() +
      this.System() +
      this.System_Collections_Generic()
    return result;
  }

  get initModelLibrary() {
    var result =
      this.System() +
      this.System_Collections_Generic() +
      this.System_Linq() +
      this.System_Text() +
      this.System_Threading_Tasks() +
      this.System_ComponentModel_DataAnnotations() +
      this.System_ComponentModel() +
      this.HRM_Infrastructure_Utilities() +
      this.HRM_Presentation_Service()
    return result;
  }
  HRM_Infrastructure_Security() {
    return `using HRM.Infrastructure.Security;\n`
  }
  HRM_Infrastructure_Utilities() {
    return `using HRM.Infrastructure.Utilities;\n`
  }
  HRM_Presentation_Attendance_Models() {
    return `using HRM.Presentation.Attendance.Models\n`
  }
  HRM_Presentation_Category_Models() {
    return `using HRM.Presentation.Category.Models;\n`
  }
  HRM_Presentation_Hr_Models() {
    return `using HRM.Presentation.Hr.Models;\n`
  }
  HRM_Presentation_Payroll_Models() {
    return `using HRM.Presentation.Payroll.Models;\n`
  }
  HRM_Presentation_Service() {
    return `using HRM.Presentation.Service;\n`
  }
  System() {
    return `using System;\n`
  }
  System_Collections_Generic() {
    return `using System.Collections.Generic;\n`
  }
  System_Linq() {
    return `using System.Linq;\n`
  }
  System_Text() {
    return `using System.Text;\n`
  }
  System_Threading_Tasks() {
    return `using System.Threading.Tasks;\n`
  }
  System_ComponentModel_DataAnnotations() {
    return `using System.ComponentModel.DataAnnotations;\n`
  }
  System_ComponentModel() {
    return `using System.ComponentModel;\n`
  }

  System_Web() {
    return `using System.Web;\n`
  }
  System_Web_Mvc() {
    return `using System.Web.Mvc;\n`
  }
  System_Web_Http() {
    return `using System.Web.Http;\n`
  }
  System_ComponentModel() {
    return `using System.ComponentModel;;\n`
  }
  System_Reflection() {
    return `using System.Reflection;\n`
  }
  System_Net() {
    return `using System.Net;\n`
  }
  System_Net_Http() {
    return `using System.Net.Http;\n`
  }
  HRM_Business_Payroll_Domain() {
    return `using HRM.Business.Payroll.Domain;\n`
  }
  HRM_Business_Hr_Models() {
    return `using HRM.Business.Hr.Models;\n`
  }
  HRM_Business_Hr_Domain() {
    return `using VnResource.Hr.Domain;\n`
  }
  HRM_Business_Payroll_Models() {
    return `using HRM.Business.Payroll.Models;\n`
  }
  HRM_Business_BaseModel() {
    return `using HRM.Business.BaseModels;\n`
  }
  VnResource_Helper_Data() {
    return `using VnResource.Helper.Data;\n`
  }




}

module.exports = getLibrary;