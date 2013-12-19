// $.ready(function (){
	var api = 'http://localhost:3000';
	// $('body').css({height: 1000 + 'px'}); // set dummy height
	// window.scrollTo(0, 1);
	// var v = $.viewport().window;
	// $('body').css({width: v.width + 'px', height: v.height + 'px'});


	//model
	// function _cardModel () {};
	// 
	// 	getNum: function (requestHandler) {
	// 		http.get( api + '/card').on(requestHandler)
	// 	}
	// }
	// var _cardModel = new _cardModel();

	// _cardModel.getNum({
	// 	complete: function (res) {
	// 		var data = JSON.parse(res);
	// 		cardView.setCard(data)
	// 	}
	// });
	function _cardModel () {};
	_cardModel.prototype = {
		postReach: function (requestHandler) {
			http.post( api + '/reach/:name').on(requestHandler)
		}
	}
	var _cardModel = new _cardModel();
// 	function cardView () {};
// 	cardView.prototype = {
		// entry: function () {
		// 	var header = tag('div.head_content')
		// 					.tag('div.title title_t').text("Let\'s enjoy").gat()
		// 					.tag('div.titie title_b').text('Bingo').gat()
		// 	var form = tag('div.form_content')
		// 					.tag('form').attr({method: 'POST', action: '/'})
		// 						.tag('label')
		// 							.tag('div.form_info')
		// 								.tag('span.name').text('あなたのお名前は？').gat()
		// 								.tag('span.name').text('最大全角10文字').gat()
		// 							.gat()
		// 							.tag('div.input_info')
		// 								.tag('input').attr({type: 'text', name: 'name'}).gat()
		// 									.tag('button.btn').attr({type: 'submit'})
		// 										.tag('span.text').text('START!').gat()
		// 									.gat()
		// 									.on('touchstart', function() {
		// 										$(this).cls({'tap': 1});
		// 									})
		// 									.on('touchend', function() {
		// 										$(this).cls({'tap': -1});
		// 									})
		// 									.tap(function() {
		// 										if ($('input').get(0).value) {
		// 											$.storage('bingo_name', $('input').get(0).value);
		// 										}
		// 									})
		// 								.gat()
		// 						.gat()
		// 					.gat();
		// 	var footer = tag('div.footer_content')
		// 					.tag('div.logo_footer').gat()
		// 					.tag('aside')
		// 						.tag('span.msg').text('@DEKA Creative year-end Party').gat()
		// 					.gat()

		// 	$('.login')
		// 		.append(header)
		// 		.append(form)
		// 		.append(footer)
		// },
// 		setCard: function (data) {
			// var numTable =  data.table;
			// var header = tag('div.head_content')
			// 				.tag('div.title title_t').text("Let\'s enjoy").gat()
			// 				.tag('div.titie title_b').text("Bingo").gat()
			// var tableContent = tag('div.table_content');
			// var table = tag('table');
			// var toggleData = function(c, data) {
			// 	if (c.data('toggle') === 'on') {
			// 		c.cls({'tap': -1});
			// 		c.data({toggle: 'off'});
			// 		data[c.data('line')][c.data('row')] = 0;
			// 	} else {
			// 		c.cls({'tap': 1});
			// 		c.data({toggle: 'on'});
			// 		data[c.data('line')][c.data('row')] = 1;
			// 	}
			// }
			// for (var i = 0; i< MATRIX; i++) {
			// 	var tr = tag('tr.line');
			// 	for(var j = 0 ; j < MATRIX; j++) {
			// 		var td = tag('td.row');
			// 		if (!numTable[i][j]) {
			// 			td.cls('center')
			// 			tr.append(td);
			// 		} else {
			// 			td
			// 			.tag('span.text').text(numTable[i][j]).gat()
			// 			.tap(function () {
			// 				var target = $(this);
			// 				toggleData(target, numTable);
			// 			})
			// 			tr.append(td);
			// 		}
			// 	}
			// 	table.append(tr);
			// }
			// tableContent.append(table)

			// var _reach = function() {
			// 	var popup = tag('div#overlay')
			// 					.css({background: "rgba(0,0,0,0)"})
			// 					.tap(function() {
			// 						popup.remove();
			// 					})
			// 					.tag('div.reach').gat();

			// 	$('body').append(popup);

			// }
			// var _bingo = function() {
			// 	var popup = tag('div#overlay')
			// 					.css({background: "rgba(0,0,0,0)"})
			// 					.tap(function() {
			// 						popup.remove();
			// 					})
			// 					.tag('div._bingo').gat();

			// 	$('body').append(popup);
			// }
			// // var footer = tag('div.footer_content')
			// // 				.tag('div.logo_footer').gat()
			// // 				.tag('aside')
			// // 					.tag('span.msg').text('@DEKA Creative year-end Party').gat()
			// // 				.gat()
			// $('.bingo')
			// 	.append(header)
			// 	.append(tableContent);
			// 	// .append(footer);
