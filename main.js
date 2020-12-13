
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
    // put into element 'body'
    process(start);
}

// ***************************************************************
// PROCESS
//
// process the NEXT item in the ESSENCE
//

function process(obj) {

    // ITERATE THROUGH THE FEATURES HERE

    if (obj["feature"] == "set_of_cards") {
       f_element(obj);
       f_set_of_cards(obj);
    }

    if (obj["feature"] == "card") {
       f_element(obj);
       f_card(obj);
    }

    if (obj["feature"] == "button") {
       f_element(obj);
       f_button(obj);
    }

    if (obj["feature"] == "text") {
       f_element(obj);
       f_text(obj);
    }

    if (obj["feature"] == "image") {
	var n_div = document.createElement('img');
	document.getElementById(obj["target_id"]).appendChild(n_div);
	n_div.className = obj["feature"];
	n_div.innerHTML = obj["content"];
	n_div.id = obj["id"];
	n_div.src = obj["src"];
    }

    if (obj["feature"] == "redefine") {
	n_div = document.getElementById(obj["id"]);
 	n_div.innerHTML = obj["content"];
	if ("switch_click" in obj) {
	    n_div.onclick = n_div.ontouch = function(event) {
		var cards = document.getElementsByClassName("card");
		for (var i = 0; i < cards.length; i ++) {
		    cards[i].style.display = 'none';
		}     
		document.getElementById(obj["switch_click"]).style.display = "block";
	    }    
	}
    }

    // CALL PROCESS ON ANY JSON ARRAY
    if (Array.isArray(obj)) {
       for (var x of obj) {
           process (x);
       }
    }
}

// ***************************************************************
// FEATURES
//

function f_element(obj) {
 var n_div = document.createElement('div');
 document.getElementById(obj["target_id"]).appendChild(n_div);
 n_div.className = obj["feature"];
 n_div.innerHTML = obj["content"];
 n_div.id = obj["id"];
 if ("start" in obj) {
     if (obj["start"] == "hidden") {
	 n_div.style.display = "none";
     }
 }
 if ("switch_click" in obj) {
     n_div.onclick = n_div.ontouch = function(event) {
	 var cards = document.getElementsByClassName("card");
	 for (var i = 0; i < cards.length; i ++) {
	     cards[i].style.display = 'none';
	 }     
	 document.getElementById(obj["switch_click"]).style.display = "block";
     }
 }
 if ("click_process" in obj) {
     n_div.onclick = n_div.ontouch = function(event) {
	 process(window[obj["click_process"]]);
     }
 }
}

function f_set_of_cards(obj) {
//
}

function f_card(obj) {
//
}

function f_button(obj) {
//
}

function f_text(obj) {
//
}


// ***************************************************************
// THE ESSENCE or CENTRAL APPLICATION DESCRIPTION
//
// The ESSENCE, or configuration
// AKA The application definition
// (a kind of option-oriented programming)
//

var start = [
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
	 "start":"hidden"
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

    var load_the_photo = [
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
	       ];


// ***************************************************************
// Storage of user actions
//
// A pre-stub. When the user does something, we will store it here.
// and eventually put it on the server.
//
