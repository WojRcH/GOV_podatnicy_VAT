using System;
using System.Linq;
using DevExpress.ExpressApp;
using DevExpress.Data.Filtering;
using DevExpress.Persistent.Base;
using DevExpress.ExpressApp.Updating;
using DevExpress.Xpo;
using DevExpress.ExpressApp.Xpo;
using DevExpress.Persistent.BaseImpl;
using GOV_podatnicy_VAT.Module.BusinessObjects;
using GOV_podatnicy_VAT.Module.Controllers;
using System.Threading.Tasks;//.Task<WykazPodatnikow.Data.EntityResponse>;
using System.Threading;
using System.Collections.Generic;

namespace GOV_podatnicy_VAT.Module.DatabaseUpdate {
    // For more typical usage scenarios, be sure to check out https://docs.devexpress.com/eXpressAppFramework/DevExpress.ExpressApp.Updating.ModuleUpdater
    public class Updater : ModuleUpdater {
        public Updater(IObjectSpace objectSpace, Version currentDBVersion) :
            base(objectSpace, currentDBVersion) {            
        }        
        public override async void UpdateDatabaseAfterUpdateSchema() {
            base.UpdateDatabaseAfterUpdateSchema();
            
            Task<WykazPodatnikow.Data.EntityResponse> task=SearchController.CreateDataSourceFromWebAsync();
            WykazPodatnikow.Data.EntityResponse taskResult = await task;
            try
            {                
                string name = taskResult.Result.Subject.Name;
                string nip = taskResult.Result.Subject.Nip;
                string regon = taskResult.Result.Subject.Regon;
                string krs = taskResult.Result.Subject.Krs;
                bool hasVirtualAccounts = (bool)taskResult.Result.Subject.HasVirtualAccounts;
                string statusVat = taskResult.Result.Subject.StatusVat;
                if (ObjectSpace.CanInstantiate(typeof(Entity)))
                {
                    Entity entity = ObjectSpace.FindObject<Entity>(
                        CriteriaOperator.Parse("Name==? && Nip==? && StatusVat==? && Regon==? &&Krs==? &&HasVirtualAccounts==?"
                        , name, nip, statusVat, regon, krs, hasVirtualAccounts));
                    if (entity == null)
                    {
                        entity = ObjectSpace.CreateObject<Entity>();
                        entity.Name = name;
                        entity.Nip = nip;
                        entity.Regon = regon;
                        entity.Krs = krs;
                        entity.HasVirtualAccounts = hasVirtualAccounts;
                        entity.StatusVat = statusVat;                        
                    }
                }         
                
                ObjectSpace.CommitChanges();
            }
            catch(System.NullReferenceException ex1) //in case when number of querries above 10 (limited by API)
            {
                
            }
            catch (System.ObjectDisposedException ex2)
            {
                ObjectSpace.Dispose();
            }

            ObjectSpace.Dispose();
            //SearchNipController.CreateDataSourceFromWebAsync().Start();
            //taskResultNip.Status;
            //taskResultNip.AsyncState;
            //string res = SearchNipController.CreateDataSourceFromWebAsync().Result.Result.RequestId;
            //taskResultNip.


            //for (int i = 0; i < 100; i++) // Create 100 example entities
            //{
            //    if (ObjectSpace.CanInstantiate(typeof(Entity)))
            //    {
            //        Entity entity = ObjectSpace.FindObject<Entity>(
            //            CriteriaOperator.Parse("Name==? && Nip==? && StatusVat==? && Regon==? && Pesel==? && Krs==? && ResidenceAddress==? && WorkingAddress==? && RegistrationLegalDate==? && HasVirtualAccounts==?"
            //            , "Jan Kowalski" + i, "22222222" + i, "Czynny", "2676765" + i, "9335557" + i, "00004363476" + i, "ul. Chmielna 2" + i + "/87 00-805 Warszawa", "ul. Prosta " + i + " 00-838 Warszawa", new DateTime(1920, 2, 12).AddYears(i), true));
            //        if (entity == null)
            //        {
            //            entity = ObjectSpace.CreateObject<Entity>();
            //            entity.Name = "Jan Kowalski" + i;
            //            entity.Nip = "22222222" + i;
            //            entity.StatusVat = "Czynny";
            //            entity.Regon = "2676765" + i;
            //            entity.Pesel = "9335557" + i;
            //            entity.Krs = "00004363476" + i;
            //            entity.ResidenceAddress = "ul. Chmielna 2" + i + "/87 00-805 Warszawa";
            //            entity.WorkingAddress = "ul. Prosta " + i + " 00-838 Warszawa";
            //            entity.RegistrationLegalDate = new DateTime(1920, 2, 12).AddYears(i);
            //            entity.HasVirtualAccounts = true;
            //        }
            //    }
            //}           

        }
        public override void UpdateDatabaseBeforeUpdateSchema() {
            base.UpdateDatabaseBeforeUpdateSchema();
            //if(CurrentDBVersion < new Version("1.1.0.0") && CurrentDBVersion > new Version("0.0.0.0")) {
            //    RenameColumn("DomainObject1Table", "OldColumnName", "NewColumnName");
            //}
        }
    }
}
