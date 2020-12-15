// ***************************************************************
// main.js of the sequence center
//

// ***************************************************************
// EVENT QUEUE
//

var event_queue = [];
var the_event = null;

// ***************************************************************
// CENTRAL HANDLER:
//
// called by onload and setTimeout

function central_handler () {
    if (!(event_queue.length > 0)) {
      return;
    }
    the_event = event_queue.shift();

    // call event
    window[the_event.name]();

    // only loop until the stack is empty
    if (event_queue.length > 0) {
       setTimeout (function () {
                    central_handler();
                   },
                   the_event.delay);
    }
}

// ***************************************************************
// INIT
// called by body element's onload
//

function init () {
    // start from the JSON structure 'start'
    // (by default, unless query string like:
    // index.html?start)
    var default_start = 'start';
    if (window.location.search != "") {
	default_start = window.location.search.slice(1);
    }
    process(window[default_start]);
}

// ***************************************************************
// PROCESS
//
// 'process' the next list in the ESSENCE
//
// Note that 'process' is a feature router, so:
//

function process(obj) {

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

    // CALL PROCESS ON ANY JSON ARRAY
    // (recursive traversal)
    if (Array.isArray(obj)) {
       for (var x of obj) {
           process (x);
       }
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
    if ("click_process" in obj) {
	element.onclick = element.ontouch = function(event) {
	    process(window[obj["click_process"]]);
	}
    }
}


// ***************************************************************
// THE ESSENCE (or central application description)
//
// The essence or configuration
// or application definition
// or 'option'-oriented programming
// possibly portable ...
// intentionally flexible ...
// intentionally multi-level ...
// hopefully inspiring a beautiful and useful set of features ... 
//

var start = 
    [
     {
         "feature":"card",
	 "id":"card1",
         "target_id":"root",
         "content":"card1"
     },

     {
         "feature":"button",
	 "id":"button1",
         "target_id":"card1",
         "content":"to card2",
	 "switch_click":"card2"
     },
     {
         "feature":"card",
	 "id":"card2",
         "target_id":"root",
         "content":"card2",
	 "init_visibility":"hidden"
     },

     {
         "feature":"button",
	 "id":"button2",
         "target_id":"card2",
         "content":"load photo",
	 "click_process":"load_the_photo"
     }
     ]
    ;

// Note: the following is a process that runs
// after the user has clicked button2 above

var load_the_photo = 
    [
     {
	 "feature":"image",
	 "target_id":"card2",
	 "id":"image1",
	 "src":"chanterelle.jpg"
     },
     {
	 "feature":"redefine",
	 "id":"button2",
	 "content":"to card1",
	 "switch_click":"card1"
     }
     ]
;

// ***************************************************************
// Other Essences (for collaboration)
//
// To use:
// 1. add the comment header above, with your essence name
// 2. add a unique_global_name and json structures
// 3. use with index?unique_global_name
// 4. add/adjust 'process' routing and 'features' as needed
//

var second_example = 
    [
     {
         "feature":"card",
	 "id":"card1",
         "target_id":"root",
         "content":"card1"
     },

     {
         "feature":"button",
	 "id":"button1",
         "target_id":"card1",
         "content":"to card2",
	 "switch_click":"card2"
     },
     {
         "feature":"card",
	 "id":"card2",
         "target_id":"root",
         "content":"card2",
	 "init_visibility":"hidden"
     },
     {
         "feature":"button",
	 "id":"button2",
         "target_id":"card2",
         "content":"to card3",
	 "switch_click":"card3"
     },
     {
         "feature":"card",
	 "id":"card3",
         "target_id":"root",
         "content":"card3",
	 "init_visibility":"hidden"
     },
     {
         "feature":"button",
	 "id":"button2",
         "target_id":"card3",
         "content":"to card1",
	 "switch_click":"card1"
     }
     ]
    ;

// ***************************************************************
// Storage of user data
//
// A pre-stub. When the user changes something, we will store it here.
// and eventually put it on the server. We assume this is desired
// for a sense of stability, not for spying.
//

