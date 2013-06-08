




(function(){

	function ineritjs(parent, constructor, prototype){
		"use strict";

		constructor.prototype.__proto__ = new parent;

		return function(){
			this.__proto__ = constructor.prototype;
			this.constructor = constructor;

			parent.apply(this, arguments);
			constructor.apply(this,arguments);
		}
	};

	if( typeof module == "object" && typeof module.exports == "object" ){
		module.exports = ineritjs;
	} else if( typeof window == "object" ) {
		window.inherit = ineritjs;
	}

})();
