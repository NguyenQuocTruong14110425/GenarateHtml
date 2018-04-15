using HRM.Infrastructure.Security;
using HRM.Infrastructure.Utilities;
using HRM.Presentation.Attendance.Models
using HRM.Presentation.Category.Models;
using HRM.Presentation.Hr.Models;
using HRM.Presentation.Payroll.Models;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace HRM.Presentation.Main.Controllers
        {
            public class Sal_ProductiveConveyorController : MainBaseController
            {
                readonly string _hrm_Hr_Service = ConstantPathWeb.Hrm_Hre_Service;
                // GET: /Sal_ProductiveConveyor/Index/
                public ActionResult Index()
                {
                    return View();
                }

                // View page Info: /Sal_ProductiveConveyor/ProductiveConveyorInfo/
                public ActionResult ProductiveConveyorInfo(string id)
                {
                    if (!string.IsNullOrEmpty(id))
                    {
                        var paramID = Common.ConvertToGuid(id);
                        var service = new RestServiceClient<Sal_ProductiveConveyorModel>(UserLogin, LanguageCode);
                        service.SetCookies(Request.Cookies, _hrm_Hr_Service);
                        var modelResult = service.Get(_hrm_Hr_Service, "api/Sal_ProductiveConveyor/", paramID);
                        return View(modelResult);
                    }
                    else
                    {
                        return View();
                    }
                }

                // GET: /Sal_ProductiveConveyor/RemoveSelected/
                public ActionResult RemoveSelected(List<Guid> selectedIds)
                {
                    return RemoveOrDeleteAndReturn<Sal_ProductiveConveyorModel>(_hrm_Hr_Service, "api/Sal_ProductiveConveyor/", selectedIds, ConstantPermission.Sal_ProductiveConveyor, DeleteType.Remove.ToString());
                }

            }
        }
