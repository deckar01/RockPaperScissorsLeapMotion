var RPSLM = function(){
	
	this.listener = new Leap.Listener();
	
	var me = this;
	this.listener.onFrame = function(controller){ me._onFrame(controller); };
	
	this.controller = new Leap.Controller("ws://localhost:6437/");
	this.controller.addListener(this.listener);
	
	this.elem = document.createElement("div");
	document.body.appendChild(this.elem);
};

RPSLM.prototype = {
	
	_onFrame : function(controller) {
		
		this.elem.innerHTML = "";
		
		var hands = controller.frame().hands();
		for(var i=0; i < hands.count(); i++){
		
			var fingers = hands[i].fingers().count();
			
			if(fingers < 2) this.elem.innerHTML += "<img src='./rock.jpg'></img>";
			else if(fingers > 3) this.elem.innerHTML += "<img src='./paper.jpg'></img>";
			else this.elem.innerHTML += "<img src='./scissors.jpg'></img>";
		}
	},
	
	_onConnect : function(controller) {
		
	}
}