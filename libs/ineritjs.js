/*
 * InheritJS
 * https://github.com/Techniv/inheritjs
 *
 * Released under the MIT License.
 * https://github.com/Techniv/inheritjs/LICENSE
 */




(function(){
	/**
	 * @param parent The parent constructor.
	 * @param constructor The child constructor.
	 * @param prototype The child prototype. [not implement yet]
	 * @returns {Function} The inherit constructor.
	 */
	function ineritjs(parent, constructor, prototype){
		//TODO external prototype.
		constructor.prototype.__proto__ = new parent;

		return function(){
			this.__proto__ = constructor.prototype;
			this.constructor = constructor;

			parent.apply(this, arguments);
			constructor.apply(this,arguments);
		}
	};


	// Exporting module.
	if( typeof module == "object" && typeof module.exports == "object" ){
		module.exports = ineritjs;
	} else if( typeof window == "object" ) {
		window.inherit = ineritjs;
	}

})();
