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

var chaq =
    [
     card(1,2),
     card(2,3),
     card(3,4),
     card(4,5),
     card(5,6),
     card(6,7),
     card(7,8),
     card(8,9),
     card(9,1)
    ];

var animation1 = [
     {
	 "feature":"redefine",
	 "target_id":"square",
	 "id":"square",
	 "animation_move":"5",
	 "animation_delay":"5"
     }
		  ];

function card(number,next) {
    return window["card"+number](number,next);
}

function card1(n1,n2) {
    return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ"
	 //,"switch_click":"card1a"
     },
     {
         "feature":"text",
	 "id":"subcard1",
         "target_id":"card"+n1,
         "content":""
     },
     {
         "feature":"text",
	 "id":"subcard2",
         "target_id":"subcard1",
         "content":""
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"subcard2",
         "content":
	 ` There are lots of ways to build
	 a web application. <br><br>
	 But, let's unfold the one you're using right now, 
	 by finding simple, significant, and revealing patterns, in order of use, 
	 that can be used universally in all webapps.
	 `
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text4",
         "target_id":"subcard2",
         "content":"Central Handler / Action Queue "
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"subcard2",
         "content":
	 ` 
             (1) every webapp needs to: 
	     <br><br>(a) HARMONIZE with its ENVIRONMENT,
	     that is, the browser ... <br><br>
	     (b) and ensure a central point of origin for all its actions. <br><br>
								  One solution is:
`
     },
     {
	 "feature":"image",
	 "target_id":"subcard1",
	 "id":"diagram",
	     //"src":"img/diagram4.png"
	 "src":"chaq1.png"
     },
     /*
     {
	 "feature":"animation_setup",
	 "target_id":"subcard1",
	 "id":"square",
	 "animation_name":"animation1"
     },
     */
     {
         "feature":"text",
	 "id":"card"+n1+"_text2",
         "target_id":"card"+n1,
         "content":" A queue of actions processed "+
	 "by a central handler."
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text3",
         "target_id":"card"+n1,
         "content":" Any webapp must return control to the browser "+
	 "after asking it to do something. Many frameworks hide this from you. " +
	 "But the result is often the same: unnecessary and confusing scattering "+
	     "of control flow among listeners and setTimeouts. "+
	     "A central origin for all action begins solve this problem."
     },
     {
         "feature":"button",
	 "id":"button1",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     },
     {
         "feature":"link",
	 "id":"link1",
         "target_id":"card"+n1,
         "content":"Original site",
	 "href":"https://cheq.rocks"
     }
	    ];

}

function card2(n1,n2) {

  return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ",
	 "init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"card"+n1,
         "content":`
<pre>
    Before you see the central handler, 
    note how it is first called from HTML.


    &lt;html&gt;
    &lt;head&gt;&lt;/head&gt;
    &lt;body id="body" onload="central_handler({'name':'start'});"&gt;
    &lt;/body&gt;
    &lt;/html&gt;
</pre> ` 
     },
     {
         "feature":"button",
	 "id":"button1a",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	  ];
}

function card3(n1,n2) {
    return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ<br>"
	,"init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"card"+n1,
         "content":"This is how it works."
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text2",
         "target_id":"card"+n1,
         "content":
`
<pre>
The 'onload' call from HTML calls the central_handler
with one action name. 

(NB: this could actually be an array of independent 
 action names, which will be performed in a single-threaded 
 manner in current browsers, but future browsers will be 
 able to execute them in parallel.)

 'central_handler' will take that action name,
 and push it on the action queue. It will then
 launch processing on all the actions in its queue.
 So, setTimeout is only issued from one place in
 the entire webapp, and only to process.

 'process' will be explained in a moment. Here's what
 the Central Handler / Action Queue code looks like.

</pre>
`
     },
     /*
     {
	 "feature":"image",
	 "target_id":"card"+n1,
	 "id":"image1",
	 "src":"img/cheq.png"
     },
     */
     {
         "feature":"button",
	 "id":"button2",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	    ];

}

function card4(n1,n2) {

  return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ",
	 "init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"card"+n1,
         "content":`
<pre>
// ***************************************************************
var action_queue = [];
var the_action = null;

// ***************************************************************
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
</pre>	 ` 
     },
     {
         "feature":"button",
	 "id":"button2",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	  ];
}

function card5(n1,n2) {

  return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ",
	 "init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"card"+n1,
         "content":`
	 You may not have noticed this in your development stack because
	 it's hidden from you, in an attempt to simplify your development
         life. <br><br>I believe that, instead, it's good to see the fundamental
	 technology that you are using.
	     `
     },
     {
         "feature":"button",
	 "id":"button4",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	  ];
}

