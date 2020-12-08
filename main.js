
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
    process (start,"body");
}

// ***************************************************************
// PROCESS
//
// process the NEXT item in the ESSENCE
//

function process (obj,target_id) {
    var target_element = document.getElementById(target_id);

    // ITERATE THROUGH THE FEATURES HERE

    if (obj["type"] == "replace_html") {
       f_replace(obj,target_id);
    }

    if (obj["type"] == "set_of_cards") {
       f_element(obj,target_id);
       f_set_of_cards(obj,target_id);
    }

    if (obj["type"] == "card") {
       f_element(obj,target_id);
       f_card(obj,target_id);
    }

    if (obj["type"] == "button") {
       f_element(obj,target_id);
       f_button(obj,target_id);
    }

    if (obj["type"] == "text") {
       f_element(obj,target_id);
       f_text(obj,target_id);
    }

    // CALL PROCESS ON ANY JSON ARRAY
    if (Array.isArray(obj)) {
       for (var x of obj) {
           process (x,target_id);
       }
    }
}

// ***************************************************************
// FEATURES
//

function f_replace(obj, target_id) {
       document.getElementById(obj["id"]).innerHTML = obj["content"];
}

function f_element(obj, target_id) {
 var n_div = document.createElement('div');
 document.getElementById(obj["id"]).appendChild(n_div);
 n_div.className = obj["type"];
}

function f_set_of_cards(obj, target_id) {
//
}

function f_card(obj, target_id) {
//
}

function f_button(obj, target_id) {
//
}

function f_text(obj, target_id) {
//
}


// ***************************************************************
// THE ESSENCE or CENTRAL APPLICATION DESCRIPTION
//
// The ESSENCE, or configuration
// AKA The application definition
// (a kind of option-oriented programming)
//

var start = main_page();

function main_page () {

    var main_page = {
         "type":"replace_html",
         "id":"root",
         "content":"Sequence Center"
    };

    return main_page;
}

// ***************************************************************
// Storage of user actions
//
// A pre-stub. When the user does something, we will store it here.
// and eventyually put it on the server.
//
