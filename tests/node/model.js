
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

module.exports.A.prototype.do = function(){
	return 'A';
};
module.exports.B.prototype.do = function(){
	return 'B';
};
module.exports.A.prototype.doA = function(){
	return 'A';
};
module.exports.B.prototype.doB = function(){
	return 'B';
};
module.exports.AB.prototype.do = function(){
	return 'B';
};
module.exports.AB.prototype.doA = function(){
	return 'A';
};
module.exports.AB.prototype.doB = function(){
	return 'B';
};