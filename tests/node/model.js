
module.exports = {
	A: function A(x){
		var a = x;

		this.getA = function(){
			return a;
		};

		this.get = function(){
			return a;
		};
	},
	B: function B(x){
		var b = x*2;

		this.getB = function(){
			return b;
		}

		this.get = function(){
			return b;
		};
	},

	AB: function(x){
		var a = x;
		var b = x*2;

		this.getA = function(){
			return a;
		};

		this.getB = function(){
			return b;
		};

		this.get = function(){
			return b;
		};
	}
};
