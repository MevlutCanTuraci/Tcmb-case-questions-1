using System.Net;
using System.Xml;

namespace KurWebApi.Utilities
{
    public class KurHelper
    {
        private const string _apiUrl = "http://www.tcmb.gov.tr/kurlar/{0}.xml";
        private const int _exchRateAttempts = 5;

        public string ApiUrl { get; set; }

        /// <summary>
        /// Çekilecek kurun tarihi.
        /// </summary>
        public DateTime CurrencyDate { get; set; }
        
        
        public DateTime ActualCurrencyDate { get; set; }

        
        public XmlDocument XmlDoc { get; set; }

        
        public KurHelper(DateTime currencyDate)
        {
            CurrencyDate = currencyDate;
        }


        public void LoadExchangeRates()
        {
            ActualCurrencyDate = CurrencyDate;

            for (int attempts = 0; attempts <= KurHelper._exchRateAttempts; attempts++)
            {
                try
                {
                    CreateApiUrl();

                    XmlDoc = new XmlDocument();
                    XmlDoc.Load(ApiUrl);
                    break;
                }                
                catch (HttpRequestException ex)
                {
                    if (ex.StatusCode == HttpStatusCode.NotFound)
                    {
                        ActualCurrencyDate = ActualCurrencyDate.AddDays(-1);
                    }
                    else
                    {
                        Console.WriteLine("Kur bilgisi bulunamadı!");
                    }
                }
            }

            if (XmlDoc == null)
            {
                throw new Exception("Kur bilgisi bulunamadı.");
            }

        }


        public Decimal GetExchRate(string currency, ExchRateType exchRateType)
        {
            // eğer daha önce load edilmemiş ise bu aşamada yapılır
            if (XmlDoc == null)
            {
                LoadExchangeRates();
            }

            // TCMB noktayı (.) ondalık ayracı olarak kullanıyor.
            // string'den decimal'e çevrim sırasında windows region ayarlarından etkilenmeden doğru çevrilmesi için en-us culture'ı kullanılır
            System.Globalization.CultureInfo culInfo = new System.Globalization.CultureInfo("en-US", true);

            // xml içinde okunacak node ayarlanır
            string nodeStr = String.Format("Tarih_Date/Currency[@CurrencyCode='{0}']/{1}", currency.ToUpper(), GetExchRateTypeNodeStr(exchRateType));

            // string olarak alınan kur decimal'e çevrilip dönülür
            return Decimal.Parse(XmlDoc.SelectSingleNode(nodeStr).InnerXml, culInfo);
        }


        private void CreateApiUrl() => ApiUrl = String.Format(KurHelper._apiUrl, ActualCurrencyDate.ToString("yyyyMM") + "/" + ActualCurrencyDate.ToString("ddMMyyyy"));


        private string GetExchRateTypeNodeStr(ExchRateType exchRateType)
        {
            string ret = string.Empty;

            switch (exchRateType)
            {
                case ExchRateType.ForexBuying:
                    ret = "ForexBuying";
                    break;

                case ExchRateType.ForexSelling:
                    ret = "ForexSelling";
                    break;

                case ExchRateType.BanknoteBuying:
                    ret = "BanknoteBuying";
                    break;

                case ExchRateType.BanknoteSelling:
                    ret = "BanknoteSelling";
                    break;
            }

            return ret;
        }

        
        /// <summary>
        /// Kur Türleri
        /// </summary>
        public enum ExchRateType
        {
            /// <summary>
            /// Döviz Alış
            /// </summary>
            ForexBuying,

            /// <summary>
            /// Döviz Satış
            /// </summary>
            ForexSelling,

            /// <summary>
            /// Efektif Alış
            /// </summary>
            BanknoteBuying,

            /// <summary>
            /// Efektif Satış
            /// </summary>
            BanknoteSelling
        }

    }
}