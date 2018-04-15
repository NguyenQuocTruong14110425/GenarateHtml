using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;;
using HRM.Infrastructure.Utilities;
using HRM.Presentation.Service;
namespace HRM.Presentation.Payroll.Models
            {
                //[Truong.Nguyen][16/01/2018][952661]
                public class Sal_ProductiveConveyorModel : BaseViewModel
                {
                    [DisplayName(ConstantDisplay.Sal_ProductiveConveyor_ProfileName)]
            public string ProfileName { get; set; }
[DisplayName(ConstantDisplay.Sal_ProductiveConveyor_DateHire)]
            public DateTime? DateHire { get; set; }
[DisplayName(ConstantDisplay.Sal_ProductiveConveyor_ResReasonID)]
            public Guid? ResReasonID { get; set; }
public float WorkHours { get; set; }
public string ProfileIds { get; set; }
[DisplayName(ConstantDisplay.Sal_ProductiveConveyor_Note)]
            public string Note { get; set; }

                    public partial class FieldNames
                    {
                        public const string ProfileName = "ProfileName";
public const string ProfileID = "ProfileID";
public const string WorkHours = "WorkHours";
public const string Note = "Note";
public const string ResReasonID = "ResReasonID";

                    }
                }

                //Model dùng cho điều kiện search
                //Thứ tự model search trùng với thứ tự param trong sql
                public class Sal_ProductiveConveyorSearchModel
                {
                    [DisplayName(ConstantDisplay.Sal_ProductiveConveyor_ProfileName)]
            public string ProfileName { get; set; }
[DisplayName(ConstantDisplay.Sal_ProductiveConveyor_DateHire)]
            public DateTime? DateHire { get; set; }
[DisplayName(ConstantDisplay.Sal_ProductiveConveyor_ResReasonID)]
            public Guid? ResReasonID { get; set; }
[DisplayName(ConstantDisplay.Sal_ProductiveConveyor_WorkHours)]
            public float WorkHours { get; set; }
public string ProfileIds { get; set; }
[DisplayName(ConstantDisplay.Sal_ProductiveConveyor_Note)]
            public string Note { get; set; }

                }

                //Model dùng cho xuất báo cáo
                public class Sal_ProductiveConveyorForExportModel
                {
                    public string ProfileName { get; set; }
public DateTime? DateHire { get; set; }
public Guid? ResReasonID { get; set; }
public Guid ExportId { get; set; }
public bool IsExport { get; set; }
public string ValueFields { get; set; }

                }
        }
