// ***************************************************************
// main.js of the sequence center
//

// ***************************************************************
// ACTION QUEUE

var action_queue = [];
var the_action = null;

// ***************************************************************
// CENTRAL HANDLER:
//
// Called from initial onload, and any handler / listener that needs
// to launch some action for processing.
//
// Any action can be found as a global variable name in the 'essence',
// or central description.
//
// The parameter a can be one action, or an array of independent actions.

function central_handler (a) {
    action_queue.push(a);
    while (action_queue.length > 0) {
	the_action = action_queue.shift();
	var delay = 1;
	if ("delay" in the_action) {delay = parseInt(the_action["delay"]);}
	setTimeout(function() {process(window[the_action.name])},delay);
    }
}


// ***************************************************************
// PROCESS
//
// 'process' the next list in the ESSENCE
//
// Note that 'process' is a feature router, so:
//

function process(obj) {

    // recursive traversal
    if (Array.isArray(obj)) {
	for (var x of obj) {
	    process (x);
	}
	return;
    }

    // A feature router
    if (obj["feature"] == "set_of_cards") {
	var element = document.createElement('div');
	obj["element"] = element;
	property_router(obj);
    }

    if (obj["feature"] == "card") {
	var element = document.createElement('div');
	obj["element"] = element;
	property_router(obj);
    }

    if (obj["feature"] == "button") {
	var element = document.createElement('div');
	obj["element"] = element;
	property_router(obj);
    }

    if (obj["feature"] == "link") {
	var element = document.createElement('a');
	obj["element"] = element;
	property_router(obj);
    }

    if (obj["feature"] == "text") {
	var element = document.createElement('div');
	obj["element"] = element;
	property_router(obj);
    }

    if (obj["feature"] == "image") {
	var element = document.createElement('img');
	obj["element"] = element;
	property_router(obj);
    }

    if (obj["feature"] == "redefine") {
	var element  = document.getElementById(obj["id"]);
	obj["element"] = element;
	property_router(obj);
    }

    if (obj["feature"] == "animation_setup") {
	var element = document.createElement('div');
	obj["element"] = element;
	property_router(obj);
    }

}

// ***************************************************************
// PROPERTY ROUTER
//
// All features are built from a composition of properties defined 
// in the ESSENCE.
//
// Most are independent. Those that aren't, will adjust for
// their own context dependencies.
//

function property_router(obj) {
    var element = obj["element"];

    // generally, append element to DOM
    if (!(obj["feature"] == "redefine")) {
	document.getElementById(obj["target_id"]).appendChild(element);
    }
    // generally, element class becomes feature name
    if ("feature" in obj &&
	!(obj["feature"] == "redefine")) {
	element.className = obj["feature"];
    }

    // independent properties
    if ("content" in obj) {
	element.innerHTML = obj["content"];
    }
    if ("id" in obj) {
	element.id = obj["id"];
    }
    if ("src" in obj) {
	element.src = obj["src"];
    }
    if ("href" in obj) {
	element.href = obj["href"];
	element.target = "_blank";
    }
    if ("init_visibility" in obj) {
	if (obj["init_visibility"] == "hidden") {
	    element.style.display = "none";
	}
    }
    if ("switch_click" in obj) {
	element.onclick = element.ontouch = function(event) {
	    var cards = document.getElementsByClassName("card");
	    for (var i = 0; i < cards.length; i ++) {
		cards[i].style.display = 'none';
	    }     
	    document.getElementById(obj["switch_click"]).style.display = "block";
	}
    }
    if ("animation_name" in obj) {
	central_handler({'name':obj["animation_name"],'delay':'100'});
    }
    if ("animation_move" in obj) {
	var tmp1 = element.style.left.replace('px','');
	var tmp2 = 800;
	if (tmp1 != '') {
	    tmp2 = parseInt(tmp1);
	}
	if (tmp2 > 850) {
	    tmp2 = 800;
	}
	element.style.left = tmp2 + 5 + "px" 
	central_handler({'name':'animation1','delay':'100'});
    }
    if ("click_process" in obj) {
	element.onclick = element.ontouch = function(event) {
	    central_handler({'name':obj["click_process"]});
	}
	      // that's ok for onclick
	      // but if we want to carryon some processing after releasing control
	      // we'd need to do a set timeout( eq / ch)
	      // which should be one thing like:
	      // ch(e)

	    //	    process(window[obj["click_process"]]);
	    /*
	      or:
	      push obj["click_process"] onto event queue
	      central handler();
	      or:
	      event_queue.push({'name':obj["click_process"],'delay':0});
	      central_handler();
	    */
    }
}



// ***************************************************************
// Storage of user data
//
// A pre-stub. When the user changes something, we will store it here.
// and eventually put it on the server. We assume this is desired
// for a sense of stability, not for spying.
//

