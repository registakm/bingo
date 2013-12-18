$.ready(function (){
	var w = window;
	var api = 'http://localhost:3000';
	w.tag = $.tag;
	w.log = $.log;


	//model
	function _cardModel () {};
	_cardModel.prototype = {
		getNum: function (requestHandler) {
			http.get( api + '/card').on(requestHandler)
		}
	}
	var _cardModel = new _cardModel();

	_cardModel.getNum({
		complete: function (res) {
			var data = JSON.parse(res);
			console.log(data);
		}
	});
});