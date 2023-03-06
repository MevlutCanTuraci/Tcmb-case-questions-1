using Deneme;
using System.Xml;
using static Deneme.KurHelper;

//TRYExchRate helper = new TRYExchRate(DateTime.Parse("5.03.2023"));
//TRYExchRate helper = new TRYExchRate(DateTime.Now.Date);
//Console.WriteLine("Date -> " + DateTime.Now.Date);

//KurHelper helper = new KurHelper(DateTime.Parse("05-03-2023"));

//helper.LoadExchangeRates();

//Console.Write("İstenilen kur tarihi: " + helper.CurrencyDate.Date);
//Console.WriteLine("");
//Console.Write("Alınan kur tarihi: " + helper.ActualCurrencyDate.Date);

//// USD
//Console.WriteLine("USD - Döviz Alış: " + helper.GetExchRate("USD", ExchRateType.ForexBuying).ToString());
//Console.WriteLine("USD - Döviz Satış: " + helper.GetExchRate("USD", ExchRateType.ForexSelling).ToString());
//Console.WriteLine("USD - Efektif Alış: " + helper.GetExchRate("USD", ExchRateType.BanknoteBuying).ToString());
//Console.WriteLine("USD - Efektif Satış: " + helper.GetExchRate("USD", ExchRateType.BanknoteSelling).ToString());
//Console.WriteLine("");

//// diğer para birimleri
//Console.WriteLine("EUR - Döviz Alış: " + helper.GetExchRate("EUR", ExchRateType.ForexBuying).ToString());
//Console.WriteLine("GBP - Döviz Alış: " + helper.GetExchRate("GBP", ExchRateType.ForexBuying).ToString());
//Console.WriteLine("CAD - Döviz Alış: " + helper.GetExchRate("CAD", ExchRateType.ForexBuying).ToString());


KurHelper helper;

//List<Tuple<DateTime, decimal>> exchangeRatesList = new List<Tuple<DateTime, decimal>>();
//DateTime startDate = new DateTime(2023, 2, 3);
//DateTime endDate = new DateTime(2023, 3, 5);

//for (DateTime date = startDate; date <= endDate; date = date.AddDays(1))
//{
//    helper = new KurHelper(date);
//    helper.LoadExchangeRates();
//    decimal usdForexBuyingRate = helper.GetExchRate("USD", ExchRateType.ForexBuying);
//    exchangeRatesList.Add(new Tuple<DateTime, decimal>(date, usdForexBuyingRate));
//}

//var maxExchangeRate = exchangeRatesList.OrderByDescending(rate => rate.Item2).FirstOrDefault();
//Console.WriteLine($"En yüksek USD döviz alış kurunun olduğu tarih: {maxExchangeRate.Item1.ToShortDateString()} - Kur Değeri: {maxExchangeRate.Item2}");


List<Tuple<DateTime, string, decimal>> exchangeRatesList = new List<Tuple<DateTime, string, decimal>>();
DateTime startDate = new DateTime(2023, 2, 3);
DateTime endDate = new DateTime(2023, 3, 5);

string[] currencyCodes = { "USD", "EUR", "GBP", "CAD" }; // Bu listeye diğer para birimleri kodlarını da ekleyebilirsiniz

foreach (string currencyCode in currencyCodes)
{
    for (DateTime date = startDate; date <= endDate; date = date.AddDays(1))
    {
        helper = new KurHelper(date);
        helper.LoadExchangeRates();
        decimal exchangeRate = helper.GetExchRate(currencyCode, ExchRateType.ForexBuying);
        exchangeRatesList.Add(new Tuple<DateTime, string, decimal>(date, currencyCode, exchangeRate));

        Console.WriteLine($"date -> {date} -- currencyCode -> {currencyCode} --- exchangeRate -> {exchangeRate}");

    }
}

var maxExchangeRatesByCurrency = exchangeRatesList.GroupBy(rate => rate.Item2)
    .Select(grp => new { CurrencyCode = grp.Key, MaxExchangeRate = grp.OrderByDescending(x => x.Item3).FirstOrDefault() });

foreach (var maxExchangeRate in maxExchangeRatesByCurrency)
{
    Console.WriteLine($"En yüksek {maxExchangeRate.CurrencyCode} döviz alış kurunun olduğu tarih: {maxExchangeRate.MaxExchangeRate.Item1.ToShortDateString()} - Kur Değeri: {maxExchangeRate.MaxExchangeRate.Item3}");
}




Console.ReadLine();