


var inheritjs = require('../../libs/ineritjs.js');
var model = require('./model.js');

var Child = inheritjs(model.A,model.B);
var obj = new Child(1);
var expected = new model.AB(1);
module.exports = {

	instenceof: function(test){

		test.ok(obj instanceof model.A);
		test.ok(obj instanceof model.B);

		test.done();
	},

	childIntegrity: function(test){
		test.equal(typeof obj.getA, 'function');
		test.equal(typeof obj.getB, 'function');
		test.equal(typeof obj.get, 'function');

		test.done();
	}
}