using HRM.Business.BaseModels;
using System;
using System.Collections.Generic;
namespace HRM.Business.Attendance.Models
            {
                public class Sal_ProductiveConveyorEntity : HRMBaseModel
                {
                #region Sal_ProductiveConveyor
                //[Truong.Nguyen][16/01/2018][952661]
                public string ProfileName { get; set; }
public DateTime? DateHire { get; set; }
public Guid? ResReasonID { get; set; }
public float WorkHours { get; set; }
public string ProfileIds { get; set; }
public string Note1 { get; set; }

                #endregion
                }
        }
