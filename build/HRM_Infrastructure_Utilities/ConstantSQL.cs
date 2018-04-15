namespace HRM.Infrastructure.Utilities
    {
        /// <summary>
        /// Quy tắc đặt tên store và tên hàm
        /// TenProject_TenModule_Loai(sp hoặc fn)_Action(get, add, edit, delete...)_Tên
        /// vd: hrm_hr_sp_get_Profile
        /// </summary>
        public class ConstantSql
        {
          #region Sal_ProductiveConveyor
          //[Truong.Nguyen][16/01/2018][952661]
           public static string hrm_Cat_sp_get_HealthTreatmentPlace
    {
        get
        {
            if (Common.UseDataBaseName == DATABASETYPE.ORACLE.ToString())
            {
                return "CAT_SP_GET_HEALTHTREATMENTPLACE";
            }
            else
            {
                return "exec hrm_Cat_sp_get_HealthTreatmentPlace";
            }
        }

    }
 public static string hrm_Cat_sp_get_HealthTreatmentPlaceByID
    {
        get
        {
            if (Common.UseDataBaseName == DATABASETYPE.ORACLE.ToString())
            {
                return "CAT_SP_GET_HEALTHTREATMENTPLACEBYID";
            }
            else
            {
                return "exec hrm_Cat_sp_get_HealthTreatmentPlaceByID";
            }
        }

    }
 public static string hrm_Cat_sp_get_HealthTreatmentPlaceByIDs
    {
        get
        {
            if (Common.UseDataBaseName == DATABASETYPE.ORACLE.ToString())
            {
                return "CAT_SP_GET_HEALTHTREATMENTPLACEBYIDS";
            }
            else
            {
                return "exec hrm_Cat_sp_get_HealthTreatmentPlaceByIDs";
            }
        }

    }

          #endregion
        }
      }
