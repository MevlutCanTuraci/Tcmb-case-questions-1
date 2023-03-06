namespace KurWebApi.Models
{
    public class ExchangeRateResult
    {
        public List<ExchangeRateModel> ExchangeRate { get; set; }
        public List<HighsOfLastMonthModel> HighsOfLastMonth { get; set; }
    }
}