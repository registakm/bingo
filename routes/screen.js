	var orderList = [];
	var index = 0;
	// var self = this;
	var reachList = [];
	var bingoList = [];
	var NUMBER_MAX = 75;

	var _ = require('underscore');
	// var redis = require('redis')
	// 	,client = redis.createClient();

	//初期化
	exports.init = function() {
		index = 0;
		orderList = [];
		reachList = [];
		bingoList = [];
		for (var i = 0; i < NUMBER_MAX + 1; i++) {
			orderList.push(i);
		}
		orderList = _.shuffle(orderList);
		// client.set('orderList', orderList, function(err){
		// 	if(err){
		// 		console.log(err);
		// 	}
		// })
	};

	//次の値を取得
	exports.next = function(){
		// client.get('orderList', function(err, data){
		// 	if(err){
		// 		console.log(err);
		// 	} else {
		// 		console.log(data)
		// 	}
		//});
		if (index < NUMBER_MAX + 1) {
			return orderList[index++];
		}
		return null;
	};

	//もうでた値かチェック
	exports.check = function(num) {
		var tmpNum = _.indexOf(orderList, num);
		return tmpNum != -1 && tmpNum <= index;
	};

	exports.getReachList = function() {
		return reachList;
	}

	exports.getBingoList = function() {
		return bingoList;
	};

	exports.addReachList = function(name) {
		var tmpNum = _.indexOf(reachList, name);
		if(tmpNum == -1){
			reachList.push(name);
			return true;
		}
		return false;
	};

	exports.addBingoList = function(name) {
		var tmpNum = _.indexOf(bingoList, name);
		if(tmpNum == -1){
			bingoList.push(name);
			_.without(reachList, name);
			return true;
		}
		return false;
	};