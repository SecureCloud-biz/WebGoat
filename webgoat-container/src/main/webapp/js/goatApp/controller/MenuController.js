define(['jquery',
	'underscore',
	'backbone',
	'goatApp/view/MenuView'
	], 
	function($,
		_,
		Backbone,
		MenuView) {
		 Controller = function(options){
		 	_.extend(Controller.prototype,Backbone.Events);
			options = options || {};
			this.menuView = options.menuView;

		 	this.initMenu = function() {
		 		//this.listenTo(this.menuView,'lesson:click',this.renderTitle);
		 	}

		 	this.updateMenu = function(){
		 		this.menuView.updateMenu();
		 	}

		 };

		 return Controller;
});