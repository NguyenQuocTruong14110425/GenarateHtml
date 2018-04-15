using HRM.Infrastructure.Security;
using HRM.Infrastructure.Utilities;
using HRM.Presentation.Attendance.Modelsusing HRM.Presentation.Category.Models;
using HRM.Presentation.Hr.Models;
using HRM.Presentation.Payroll.Models;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace HRM.Presentation.Main.Controllers
        {
            public class ProductiveConveyorController : MainBaseController
            {
                readonly string _hrm_Hr_Service = ConstantPathWeb.Hrm_Hre_Service;
                // GET: /ProductiveConveyor/Index/
                public ActionResult Index()
                {
                    return View();
                }

                // View page Info: /ProductiveConveyor/ProductiveConveyorInfo/
                public ActionResult ProductiveConveyorInfo(string id)
                {
                    if (!string.IsNullOrEmpty(id))
                    {
                        var paramID = Common.ConvertToGuid(id);
                        var service = new RestServiceClient<ProductiveConveyorModel>(UserLogin, LanguageCode);
                        service.SetCookies(Request.Cookies, _hrm_Hr_Service);
                        var modelResult = service.Get(_hrm_Hr_Service, "api/ProductiveConveyor/", paramID);
                        return View(modelResult);
                    }
                    else
                    {
                        return View();
                    }
                }

                // GET: /ProductiveConveyor/RemoveSelected/
                public ActionResult RemoveSelected(List<Guid> selectedIds)
                {
                    return RemoveOrDeleteAndReturn<ProductiveConveyorModel>(_hrm_Hr_Service, "api/ProductiveConveyor/", selectedIds, ConstantPermission.ProductiveConveyor, DeleteType.Remove.ToString());
                }

            }
        }
