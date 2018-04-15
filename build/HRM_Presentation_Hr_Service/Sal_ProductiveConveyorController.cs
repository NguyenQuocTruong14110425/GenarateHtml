using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using HRM.Business.Payroll.Domain;
using HRM.Presentation.Payroll.Models;
using VnResource.Helper.Data;
using HRM.Presentation.Service;
using System;
using HRM.Business.Payroll.Models;
using HRM.Infrastructure.Utilities;
using HRM.Business.Hr.Models;
using VnResource.Hr.Domain;
namespace HRM.Presentation.Payroll.Service.Controllers.api
            {
                public class Sal_ProductiveConveyorController : ApiControllerBase
                {
                    ///[Truong.Nguyen][16/01/2018][952661]
                    /// <summary>
                    ///
                    /// </summary>
                    /// <param name="id"></param>
                    /// <returns></returns>
                    public Sal_ProductiveConveyorModel GetById(Guid id)
                    {
                        string status = string.Empty;
                        var model = new Sal_ProductiveConveyorModel();
                        ActionService service = new ActionService(UserLogin, LanguageCode);
                        var entity = service.GetByIdUseStore<Sal_ProductiveConveyorEntity> (id, ConstantSql.hrm_Cat_sp_get_HealthTreatmentPlaceByID, ref status);//note
                        if (entity != null)
                        {
                            model = entity.CopyData<Sal_ProductiveConveyorModel>();
                        }
                        model.ActionStatus = status;
                        return model;
                    }
                    /// <summary>
                    /// 
                    /// </summary>
                    /// <param name="id"></param>
                    /// <returns></returns>
                    public Sal_ProductiveConveyorModel DeleteOrRemove(string id)
                    {
                        ActionService service = new ActionService(UserLogin, LanguageCode);
                        var result = service.DeleteOrRemove<Sal_ProductiveConveyorEntity, Sal_ProductiveConveyorModel>(id);
                        return result;
                    }
                    /// <summary>
                    /// 
                    /// </summary>
                    /// <param name="model"></param>
                    /// <returns></returns>
                    [System.Web.Mvc.HttpPost]
                    [System.Web.Mvc.RouteAttribute("api/Sal_ProductiveConveyor")]
                    public Sal_ProductiveConveyorModel Post([Bind]Sal_ProductiveConveyorModel model)
                    {
                        return service.UpdateOrCreate<Sal_ProductiveConveyorEntity, Sal_ProductiveConveyorModel>(model);
                    }
                }
            }