function card6(n1,n2) {

  return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ",
	 "init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"card"+n1,
         "content":`
The essence
	     `
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text2",
         "target_id":"card"+n1,
         "content":`
	     The next idea is the overall structure of the program,
	     stored in one place, kind of like its essence.<br><br>
	     It's a <b>central description</b> of the webapp.<br><br>
             You could do that in many ways. To keep it simple, we'll
	     do it here as native javascript structures: JSON objects.
	     `
     },
     {
         "feature":"button",
	 "id":"button5",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	  ];
}

function card7(n1,n2) {

  return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ",
	 "init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"card"+n1,
         "content":`
<pre>
Here is a central description, or essence:

var start =   [   
     {
         "feature":"card",
	 "id":"card1",
         "target_id":"body",
         "content":"CHAQ"
     },
     {
         "feature":"text",
	 "id":"card1_text1",
         "target_id":"card1",
         "content":"Central Handler / Action Queue "
     }
		  ];
</pre>
	     `
     },
     {
         "feature":"button",
	 "id":"button6",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	  ];
}

function card8(n1,n2) {

  return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ",
	 "init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text1",
         "target_id":"card"+n1,
         "content":`
Cascading Routers
	     `
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text2",
         "target_id":"card"+n1,
         "content":`
<pre>
	     So what is this mysterious function process() that
	     takes an array of json objects and creates a program
	     from it?
	     
	     It\'s a "feature router" which routes features like
	     "cards" and "text", or whatever you like,
	     to an implementation, the most repeated aspects 
	     of which are a combination of independent properties,
	     which are implemented through a "property router".

	     Any implementation of a feature that\'s more 
	     context-dependent, or unique, can be found in the
	     implementation details in either router, which are
	     called in order.
 
</pre>
	     `
     },
     {
         "feature":"button",
	 "id":"button7",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	  ];
}


function card9(n1,n2) {

  return [
     {
         "feature":"card",
	 "id":"card"+n1,
         "target_id":"body",
         "content":"CHAQ",
	 "init_visibility":"hidden"
     },
     {
         "feature":"text",
	 "id":"card"+n1+"_text2",
         "target_id":"card"+n1,
         "content":`
<pre>
function process(obj) {

    // recursive traversal
    if (Array.isArray(obj)) {
	for (var x of obj) {
	    process (x);
	}
	return;
    }

    // A feature router
    if (obj["feature"] == "card") {
	var element = document.createElement('div');
    }
    if (obj["feature"] == "text") {
	var element = document.createElement('div');
    }
    // ...

    obj["element"] = element;
    property_router(obj);
} 
</pre>
	     `
     },
     {
         "feature":"button",
	 "id":"button7",
         "target_id":"card"+n1,
         "content":"NEXT",
	 "switch_click":"card"+n2
     }
	  ];
}


var start = 
    [
     {
         "feature":"card",
	 "id":"simple_card1",
         "target_id":"body",
         "content":"simple_card1"
     },

     {
         "feature":"button",
	 "id":"simple_button1",
         "target_id":"simple_card1",
         "content":"to card2",
	 "switch_click":"simple_card2"
     },
     {
         "feature":"card",
	 "id":"simple_card2",
         "target_id":"body",
         "content":"card2",
	 "init_visibility":"hidden"
     },

     {
         "feature":"button",
	 "id":"simple_button2",
         "target_id":"simple_card2",
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
	 "target_id":"simple_card2",
	 "id":"simple_image1",
	 "src":"chanterelle.jpg"
     },
     {
	 "feature":"redefine",
	 "id":"simple_button2",
	 "content":"to card1",
	 "switch_click":"simple_card1"
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
	 "id":"simple_card1",
         "target_id":"body",
         "content":"simple_card1"
     },

     {
         "feature":"button",
	 "id":"simple_button1",
         "target_id":"simple_card1",
         "content":"to card2",
	 "switch_click":"simple_card2"
     },
     {
         "feature":"card",
	 "id":"simple_card2",
         "target_id":"body",
         "content":"card2",
	 "init_visibility":"hidden"
     },
     {
         "feature":"button",
	 "id":"simple_button2",
         "target_id":"simple_card2",
         "content":"to card3",
	 "switch_click":"simple_card3"
     },
     {
         "feature":"card",
	 "id":"simple_card3",
         "target_id":"body",
         "content":"card3",
	 "init_visibility":"hidden"
     },
     {
         "feature":"button",
	 "id":"simple_button2",
         "target_id":"simple_card3",
         "content":"to card1",
	 "switch_click":"simple_card1"
     }
     ]
    ;
