using KurWebApi.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace KurWebApi.Controllers
{
    [ApiController]
    [Route("Exchange-Rate")]
    public class ExchangeRateController : Controller
    {
        public IExchangeRate? _exchangeRate { get; set; }
        public ExchangeRateController(IExchangeRate exchangeRate) => _exchangeRate = exchangeRate;


        [HttpGet(Name = "GetExchangeRate")]
        public IActionResult Get()
        {
            var result = _exchangeRate?.GetAllExchangeRate();
            return Ok(result);
        }
    }
}
