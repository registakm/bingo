(function (w){
	
	var w = window;
	var api = 'http://localhost:3000';
	w.tag = $.tag;
	w.log = $.log;

	// $('body').css({height: 1000 + 'px'}); // set dummy height
	// window.scrollTo(0, 1);
	// var v = $.viewport().window;
	// $('body').css({width: v.width + 'px', height: v.height + 'px'});

	//model
	function _screenModel () {
	};
	_screenModel.prototype = {
		getNum: function (requestHandler) {
			http.get( api + '/next').on(requestHandler);
		},
		getStatus: function (requestHandler) {
			http.get(api + '/status').on(requestHandler);
		}
	}

	var _screenModel = new _screenModel();

	_screenModel.getNum({
		complete: function (res) {
			var data = JSON.parse(res);
			screenView.numSet(data);
		}
	});
	_screenModel.getStatus({
		complete: function (res) {
			var dataArray = JSON.parse(res);
			// screenView.getStatus(dataArray);
		}
	});

	function screenView () {};
	screenView.prototype = {
		numSet: function (data) {
			var dataArray;
			var number = data.number;
			var preNum = data.preNumber;
			var header = tag('div.screen')
								.tag('header.header_ara')
									.tag('h1.title')
										.text("Let\'s enjoy Bingo")
									.gat()
								.gat()

			var main = tag('div.main_area')
							// .tag('div.btn pull')
							// 	.tag('button.start_btn').text('pull').gat()
							// 	.on('touchstart', function() {
							// 		$(this).cls({'tap': 1});
							// 	})
							// 	.on('touchend', function() {
							// 		$(this).cls({'tap': -1});
							// 	})
							// .gat()
							.tag('div.number')
								.text(number)
							.gat();

			// var side = tag('div.side_area')
			// 			.tag('div.reach_num_content')
			// 				.tag('h2')
			// 					.text('- REACH -')
			// 				.gat()
			// 				.tag('p.reach_number_of')
			// 					.tag('span.num').text('1').gat()
			// 					.tag('span.person').text('人').gat()
			// 				.gat()
			// 			.gat()
			// 			.tag('div.reach_name_content')
			// 				.tag('ul')
			// 					.tag('li')
			// 						.exec(function () {
			// 							debugger;
			// 						})
			// 						.text('a')
			// 					.gat()
			// 				.gat()
			// 			.gat()

			var bottom = tag('div.bottom_area')
							.tag('p')
								.tag('span.pre')
									.text('Previous Number')
								.gat()
								.exec(function () {
									var that = this;
									if(preNum) {
										for (var i = 0; i < preNum.length; i++) {
											that
											.tag('span.prenum')
												.text(preNum[i])
											.gat()
										}
									}
								})
							.gat()

			$('.screen')
				.append(header)
				.append(main)
				// .append(side)
				.append(bottom);
		},
		getStatus: function (dataArray) {
			console.log(dataArray);
		}
	}
	var screenView = new screenView();

})(window);