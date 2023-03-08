$(document).ready(function () {

	$("#allExchangeData").html(`<div class="text-center">Herhangi bir veri yok!</div>`);

	$("#GetKur").click(function () {

		$.ajax({
			url: "https://localhost:7125/Exchange-Rate",
			type: "GET",
			beforeSend: function (xhr) {
				$("#alerts").append(`<div id="GettingExchangeRatesAlert"> <div class="alert alert-info" role="alert">Kurlar sorgulanıyor, lütfen bekleyiniz. (2 - 3 dk arası sürmektedir. Internet bağlantını hızınıza göre değişiklik gösterir!) </div> </div>`).css("display", "none").fadeIn();
				$("#GetKur").html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Lütfen bekleyiniz...`);
				$("#GetKur").prop("disabled", true);
			},
			success: function (data) {
				console.log(data);
				$("#GetKur").html(`Kurları Getir`);

				$("#GettingExchangeRatesAlert").delay(1000).fadeOut(1000, function () {
					$(this).remove();
				});

                drawChart(data);
				CreateAllExchangeData(data);
			},
			error: function (xhr, status, error) {
				$("#GetKur").html(`Kurları Getir`);
				$("#GetKur").prop("disabled", false);
				$("#GettingExchangeRatesAlert").delay(1000).fadeOut(1000, function () {
					$(this).remove();
				});
			}
		});

	});

	function CreateAllExchangeData(data) {

		$("#alerts").append(`<div id="LoadDataAlert"> <div class="alert alert-info" role="alert">Bütün kurlar tabloya ekleniyor..</div> </div>`).css("display", "none").fadeIn();

		$("#allExchangeData").html(`<div class="d-flex justify-content-center"> <div class="spinner-border text-primary" role="status">  <span class="visually-hidden">Loading...</span> </div> </div>`);

		//var json = JSON.parse(`{ "exchangeRate": [ { "exchangeRateName": "USD", "exchangePrice": "18,7948", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,7948", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,7948", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8092", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8087", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8100", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8109", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8112", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8112", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8112", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8184", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8225", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8282", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8320", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8360", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8360", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8360", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8438", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8464", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8506", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8548", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8567", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8567", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8567", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8632", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8647", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8652", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8670", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8587", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8587", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8587", "exchangeRateDate": "5.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2662", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1606", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2127", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2313", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1664", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1664", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1664", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0922", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2332", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1746", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1579", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0376", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0376", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0376", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1432", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0950", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0599", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9977", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9653", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9653", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9653", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9061", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0042", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0845", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0545", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0195", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0195", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0195", "exchangeRateDate": "5.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6219", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5558", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6979", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7719", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7478", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7478", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7478", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6375", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,8764", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7214", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6535", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,4479", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,4479", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,4479", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6350", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6846", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7526", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6683", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6160", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6160", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6160", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5272", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7381", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7194", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5599", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5637", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5637", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5637", "exchangeRateDate": "5.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0632", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0632", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0632", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9935", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9946", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0439", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0075", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9766", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9766", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9766", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0667", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0893", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0407", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0533", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9229", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9229", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9229", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9768", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9729", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8946", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9158", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8789", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8789", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8789", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8499", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8710", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8511", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8399", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8803", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8803", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8803", "exchangeRateDate": "5.03.2023 00:00:00" } ], "highsOfLastMonth": [ { "exchangeRateName": "USD", "exchangePrice": "18,8670", "exchangeRateDate": "2.03.2023" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "3.02.2023" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "3.02.2023" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0893", "exchangeRateDate": "14.02.2023" } ] }`);
		var response = data.exchangeRate;

		const content = response.map((data) => `<tr><td>${data.exchangeRateDate}</td><td>${data.exchangeRateName}</td><td>₺ ${data.exchangePrice}</td></tr>`);

		$("#allExchangeData").html(`
			<table class="table" >
				<thead>
					<tr>
						<th scope="col">Exchange Rate Date</th>
						<th scope="col">Exchange Rate Name</th>
						<th scope="col">Excahnge Rate Price</th>
					</tr>
				</thead>
				<tbody id="allExchangeDataContent"></tbody>
			</table>
		`);

		$("#allExchangeDataContent").html(content);		

		$("#LoadDataAlert").delay(1000).fadeOut(1000, function () {
			$(this).remove();
		});
	}


	$("#ExportToExcel").click(() => {

		//var data = JSON.parse(`{ "exchangeRate": [ { "exchangeRateName": "USD", "exchangePrice": "18,7948", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,7948", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,7948", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8092", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8087", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8100", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8109", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8112", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8112", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8112", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8184", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8225", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8282", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8320", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8360", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8360", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8360", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8438", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8464", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8506", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8548", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8567", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8567", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8567", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8632", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8647", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8652", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8670", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8587", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8587", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "USD", "exchangePrice": "18,8587", "exchangeRateDate": "5.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2662", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1606", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2127", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2313", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1664", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1664", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1664", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0922", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,2332", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1746", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1579", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0376", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0376", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0376", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,1432", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0950", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0599", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9977", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9653", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9653", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9653", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "19,9061", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0042", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0845", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0545", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0195", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0195", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "EUR", "exchangePrice": "20,0195", "exchangeRateDate": "5.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6219", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5558", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6979", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7719", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7478", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7478", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7478", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6375", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,8764", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7214", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6535", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,4479", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,4479", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,4479", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6350", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6846", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7526", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6683", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6160", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6160", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,6160", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5272", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7381", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,7194", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5599", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5637", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5637", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "GBP", "exchangePrice": "22,5637", "exchangeRateDate": "5.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0632", "exchangeRateDate": "3.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0632", "exchangeRateDate": "4.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0632", "exchangeRateDate": "5.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9935", "exchangeRateDate": "6.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9946", "exchangeRateDate": "7.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0439", "exchangeRateDate": "8.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0075", "exchangeRateDate": "9.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9766", "exchangeRateDate": "10.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9766", "exchangeRateDate": "11.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9766", "exchangeRateDate": "12.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0667", "exchangeRateDate": "13.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0893", "exchangeRateDate": "14.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0407", "exchangeRateDate": "15.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0533", "exchangeRateDate": "16.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9229", "exchangeRateDate": "17.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9229", "exchangeRateDate": "18.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9229", "exchangeRateDate": "19.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9768", "exchangeRateDate": "20.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9729", "exchangeRateDate": "21.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8946", "exchangeRateDate": "22.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,9158", "exchangeRateDate": "23.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8789", "exchangeRateDate": "24.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8789", "exchangeRateDate": "25.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8789", "exchangeRateDate": "26.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8499", "exchangeRateDate": "27.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8710", "exchangeRateDate": "28.02.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8511", "exchangeRateDate": "1.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8399", "exchangeRateDate": "2.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8803", "exchangeRateDate": "3.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8803", "exchangeRateDate": "4.03.2023 00:00:00" }, { "exchangeRateName": "CAD", "exchangePrice": "13,8803", "exchangeRateDate": "5.03.2023 00:00:00" } ], "highsOfLastMonth": [ { "exchangeRateName": "USD", "exchangePrice": "18,8670", "exchangeRateDate": "2.03.2023" }, { "exchangeRateName": "EUR", "exchangePrice": "20,5163", "exchangeRateDate": "3.02.2023" }, { "exchangeRateName": "GBP", "exchangePrice": "22,9476", "exchangeRateDate": "3.02.2023" }, { "exchangeRateName": "CAD", "exchangePrice": "14,0893", "exchangeRateDate": "14.02.2023" } ] }`);

		//var response = data.highsOfLastMonth;
		
		//const excelContent = response.map((data) => `<tr><td>${data.exchangeRateDate}</td><td>${data.exchangeRateName}</td><td>${data.exchangePrice} TL</td></tr>`);
		//$('#ExportToExcel').attr('data-info', excelContent);
		
		var tbodyContent = $('#ExportToExcel').attr('data-info');

		if (tbodyContent != undefined || tbodyContent != null) {

			var htmls = "";
			var uri = 'data:application/vnd.ms-excel;base64,';
			var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
			var base64 = function (s) {
				return window.btoa(unescape(encodeURIComponent(s)))
			};

			var format = function (s, c) {
				return s.replace(/{(\w+)}/g, function (m, p) {
					return c[p];
				})
			};

			htmls =
				`
				<table class="table" >
					<thead>
						<tr>
							<th scope="col">Exchange Rate Date</th>
							<th scope="col">Exchange Rate Name</th>
							<th scope="col">Excahnge Rate Price</th>
						</tr>
					</thead>
					<tbody>${tbodyContent}</tbody>
				</table>
			`

			var ctx = {
				worksheet: 'Worksheet',
				table: htmls
			}

			var link = document.createElement("a");
			link.download = "HighExchangeRates.xls";
			link.href = uri + base64(format(template, ctx));
			link.click();
		}

		else alert("Herhangi bir data yok!");

	});



	function drawChart(data) {

		var response = data.highsOfLastMonth.map((veri) => [`${veri.exchangeRateDate} - ${veri.exchangeRateName}`, veri.exchangePrice.replace(',', '.'), '']);

		google.charts.load("current", { packages: ['corechart'] });

		google.charts.setOnLoadCallback(() => {
			var data = google.visualization.arrayToDataTable([
				['Rate Name And Date', 'Rate Price', { role: 'style' }],
				...response.map(veri => [veri[0], parseFloat(veri[1]), veri[2]])
			]);

			var view = new google.visualization.DataView(data);

			var options = {
				title: "Son 1 ayın en yüksek kurları",
				//width: 600,
				//height: 400,
				bar: { groupWidth: "95%" },
				legend: { position: "none" },
			};
			var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
			chart.draw(view, options);
		});

		const excelContent = response.map((data) => `<tr><td>${data.exchangeRateDate}</td><td>${data.exchangeRateName}</td><td>₺ ${data.exchangePrice}</td></tr>`);
		$('#ExportToExcel').attr('data-info', excelContent);
		
	}




});