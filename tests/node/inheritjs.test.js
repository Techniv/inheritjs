


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
		test.equal(typeof obj.doA, 'function');
		test.equal(typeof obj.doB, 'function');
		test.equal(typeof obj.do, 'function');

		test.done();
	},

	childFonction: function(test){

		test.equal(obj.getA(), expected.getA(), "getA");
		test.equal(obj.getB(), expected.getB(), "getB");
		test.equal(obj.get(), expected.get(), "get");
		test.equal(obj.do(), expected.do(), "do");
		test.equal(obj.doA(), expected.doA(), "doA");
		test.equal(obj.doB(), expected.doB(), "doB");

		test.done();
	}
}