// 		}
// 	}
// 	var cardView = new cardView();
// 	cardView.entry();
// });
(function (w) {

	var array = {
		shuffle: function(data, sliceLength) {
			var list = data.slice(0);
			sliceLength = sliceLength || list.length;
			var i = list.length, imin = i - sliceLength, j, tmp;
			imin = imin < 0 ? 0 : imin;
			while (i > imin) {
				j = Math.floor(Math.random() * i);
				tmp = list[--i];
				list[i] = list[j];
				list[j] = tmp;
			}
			return list.slice(imin);
		},
		sort: function(data) {
			data.sort(function(a, b) {
				return Number(a) - Number(b);
			});
			return data;
		},
		turn: function(data) {
			var storeArray = [];
			for (var i = 0, fLen = data[0].length; i < fLen; i++) {
				storeArray[i] = [];
				for (var j = 0, sLen = data.length; j < sLen; j++) {
					storeArray[i][j] = data[j][i];
				}
			}
			return storeArray;
		},
		clone: function(target) {
			return JSON.parse(JSON.stringify(target));
		}

	};


	var bingo = (function(cls) {
		var MATRIX = 5,
			RANGE = 15,
			CENTER = [2, 2];

		var setUpNumbers = function() {
			var storeArray = [];
			var num = 1;
			for (var i = 0; i < MATRIX; i++) {
				storeArray[i] = [];
				for (var j = 0; j < RANGE; j++) {
					storeArray[i][j] = num;
					num = num + 1;
				}
				storeArray[i] = array.shuffle(storeArray[i], MATRIX);
				storeArray[i] = array.sort(storeArray[i])
			}
			storeArray = array.turn(storeArray);

			$.storage('bingo', storeArray);

			return storeArray;
		};

		var toggleData = function(c, data) {
			if (c.data('toggle') === 'on') {
				c.cls({'tap': -1});
				c.data({toggle: 'off'});
				data[c.data('line')][c.data('row')] = 0;
			} else {
				c.cls({'tap': 1});
				c.data({toggle: 'on'});
				data[c.data('line')][c.data('row')] = 1;
			}
		}

		var judge = function(data) {
			var results = {bingo: 0, reach: 0};
			
			// judge line
			for (var i = 0; i < 5; i++) {
				var count = 0;
				for (var j = 0; j < 5; j++) {
					if (data[i][j] === 1) {
						count = count + 1;
					}
				}
				if (count === 5) {
					results['bingo'] = results['bingo'] + 1;
				} else if (count === 4) {
					results['reach'] = results['reach'] + 1;
				}
			}

			// judge row
			for (var i = 0; i < 5; i++) {
				var count = 0;
				for (var j = 0; j < 5; j++) {
					if (data[j][i] === 1) {
						count = count + 1;
					}
				}
				if (count === 5) {
					results['bingo'] = results['bingo'] + 1;
				} else if (count === 4) {
					results['reach'] = results['reach'] + 1;
				}
			}

			// judge slant from left top to right bottom
			var count = 0;
			for (var i = 0; i < 5; i++) {
				if (data[i][i] === 1) {
					count = count + 1;
				}
			}
			if (count === 5) {
				results['bingo'] = results['bingo'] + 1;
			} else if (count === 4) {
				results['reach'] = results['reach'] + 1;
			}

			// judge slant from right top to left bottom
			var count = 0;
			for (var i = 0, j = 4; i < 5; i++, j--) {
				if (data[i][j] === 1) {
					count = count + 1;
				}
			}
			if (count === 5) {
				results['bingo'] = results['bingo'] + 1;
			} else if (count === 4) {
				results['reach'] = results['reach'] + 1;
			}


			return results;
		};

		// var entry = function() {
		// 	var container = tag('div#overlay').css({width: $('body').bound().width, height: $('body').bound().height});
		// 	var form = 	tag('div.form')
		// 					.tag('label')
		// 						.tag('p.name').text('Please enter your name').gat()
		// 						.tag('input').attr({type: 'text'}).gat()
		// 						.tag('div.btn')
		// 							.tag('span.text').text('START').gat()
		// 						.on('touchstart', function() {
		// 							$(this).cls({'tap': 1});
		// 						})
		// 						.on('touchend', function() {
		// 							$(this).cls({'tap': -1});
		// 						})
		// 						.tap(function() {
		// 							if ($('input').get(0).value) {
		// 								$.storage('bingo_name', $('input').get(0).value);
		// 								container.remove();
		// 							}
		// 						})
		// 						.gat()
		// 					.gat();

		// 	container.append(form);

		// 	$('body').append(container);
		// }

		var _reach = function() {
			var popup = tag('div#overlay')
							.css({background: "rgba(0,0,0,0)"})
							.tag('img', {src:'./images/reach.png', width: '100%'}).gat()
							.tap(function() {
								popup.remove();
							})
							// .tag('div.reach').gat();

			$('body').append(popup);

		}

		var _bingo = function() {
			var popup = tag('div#overlay')
							.css({background: "rgba(0,0,0,0)"})
							.tag('img', {src:'./images/bingo.png', width: '100%'}).gat()
							.tap(function() {
								popup.remove();
							})

			$('body').append(popup);
		}
		cls.init = function () {
			var matrix;
			if ($.storage('bingo')) {
				matrix = $.storage('bingo');
			} else {
				matrix = setUpNumbers();
			}
			var header = tag('div.head_content')
							.tag('div.title title_t').text("LET\'S ENJOY").gat()
							.tag('div.titie title_b').text('BINGO!').gat()
			var form = tag('div.form_content')
							.tag('form')
								.tag('label')
									.tag('div.form_info')
										.tag('span.name').text('あなたのお名前は？').gat()
										.tag('span.name1').text('最大全角10文字').gat()
									.gat()
									.tag('div.input_info')
										.tag('input').attr({type: 'text'}).gat()
											.tag('button.btn')
												.tag('span.text').text('START!').gat()
											.on('touchstart', function() {
												$(this).cls({'tap': 1});
											})
											.on('touchend', function() {
												$(this).cls({'tap': -1});
											})
											.tap(function() {
												if ($('input').get(0).value) {
													$.storage('bingo_name', $('input').get(0).value);
													$('.login').remove();
													bingo.setCard();
												}
											})
											.gat()
										.gat()
								.gat()
							.gat();
			var footer = tag('div.footer_content')
							.tag('div.logo_footer').gat()
							.tag('aside')
								.tag('span.msg').text('@DEKA CREATIVE YEAR-END PARTY').gat()
							.gat()

			$('.login')
				.append(header)
				.append(form)
				.append(footer)
		}
		cls.setCard = function() {
			var matrix;
			if ($.storage('bingo')) {
				matrix = $.storage('bingo');
			} else {
				matrix = setUpNumbers();
			}
			if (!$.storage('bingo_name')) {
				bingo.init();
			}
			var REACH = 0;
			var REACH_NUM = 0;
			var BINGO = 0;
			var dummy = array.clone(matrix);
			var container = tag('div.bingo');
			var header = tag('div.head_content')
							.tag('div.title title_t').text("LET\'S ENJOY").gat()
							.tag('div.titie title_b').text("BINGO!").gat()
			var tableContent = tag('div.table_content');
			var table = tag('table');

			for (var i = 0; i < MATRIX; i++) {
				var tr = tag('tr').cls('line');
				for (var j = 0; j < MATRIX; j++) {
					var td = tag('td').cls('row');
					if (CENTER[0] === i && CENTER[1] === j) {
						td.cls('center');
						dummy[i][j] = 1;
					} else {
						dummy[i][j] = 0;
						td
						.tag('span.text').text(matrix[i][j]).gat()
						.data({num: matrix[i][j], toggle: 'off', line: i, row: j})
						.tap(function() {
							var target = $(this);

							toggleData(target, dummy);

							if (judge(dummy).reach >= 1) {// リーチ
								if (REACH === 0) {
									REACH = 1;
									http.post(api +'/reach/' + $.storage('bingo_name'), function() {});
								}

								if (REACH_NUM < judge(dummy).reach) {
									_reach();
								}

								REACH_NUM = judge(dummy).reach;
							}

							if (judge(dummy).reach === 0 && REACH === 1) {// 押し間違い
								REACH = 0;
								REACH_NUM = 0;
								http.post('http://49.212.193.46/lizhi/unlizhi?name=' + $.storage('bingo_name'), null, function() {});
							}

							if (judge(dummy).bingo >= 1 && BINGO === 0) {// BINGO !!!
								BINGO = 1;
								http.post(api +'/bingo/' + $.storage('bingo_name'), function() {});
								_bingo();
							};

							if (judge(dummy).bingo === 0 && BINGO === 1) {// 押し間違い
								BINGO = 0;
								http.post('http://49.212.193.46/lizhi/lizhi?name=' + $.storage('bingo_name'), null, function() {});
							}
						});
					}
					tr.append(td);
				}
				table.append(tr);
			}
			tableContent
				.append(table);
			// var footer = tag('div.footer_content')
			// 				.tag('aside')
			// 					.tag('span.msg').text('@DEKA CREATIVE YEAR-END PARTY').gat()
			// 				.gat()
			$('#page')
				.append(header)
				.append(tableContent);
		}
		return cls;
	})({});

w.bingo = bingo;
})(window);