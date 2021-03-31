using DevExpress.DataAccess.Json;
using DevExpress.ExpressApp;
using GOV_podatnicy_VAT.Module.BusinessObjects;
using Newtonsoft.Json;
using System;
using WykazPodatnikow.Standard;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


namespace GOV_podatnicy_VAT.Module.Controllers
{
    // For more typical usage scenarios, be sure to check out https://documentation.devexpress.com/eXpressAppFramework/clsDevExpressExpressAppViewControllertopic.aspx.
    public partial class SearchController : ViewController
    {
        
        public string[] subj;
        public static async Task<WykazPodatnikow.Data.EntityResponse> CreateDataSourceFromWebAsync()
        {
            string stringToCheck = "6340134211"; //Example NIP
            var vatList = new VatWhiteList(new HttpClient(),url: "https://wl-api.mf.gov.pl/");//https://wl-api.mf.gov.pl/ //https://wl-test.mf.gov.pl/
            var resultNip = await vatList.GetDataFromNipAsync(stringToCheck, DateTime.Now);

            //.GetDataFromNipAsync("[NIP]", DateTime.Now); //Wyszukiwanie pojedyńczego podmiotu po nip.

            //.GetDataFromNipsAsync("[NIPy]", DateTime.Now); //Wyszukiwanie podmiotów po numerach nip.

            //.GetDataFromRegonAsync("[Regon]", DateTime.Now); //Wyszukiwanie pojedyńczego podmiotu po regon.

            //.GetDataFromRegonsAsync("[Regony]", DateTime.Now); //Wyszukiwanie podmiotów po numerach regon.

            //.GetDataFromBankAccountAsync("[Konto bankowe]", DateTime.Now); //Wyszukiwanie podmiotuw po numerze konta.

            //.GetDataFromBankAccountsAsync("[Konta bankowe]", DateTime.Now); //Wyszukiwanie podmiotów po numerach kont.

            //.CheckFromNipAndBankAccountsAsync("[NIP]", "[Konta bankowe]", DateTime.Now); //Sprawdzenie pojedyńczego podmiotu po nip i numerze konta.

            //.CheckFromRegonAndBankAccountsAsync("[Regon]", "[Konta bankowe]", DateTime.Now); //Sprawdzenie pojedyńczego podmiotu po regon i numerze konta.
           

            //first try
            //string res=resultNip.Result.RequestId;
            //string nam = resultNip.Result.Subject.Name;            
            //HttpClient httpClient = new HttpClient();
            //httpClient.BaseAddress = new Uri("");
            //var Getresult = httpClient.GetAsync($"");

            //second try
            //var jsonDataSource = new JsonDataSource();
            //jsonDataSource.JsonSource = new UriJsonSource(new Uri(@"https://wl-api.mf.gov.pl/api/search/nip/6292406544?date=2021-03-19"));
            //jsonDataSource.Fill();           //jsonDataSource/resultsview/[0]/result/subject
            //string jsonString = jsonDataSource.ToString();
            //Entity en = JsonConvert.DeserializeObject<Entity>(jsonDataSource.ToString());
            //string name = en.Subject.Result.ToString();
            return resultNip;
        }

        public SearchController()
        {
            InitializeComponent();
            // Target required Views (via the TargetXXX properties) and create their Actions.
        }
        protected override void OnActivated()
        {
            base.OnActivated();            
            // Perform various tasks depending on the target View.
        }
        protected override void OnViewControlsCreated()
        {
            base.OnViewControlsCreated();            
            // Access and customize the target View control.
        }
        protected override void OnDeactivated()
        {
            // Unsubscribe from previously subscribed events and release other references and resources.
            base.OnDeactivated();
        }
    }
}
