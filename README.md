# sequence-platform

## TODO for step 1: 

(a) describe a learning book (from the sequence book document) 
   [a detailed explanation for equilvalence to the 'known idea' of the gate]

(b) describe the human environment / context 
   [to provide equivalence to environment represented by the photo in gatemaker]

(c) describe how step 0 is starting the transformation of (b) into (a)+(b)

(d) describe with centers

## The goal

A platform for building interactive educational sequences,
sufficient to allow the student to train on some of the
ideas presented in Christopher Alexander's four book series
'The Nature of Order'.

## The approach

We'll try to build this application *as* a good sequence.

This isn't the order we build it, although we'll try to get that right,
but the order we think it should be built, corrected as we go, reflected
in the structure of centers in the application.

## The steps

### step 1

The application consists of the following aspects, which will
be further differentiated and integrated in subsequent steps.

These all must happen in parallel, in order to create a working
first end-to-end step.

#### user experience

The first differentiation of this would need to be simple.
Perhaps HTML element tests: cards, buttons, text, field.

#### internal structure

Some description of the application (JSON or YAML) that drives
its entire operation, which is comprehensible, coherent, and good.

See "THE ESSENCE"

#### client environment

We need a central handler and event queue (cheq) to allow browsers
to operate properly.

We need this cheq to read and execute features driven by the 
'internal structure' described above.

See "EVENT QUEUE" and "CENTRAL HANDLER" and "INIT" and "PROCESS"

#### persistence (or server environment)

For now, we'll store in javascript the test data we have separated,
because we think it should persist, be changeable through CRUD cycles, 
and be kept on the server.

### step 2
