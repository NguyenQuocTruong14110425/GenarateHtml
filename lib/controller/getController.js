const ViewChild = require('./ViewChild');

class getController extends ViewChild {
    constructor(NameView,
        TypeParam,
        ParamView,
        NameController
    ) {
        super(NameView,TypeParam,ParamView,NameController,NameController,NameController);
        this.NameController=NameController;
      }
    get InitController()
    {
        var result=`namespace HRM.Presentation.Main.Controllers
        {
            public class ${this.NameController}Controller : MainBaseController
            {
                readonly string _hrm_Hr_Service = ConstantPathWeb.Hrm_Hre_Service;
                // GET: /${this.NameController}/Index/
                ${super.Index()}
                // View page Info: /${this.NameController}/${this.NameView}/
                ${super.ViewInfo()}
                // GET: /${this.NameController}/RemoveSelected/
                ${super.RemoveSelected()}
            }
        }\n`
        return result;
    }



}

module.exports = getController;