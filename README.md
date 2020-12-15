# sequence-platform

## Preliminary work for step 1

The psychological effect of any authored lesson won't
be apparent until it is authored. Hence we can't know
too much about its structure. So the work done to 
create a characterization of the structure of lessons may
be premature, even though we all think we know what
those will be. In my experience, we need to build
effective X's, pay attention and look for moments 
where we've learned or discovered something about this, 
write about those, and *then* work on characterizations.

But I'll try.

It is my sincere hope that, with the creation of tools emerging from this group,
this kind of effort will NOT just become a multi-layered decomposition 
exercise, but will instead be a deeply-felt collaborative artistic effort, 
one that allows the stakeholders to work together with joy and purpose.

*[the bracketed/italic comments enumerate the analogies to gatemaker for this programming exercise]*

(a) describe a learning book (from our document 'a sequence book'),
    which we call here 'Interactive Educational Sequences'.

*[this detailed explanation is necessary to make it as clear to the reader of this document 
as the 'known idea' of the gate]*

(b) describe the human environment / context 

*[to provide equivalence to environment represented by the photo in gatemaker]*

(c) describe how step 1 is starting the transformation of (b) into (a)+(b)

*[this will be the equivalent of drawing a gate on a photo.]*

(d) describe with centers

*[although describing differentiation and the emergence of latent centers is something
we kept in mind while creating text for gatemaker, we didn't use this terminology.
We knew those would be lessons in themselves. Like those we'll be creating here.]*

## The goal

A platform for building 'interactive educational sequences',
sufficient to allow the student to train on some of the
ideas presented in Christopher Alexander's four book series
'The Nature of Order'.

## some universals
for (a) above

**(presentation and interaction)**
This experience will present and engage, with purpose.

**(reliability, trust, stability)**
This experience will happen safely, in a supportive fashion.

## 'Interactive educational sequences'
for (a) above

The kinds of things we want people to see, discover, or learn,
cannot be achieved through the memorizing of sets of symbols.
They must build these new ideas in their minds, they must try to
use them as a new perspective on situations they previously 
would have dealt with differently.

**(cards)**
We will do this by presenting a series of interconnected 'cards'.
These cards are intended to allow the learner to concentrate on
that presentation, whether it is an explanation, and experiment,
an exercise, or something else.

**(sets of cards)**
The division between 'cards' and 'sets of cards', to effectively
present an idea or allow for discovery or both, depends upon,
effectiveness. If one card will do, fine. It could have a single
dot or word on it, or nothing, or an expensive movie, or an 
interactive exercise. If it works better on a set of cards,
that's what we'll do. There is no number of cards *a priori* to
help the learner to achieve a given goal. 

**(sequence)**
A 'sequence' of 'sets of cards' empowers the learner to allow the idea
to 'unfold' in their mind, through explanation and interaction.
Again, if a 'sequence' is the right way to effectively convey
something, then it's a sequence. There is no necessary technical
connection. Whatever works.

**(background)**
An 'background explanation' card presents images and text that introduce
an idea to keep 'in mind'. It isn't part of an 'exercise'.

**(exercise intro)**
An 'exercise explanation' is a card that 'introduces' the idea behind the
exercise. This is optional. Some exercises may be helped by this,
and some may not. It is an experimental question.

**(exercise demo)**
An 'exercise demonstration' is a set of cards that show someone 
performing the direct exercise. It should be as close as possible
to the situation the person will be in. Again, this is optional.
There may be times when it doesn't help. But this should be
determined experimentally.

**(exercise interaction)**
An 'exercise' is a set of cards that asks a learner to do something.
The pedagogical intention might be to enlighten, or to train,
or to allow the learner to practice something they saw performed 
in the demonstration.

**(exercise reflection)**
A 'reflection' is a set of cards that asks the learner to look
at their work, and consider one or more aspects of it.

**(exercise retry)**
A 'repeat option' allows the learner to try again, or go back,
or save multiple versions of their work for comparison, etc.

## The webapp
for (b) above

We've decided to present this 'interactive educational sequence'
to the learner as a web application.

This means that it runs in a web browser, no matter the device on which it is used.

So Web browsers, and programming within one, are an environment that we will need
to harmonize with.

But what exectly is this environment? What are its salient aspects, those with which we need to harmonize?

**(collaboration)**
It must be possible to build this webapp with multiple people

**(central description)**
Whatever the webapp within this environment is, it needs to be defined.

**(viewport)**
The user primary interacts with our cards through the actual viewport, which represents the area in which activity takes place.

The virtual page, or virtual working area, can extend beyond the viewport.

**(interaction)**
Outside of the viewport, the user can interact with a browser's back, forward, and refresh buttons, which have a narrow range of expected behavior.

There are also key mappings, such as for arrows, that can be assigned a somewhat wider range of behaviors.

The mouse or clickpad or touchscreen affords an even wider range of behaviors, which are acceptable depending upon what is visiable
in the viewport at that moment.

**(presentation)**

**(change, inertia, persistence)**
I mean these in the psychological sense: these are things that appear to happen in a browser.

**(client-server interaction)**

**(client events, server rest api)**

**(dom, javascript, css, server-side language)**

## The approach

We'll try to build this application *as* a good sequence.

This isn't the order we build it, although we'll try to get that right,
but the order we think it should be built, corrected as we go, reflected
in the structure of centers in the application.

## The steps
for (c) above

### step 1

The application consists of the following aspects, which will
be further differentiated and integrated in subsequent steps.

These all must happen in parallel, in order to create a working
first end-to-end step.

#### user experience

The first differentiation of this would need to be simple.
Perhaps HTML element tests: cards, buttons, text, field.

* From a (set of cards)(cards)
* From b (viewport)(interaction)
* In code, see "main_page" json structure.

#### internal structure

Some description of the application (JSON or YAML) that drives
its entire operation, which is comprehensible, coherent, and good.

* From a (sequence)
* From b (central description)
* In code, see "THE ESSENCE"

#### client environment

We need a central handler and event queue (cheq) to allow browsers
to operate properly.

We need this cheq to read and execute features driven by the 
'internal structure' described above.

We need to process that essence description by routing each
event to a feature implementation.

* From a (presentation and interaction)
* From b (interaction)(change, inertia, persistence)(client events)
* In code, see "EVENT QUEUE", "CENTRAL HANDLER", "INIT", "PROCESS", "FEATURES", and "PROPERTY ROUTER"

#### persistence (or server environment)

For now, we'll store in javascript the test data we have separated,
because we think it should persist, be changeable through CRUD cycles, 
and be kept on the server.

* From a (reliability,trust,stability)
* From b (persistence)(server rest api)
* In code, see "STORAGE OF USER DATA" pre-stub.

#### collboration-ability

* From a (human environment)
* From b (collaboration)
* In code, see "OTHER ESSENCES" and "INIT" and "second_example".


### step 2

