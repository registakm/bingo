$.ready(function (){
	var w = window;
	var api = 'http://localhost:3000';
	w.tag = $.tag;
	w.log = $.log;


	//model
	function _bingoModel () {};
	_bingoModel.prototype = {
		getNum: function (requestHandler) {
			http.get( api + '/next').on(requestHandler);
		}
	}
	var _bingoModel = new _bingoModel();

	_bingoModel.getNum({
		complete: function (res) {
			var data = JSON.parse(res);
			console.log(data.number);
		}
	});
});