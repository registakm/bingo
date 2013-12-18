var _ = require('underscore');
var card = [];
	//カード生成
	exports.init = function () {
		var MTRIX = 5;
		var RANGE = 15;
		var CENTER = [2, 2];

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
		for(var i= 0;i<5;i++){
			tmp = [];
			for(var j = 0; j< 5;j++){
				tmp.push(card[j][i])
			}
			tmpCard.push(tmp);
		}
		card = tmpCard;

		card [2][2] = null;

		return card;
	}
	//ビンゴorリーチをクライアントに返す
	exports.check = function(boolCard){

		boolCard[2][2] = 1;
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