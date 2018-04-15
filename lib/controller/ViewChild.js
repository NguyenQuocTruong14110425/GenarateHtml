class ViewChild {
  constructor(NameView,
    TypeParam,
    ParamView,
    Model,
    ApiController,
    Permission
) {
        this.NameView = NameView;
        this.TypeParam = TypeParam;
        this.ParamView = ParamView;  
        this.Model = Model;  
        this.ApiController = ApiController;  
        this.Permission = Permission;  
     }

     get initController() {
        return result;
      }
      Index() {
        return `public ActionResult Index()
                {
                    return View();
                }\n`
      }

      RemoveSelected() {
        return `public ActionResult RemoveSelected(List<Guid> selectedIds)
                {
                    return RemoveOrDeleteAndReturn<${this.Model}Model>(_hrm_Hr_Service, "api/${this.ApiController}/", selectedIds, ConstantPermission.${this.Permission}, DeleteType.Remove.ToString());
                }\n`
      }
      ViewInfo() {
        return `public ActionResult ${this.NameView}(${this.TypeParam} ${this.ParamView})
                {
                    if (!string.IsNullOrEmpty(${this.ParamView}))
                    {
                        var paramID = Common.ConvertToGuid(${this.ParamView});
                        var service = new RestServiceClient<${this.Model}Model>(UserLogin, LanguageCode);
                        service.SetCookies(Request.Cookies, _hrm_Hr_Service);
                        var modelResult = service.Get(_hrm_Hr_Service, "api/${this.ApiController}/", paramID);
                        return View(modelResult);
                    }
                    else
                    {
                        return View();
                    }
                }\n`
      }

}

module.exports = ViewChild;