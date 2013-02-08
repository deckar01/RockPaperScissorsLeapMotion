var RPSLM = function(){
	
	var me = this;
	
	this.controller = new Leap.Controller("ws://localhost:6437/");
	this.animLoop = new Leap.AnimLoop(this.controller, function(controller){ me._onAnim(controller); });
	
	this.elem = document.createElement("div");
	document.body.appendChild(this.elem);
};

RPSLM.prototype = {
	
	_onAnim : function(controller) {
		
		this.elem.innerHTML = "";
		
		var hands = controller.frame().hands();
		hands.sort(function(a,b){ return a.palmPosition().x - b.palmPosition().x; });
		
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