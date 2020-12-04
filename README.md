# sequence-platform

## TODO for step 1
   **[these comments explain the match to gatemaker for this programming exercise]**

(a) describe a learning book (from the sequence book document),
    which we call here 'interactive educational sequences'.
    **[this detailed explanation is necessary to make it as clear
    to the reader of this document as the 'known idea' of the gate]**

(b) describe the human environment / context 
    **[to provide equivalence to environment represented by the photo in gatemaker]**

(c) describe how step 0 is starting the transformation of (b) into (a)+(b)

(d) describe with centers

## The goal

A platform for building 'interactive educational sequences',
sufficient to allow the student to train on some of the
ideas presented in Christopher Alexander's four book series
'The Nature of Order'.

## 'Interactive educational sequences'
see (a) above

The kinds of things we want people to see, discover, or learn,
cannot be achieved through the memorizing of sets of symbols.
They must build these new ideas in thei minds, they must try to
use them as a new perspective on situations they previously 
would have dealt with differently.

We will do this by presenting a series of interconnected 'cards'.
These cards are intended to allow the learner to concentrate on
that presentation, whether it is an explanation, and experiment,
an exercise, or something else.

A 'sequence' of 'sets of cards' empowers the learner to allow the idea
to 'unfold' in their mind, through explanation and interaction.

An 'background explanation' card presents images and text that introduce
an idea to keep 'in mind'. It isn't part of an 'exercise'.

An 'exercise explanation' is a card introduces the idea behind the
exercise. This is optional. Some exercises may be helped by this,
and some may not. It is an experimental question.

An 'exercise demonstration' is a set of cards that show someone 
performing the direct exercise. It should be as close as possible
to the situation the person will be in. Again, this is optional.
There may be times when it doesn't help. But this should be
determined experimentally.

An 'exercise' is a set of cards that asks a learner to do something.
The pedagogical intention might be to enlighten, or to train,
or to allow the learner to practice something they saw performed 
in the demonstration.

A 'reflection' is a set of cards that asks the learner to look
at their work, and consider one or more aspects of it.

A 'repeat option' allows the learner to try again, or go back,
or save multiple versions of their work for comparison, etc.

## The webapp

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
