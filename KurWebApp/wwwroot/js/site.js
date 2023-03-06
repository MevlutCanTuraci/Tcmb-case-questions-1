﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
	$("#GetKur").click(function () {

		$.ajax({
			url: "https://localhost:7125/Exchange-Rate",
			type: "GET",
			beforeSend: function (xhr) {
				$("#GetKur").html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Lütfen bekleyiniz...`);
			},
			success: function (data) {
				console.log(data);
				$("#GetKur").html(`Kurları Getir`);
			},
			error: function (xhr, status, error) {
				alert(xhr.responseText);
			}
		});

		alert("Tıklandı");

	});

	$("#GetGrafik").click(function () {

		google.charts.load('current', { packages: ['corechart', 'bar'] });
		google.charts.setOnLoadCallback(drawBasic);
		
	});


    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Time of Day');
        data.addColumn('number', 'Motivation Level');

        var jsonData = JSON.parse(`{"exchangeRate":[{"exchangeRateName":"USD","exchangePrice":"18,7948","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,7948","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,7948","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8092","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8087","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8100","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8109","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8112","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8112","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8112","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8184","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8225","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8282","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8320","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8360","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8360","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8360","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8438","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8464","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8506","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8548","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8567","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8567","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8567","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8632","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8647","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8652","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8670","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8587","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8587","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8587","exchangeRateDate":"5.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,5163","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,5163","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,5163","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2662","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1606","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2127","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2313","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1664","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1664","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1664","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0922","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2332","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1746","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1579","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0376","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0376","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0376","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1432","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0950","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0599","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9977","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9653","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9653","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9653","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9061","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0042","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0845","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0545","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0195","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0195","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0195","exchangeRateDate":"5.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,9476","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,9476","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,9476","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6219","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5558","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6979","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7719","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7478","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7478","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7478","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6375","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,8764","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7214","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6535","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,4479","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,4479","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,4479","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6350","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6846","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7526","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6683","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6160","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6160","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6160","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5272","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7381","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7194","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5599","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5637","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5637","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5637","exchangeRateDate":"5.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0632","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0632","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0632","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9935","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9946","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0439","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0075","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9766","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9766","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9766","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0667","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0893","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0407","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0533","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9229","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9229","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9229","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9768","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9729","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8946","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9158","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8789","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8789","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8789","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8499","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8710","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8511","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8399","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8803","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8803","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8803","exchangeRateDate":"5.03.2023 00:00:00"}],"highsOfLastMonth":[{"exchangeRateName":"USD","exchangePrice":"2.03.2023","exchangeRateDate":"18,8670"},{"exchangeRateName":"EUR","exchangePrice":"3.02.2023","exchangeRateDate":"20,5163"},{"exchangeRateName":"GBP","exchangePrice":"3.02.2023","exchangeRateDate":"22,9476"},{"exchangeRateName":"CAD","exchangePrice":"14.02.2023","exchangeRateDate":"14,0893"}]}`);

        var data = "";

        const mappedExchangeRateData = jsonData.highsOfLastMonth.map(function (rate) {		        
		    data += `, ["${rate.exchangeRateDate}", "${rate.exchangeRateName}", ${rate.exchangePrice}]`;
	    });
        

        data.addRows([
            [{ v: [8, 0, 0], f: '8 am' }, 1],
            [{ v: [9, 0, 0], f: '9 am' }, 2],
            [{ v: [10, 0, 0], f: '10 am' }, 3],
            [{ v: [11, 0, 0], f: '11 am' }, 4],
            [{ v: [12, 0, 0], f: '12 pm' }, 5],
            [{ v: [13, 0, 0], f: '1 pm' }, 6],
            [{ v: [14, 0, 0], f: '2 pm' }, 7],
            [{ v: [15, 0, 0], f: '3 pm' }, 8],
            [{ v: [16, 0, 0], f: '4 pm' }, 9],
            [{ v: [17, 0, 0], f: '5 pm' }, 10],
        ]);

        var options = {
            title: 'Motivation Level Throughout the Day',
            hAxis: {
                title: 'Time of Day',
                format: 'h:mm a',
                viewWindow: {
                    min: [7, 30, 0],
                    max: [17, 30, 0]
                }
            },
            vAxis: {
                title: 'Rating (scale of 1-10)'
            }
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div'));

        chart.draw(data, options);
    }
	
});





//function parseData() {

//	var data = `[["Date", "Exchange Rate Name", "Exchange Rate"]`;

//	var jsonData = JSON.parse(`{"exchangeRate":[{"exchangeRateName":"USD","exchangePrice":"18,7948","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,7948","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,7948","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8092","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8087","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8100","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8109","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8112","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8112","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8112","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8184","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8225","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8282","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8320","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8360","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8360","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8360","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8438","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8464","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8506","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8548","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8567","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8567","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8567","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8632","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8647","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8652","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8670","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8587","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8587","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"USD","exchangePrice":"18,8587","exchangeRateDate":"5.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,5163","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,5163","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,5163","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2662","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1606","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2127","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2313","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1664","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1664","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1664","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0922","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,2332","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1746","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1579","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0376","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0376","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0376","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,1432","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0950","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0599","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9977","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9653","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9653","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9653","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"19,9061","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0042","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0845","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0545","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0195","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0195","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"EUR","exchangePrice":"20,0195","exchangeRateDate":"5.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,9476","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,9476","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,9476","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6219","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5558","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6979","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7719","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7478","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7478","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7478","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6375","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,8764","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7214","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6535","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,4479","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,4479","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,4479","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6350","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6846","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7526","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6683","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6160","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6160","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,6160","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5272","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7381","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,7194","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5599","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5637","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5637","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"GBP","exchangePrice":"22,5637","exchangeRateDate":"5.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0632","exchangeRateDate":"3.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0632","exchangeRateDate":"4.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0632","exchangeRateDate":"5.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9935","exchangeRateDate":"6.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9946","exchangeRateDate":"7.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0439","exchangeRateDate":"8.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0075","exchangeRateDate":"9.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9766","exchangeRateDate":"10.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9766","exchangeRateDate":"11.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9766","exchangeRateDate":"12.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0667","exchangeRateDate":"13.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0893","exchangeRateDate":"14.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0407","exchangeRateDate":"15.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"14,0533","exchangeRateDate":"16.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9229","exchangeRateDate":"17.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9229","exchangeRateDate":"18.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9229","exchangeRateDate":"19.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9768","exchangeRateDate":"20.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9729","exchangeRateDate":"21.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8946","exchangeRateDate":"22.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,9158","exchangeRateDate":"23.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8789","exchangeRateDate":"24.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8789","exchangeRateDate":"25.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8789","exchangeRateDate":"26.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8499","exchangeRateDate":"27.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8710","exchangeRateDate":"28.02.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8511","exchangeRateDate":"1.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8399","exchangeRateDate":"2.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8803","exchangeRateDate":"3.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8803","exchangeRateDate":"4.03.2023 00:00:00"},{"exchangeRateName":"CAD","exchangePrice":"13,8803","exchangeRateDate":"5.03.2023 00:00:00"}],"highsOfLastMonth":[{"exchangeRateName":"USD","exchangePrice":"2.03.2023","exchangeRateDate":"18,8670"},{"exchangeRateName":"EUR","exchangePrice":"3.02.2023","exchangeRateDate":"20,5163"},{"exchangeRateName":"GBP","exchangePrice":"3.02.2023","exchangeRateDate":"22,9476"},{"exchangeRateName":"CAD","exchangePrice":"14.02.2023","exchangeRateDate":"14,0893"}]}`);

//	const mappedExchangeRateData = jsonData.highsOfLastMonth.map(function (rate) {
//		//return `Exchange rate name: ${rate.exchangeRateName}, Exchange price: ${rate.exchangePrice}, Exchange rate date: ${rate.exchangeRateDate}`;

//		//console.log(`Exchange rate name: ${rate.exchangeRateName}, Exchange price: ${rate.exchangePrice}, Exchange rate date: ${rate.exchangeRateDate}`);
//		data += `, ["${rate.exchangeRateDate}", "${rate.exchangeRateName}", ${rate.exchangePrice}]`;

//	});

//	data += "];";

//    console.log(data);
	
//	const parsedData = JSON.parse(`[${data}]`);
//	console.log(parsedData);		

//	google.charts.load('current', { 'packages': ['corechart'] });
///*	google.charts.setOnLoadCallback(drawChart);	*/

//	var data = google.visualization.arrayToDataTable(parsedData);

//	var options = {
//		title: 'Exchange Rates',
//		curveType: 'function',
//		legend: { position: 'bottom' }
//    };

//	var chart = new google.visualization.LineChart(document.getElementById('resultCharts'));
//	chart.draw(data, options);

//	$("#resultCharts").html(chart);

//}



 