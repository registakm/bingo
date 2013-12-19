var _ = require('underscore');
	//カード生成
	exports.login = function (req, res) {
		var name = req.param('name');
		req.session.name = name;
		res.redirect('/')
	}
	exports.getCard = function (req) {
		var card = [];
		var MTRIX = 5;
		var RANGE = 15;

		if(req.session.card) {
			return req.session.card;
		}

		for(var j = 0; j < MTRIX ;j++){
			var tmp = [];
			var tmp2 = [];
			for(var i = 1; i < 16;i++){
				tmp.push(i + 15 * j);
			}
			tmp = _.shuffle(tmp);
			for (var i = 0; i < MTRIX; i++){
				tmp2.push(tmp[i])
			}
			card.push(tmp2);
		}

		var tmpCard = [];
		for(var i = 0;i < MTRIX;i++){
			tmp = [];
			for(var j = 0; j< 5;j++){
				tmp.push(card[j][i])
			}
			tmpCard.push(tmp);
		}
		card = tmpCard;

		card [2][2] = null;

		req.session.card = card;

		return card;
	}
	//ビンゴorリーチをクライアントに返す
	exports.check = function(card){

		var boolCard  = [];
		console.log(card);
		for (var i = 0;i < 5; i++) {
			var tmpCard = [];
			for(var j = 0; j < 5; j++){
				tmpCard.push(require('./screen').check(card[i][j]) ? 1: 0);
			}
			boolCard.push(tmpCard);
		}
		boolCard[2][2] = 1;
		console.log(boolCard);

		//line
		for (var i = 0;i < 5; i++) {
			var cnt = 0;
			for(var j = 0; j < 5; j++){
				cnt += boolCard[i][j];
			} if (cnt === 5) {
				return 'BINGO';
			} else if (cnt === 4) {
				return 'REACH';
			}
		}
		//row
		for (var i = 0; i < 5;i++) {
			var cnt = 0;
			for (var j = 0; j < 5; j++) {
				cnt += boolCard[j][i];
			} if(cnt === 5) {
				return 'BINGO';
			} else if (cnt === 4 ) {
				return 'REACH';
			}
		}
		//right tilt
		for (var i = 0; i < 5;i++) {
			var cnt = 0;
			cnt += boolCard[i][i];
			if (cnt === 5) {
				return 'BINGO';
			} else if (cnt === 4) {
				return 'REACH';
			}
		}
		//left tilt
		for (var i = 0, j = 4 ;i < 5; i++, j--){
			var cnt = 0;
			cnt += boolCard[i][j];
			if (cnt === 5) {
				return 'BINGO';
			} else if (cnt === 4) {
				return 'REACH';
			}
		}
		return 'NONE';
	}
