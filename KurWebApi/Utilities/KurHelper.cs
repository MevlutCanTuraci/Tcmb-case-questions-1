using System.Net;
using System.Xml;

namespace KurWebApi.Utilities
{
    public class KurHelper
    {
        /// <summary>
        /// TCMB'nin based api url adresi
        /// </summary>
        private const string _apiUrl = "http://www.tcmb.gov.tr/kurlar/{0}.xml";

        /// <summary>
        /// İstenilen tarihte kur yoksa, kaç kez geriye gideceğini belirler.
        /// </summary>
        private const int _exchRateAttempts = 5;

        public string ApiUrl { get; set; }

        /// <summary>
        /// Çekilecek kurun tarihi.
        /// </summary>
        public DateTime CurrencyDate { get; set; }


        /// <summary>
        /// Gerçekten çekilen kurun tarihi.
        /// </summary>
        public DateTime ActualCurrencyDate { get; set; }


        /// <summary>
        /// Çekilen kurun xml formatında tutulduğu nesne.
        /// </summary>
        public XmlDocument XmlDoc { get; set; }

        
        public KurHelper(DateTime currencyDate)
        {
            CurrencyDate = currencyDate;
        }


        /// <summary>
        /// TCMB'den kur bilgilerini çeker.
        /// </summary>
        /// <exception cref="Exception"></exception>
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
                }
            }

            if (XmlDoc == null)
            {
                throw new Exception("Kur bilgisi bulunamadı.");
            }

        }


        /// <summary>
        /// Xml içerisinde ki istenilen veriyi currency'e çevirip geriye döndürülmektedir.
        /// </summary>
        /// <param name="currency"></param>
        /// <param name="exchRateType"></param>
        /// <returns></returns>
        public Decimal GetExchRate(string currency, ExchRateType exchRateType)
        {
            // eğer daha önce load edilmemiş ise bu aşamada yapılır
            if (XmlDoc == null)
            {
                LoadExchangeRates();
            }

            // TCMB noktayı '.' ondalık ayırıcısı olarak kullanır. Bu yüzden noktayı virgüle çeviriyoruz.
            // string'den decimal'e çevrim sırasında windows region ayarlarından etkilenmeden doğru çevrilmesi için en-us culture'ı kullanılır
            System.Globalization.CultureInfo culInfo = new System.Globalization.CultureInfo("en-US", true);

            // xml içinde okunacak node ayarlanır
            string nodeStr = String.Format("Tarih_Date/Currency[@CurrencyCode='{0}']/{1}", currency.ToUpper(), GetExchRateTypeNodeStr(exchRateType));

            // string olarak alınan kur decimal'e çevrilip dönülür
            return Decimal.Parse(XmlDoc.SelectSingleNode(nodeStr).InnerXml, culInfo);
        }


        /// <summary>
        /// Kur'un çekileceği tarih için url oluşturuluyor.
        /// </summary>
        private void CreateApiUrl() => ApiUrl = String.Format(KurHelper._apiUrl, ActualCurrencyDate.ToString("yyyyMM") + "/" + ActualCurrencyDate.ToString("ddMMyyyy"));



        /// <summary>
        /// Enum'da istenilen veriyi, xml içerisinde ki kolon adı geriye döndürülür.
        /// </summary>
        /// <param name="exchRateType"></param>
        /// <returns></returns>
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