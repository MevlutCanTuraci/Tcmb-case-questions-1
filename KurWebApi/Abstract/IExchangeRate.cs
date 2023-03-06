using KurWebApi.Models;

namespace KurWebApi.Abstract
{
    public interface IExchangeRate
    {
        ExchangeRateResult GetAllExchangeRate();
    }
}
