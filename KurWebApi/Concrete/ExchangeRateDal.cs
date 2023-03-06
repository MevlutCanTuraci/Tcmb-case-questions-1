using KurWebApi.Abstract;
using KurWebApi.Models;
using KurWebApi.Utilities;
using System.Collections.Generic;

namespace KurWebApi.Concrete
{
    public class ExchangeRateDal : IExchangeRate
    {
        private KurHelper? _kurHelper { get; set; }

        public List<ExchangeRateModel>? exchangeRateModel { get; set; }
        public List<HighsOfLastMonthModel>? highsOfLastMonth { get; set; }

        public ExchangeRateResult GetAllExchangeRate()
        {
            exchangeRateModel = new List<ExchangeRateModel>();
            highsOfLastMonth = new List<HighsOfLastMonthModel>();

            List<Tuple<DateTime, string, decimal>> exchangeRatesList = new List<Tuple<DateTime, string, decimal>>();
            DateTime startDate = new DateTime(2023, 2, 3);
            DateTime endDate = new DateTime(2023, 3, 5);

            // Bu listeye diğer para birimleri kodlarını da ekleyebilirsiniz.
            string[] currencyCodes = { "USD", "EUR", "GBP", "CAD" };

            foreach (string currencyCode in currencyCodes)
            {
                for (DateTime date = startDate; date <= endDate; date = date.AddDays(1))
                {
                    //date -> 19.02.2023 00:00:00 -- currencyCode -> CAD --- exchangeRate -> 13,9229

                    _kurHelper = new KurHelper(date);
                    _kurHelper.LoadExchangeRates();
                    decimal exchangeRate = _kurHelper.GetExchRate(currencyCode, KurHelper.ExchRateType.ForexBuying);
                    exchangeRatesList.Add(new Tuple<DateTime, string, decimal>(date, currencyCode, exchangeRate));

                    exchangeRateModel.Add(new ExchangeRateModel
                    {
                        ExchangeRateName = $"{currencyCode}",
                        ExchangePrice = $"{exchangeRate}",
                        ExchangeRateDate = $"{date}"
                    });
                }
            }

            var maxExchangeRatesByCurrency = exchangeRatesList.GroupBy(rate => rate.Item2)
            .Select(grp => new { CurrencyCode = grp.Key, MaxExchangeRate = grp.OrderByDescending(x => x.Item3).FirstOrDefault() });

            foreach (var maxExchangeRate in maxExchangeRatesByCurrency)
            {
                Console.WriteLine($"En yüksek {maxExchangeRate.CurrencyCode} döviz alış kurunun olduğu tarih: {maxExchangeRate.MaxExchangeRate.Item1.ToShortDateString()} - Kur Değeri: {maxExchangeRate.MaxExchangeRate.Item3}");

                highsOfLastMonth.Add(new HighsOfLastMonthModel
                {
                    ExchangeRateName = $"{maxExchangeRate.CurrencyCode}",
                    ExchangePrice = $"{maxExchangeRate.MaxExchangeRate.Item1.ToShortDateString()}",
                    ExchangeRateDate = $"{maxExchangeRate.MaxExchangeRate.Item3}"
                });
            }


            ExchangeRateResult result = new ExchangeRateResult
            {
                ExchangeRate = exchangeRateModel,
                HighsOfLastMonth = highsOfLastMonth
            };

            return result;

        }
    }
}