const getLibrary = require('../library/getLibrary');

class getApiController extends getLibrary {
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
    get initApiController() {
        return this.Init;
    }

    Init(NameStoreByID) {
        let result = super.initApiLibrary +
            `namespace HRM.Presentation.Payroll.Service.Controllers.api
            {
                public class ${this.Controller}Controller : ApiControllerBase
                {
                    ///[${this.NamePerson}][${this.DateDoTask}][${this.IdTask}]
                    /// <summary>
                    ///
                    /// </summary>
                    /// <param name="id"></param>
                    /// <returns></returns>
                    public ${this.Controller}Model GetById(Guid id)
                    {
                        string status = string.Empty;
                        var model = new ${this.Controller}Model();
                        ActionService service = new ActionService(UserLogin, LanguageCode);
                        var entity = service.GetByIdUseStore<${this.Controller}Entity> (id, ConstantSql.hrm_${NameStoreByID}, ref status);//note
                        if (entity != null)
                        {
                            model = entity.CopyData<${this.Controller}Model>();
                        }
                        model.ActionStatus = status;
                        return model;
                    }
                    /// <summary>
                    /// 
                    /// </summary>
                    /// <param name="id"></param>
                    /// <returns></returns>
                    public ${this.Controller}Model DeleteOrRemove(string id)
                    {
                        ActionService service = new ActionService(UserLogin, LanguageCode);
                        var result = service.DeleteOrRemove<${this.Controller}Entity, ${this.Controller}Model>(id);
                        return result;
                    }
                    /// <summary>
                    /// 
                    /// </summary>
                    /// <param name="model"></param>
                    /// <returns></returns>
                    [System.Web.Mvc.HttpPost]
                    [System.Web.Mvc.RouteAttribute("api/${this.Controller}")]
                    public ${this.Controller}Model Post([Bind]${this.Controller}Model model)
                    {
                        return service.UpdateOrCreate<${this.Controller}Entity, ${this.Controller}Model>(model);
                    }
                }
            }\n`
        return result;
    }

}

module.exports = getApiController;