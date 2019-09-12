---
layout: archive
title: ITP Week 1
---

On September 3, 2019 I started graduate school in the [Interactive Telecommunications Program](http://itp.nyu.edu) (ITP) at New York University (NYU). I will be documenting my progress throughout the program on this blog. This week's blog post includes updates and assignments from the introductory courses to Physical Computing, Fabrication and Computational Media.

### Physical Computing
For Physical Computing taught by Danny Rozin, we were assigned the first two chapters of the [Art of Interactive Design](http://proxy.library.nyu.edu/sso/skillport?context=4587) by Chris Crawford and "[A Brief Rant on the Future of Interaction Design](http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/)" by Bret Victor to read. 

In the first chapter, Crawford defined **interactivity** as "a cyclic proceess in which two actors alternately listen, think and speak." In other words, interactivity is a conversation. This definition is ambigous partly because we don't have a clear understanding of what interactivity is and interactivity itself is a more nuanced subject that can't be reduced to a singular definition. However, Crawford also suggested that definitons are good guidelines for understanding. Back to the idea of interactivity as conversation, Crawford defined conversation as something that "cycles back and forth, as an iterative process in which each participant in turn listens, thinks, and speaks." Simply, conversation is an interactive process for human interaction. If we are to map the conversational definition to a computational definition, it would look like the following: **listen, think, speak <-> input, process, output**

Because "it takes two people to have a conversation, and it takes two actors to have an interaction," there are different degrees of interactivity applied to the conversation concept:
1. Listening
	1. If you want to have a good conversation, you have to listen well, and so does your partner.
2. Thinking
	2. Both actors think well.
3.  Speaking
	3. Both actors need to speak well and understand each other's language and vocabulary.

*Note: Doing a good job with one of the aforementioned three does not compensate for a bad job with the other two*.

Aside from strongly disliking Crawford's diction, voice and tone of writing—which tend to be mired in condescension, arrogance and general mainsplaining, he makes valid points and analogies which demystify what interaction is. For example:
1. Reading a book isn't an interaction. The emotional engagement one experiences when reading a book, and to the active state of the reader’s mind while reading between the lines and interpreting meaning is a *reaction*. 
	1. "There exists no continuum with reaction at one point on the continuum and interaction somewhere else. Interaction and reaction are apples and oranges, horses of different colors, tigers of different stripes. A stronger and stronger reaction does not transcend its nature and become an interaction." 

----

In the second chapter, Crawford argued that (automated) interactivity is important because it's a "new" and "revolutionary" medium of communication that is "superior" to conventional forms of one-way communication. The following are some of Crawford's arguments and justifications:
- Human-to-human conversations are driven by the differences in knowledge or opinion of the conversers. While such differences may seem huge, they pale in comparison to the difference between human and computer, because the computer’s thought processes are stupendously different from a human’s. We can grasp emotional situations that a computer could never comprehend; the computer can multiply two numbers faster than we can read them.
- "Interactivity engages the human mind more powerfully than any other form of expression. When we truly interact with someone or something, we are truly engaged. Active, direct involvement always demands greater attention than passive observation."
- Interactivity is the basis of the computer's competetive advantage. "People claim that the computer’s true essence lies in its ability to crunch numbers, or handle mountains of information. While these are desirable features, they don’t lie at the core of what makes the computer so important to our civilization. Remember, we had plenty of number-crunching and data-cubbyholing computers in the 1960s and 1970s, but we don’t talk about “the computer revolution” until the 1980s. The revolutionary new element was interactivity."

I'm not 100% sure if I'm completely sold on Crawford's understanding of interaction from a philosophical standpoint, but the thought experiement will be useful in my focus in physical computation and fabrication at ITP.

----

I took away the following from Bret Victor's rant: 
1. Current prototypes for "future" screens aren't actually visionary and instead reinforce the status quo.
2. If we are to create better prototypes, we first need to understand what **tools** are.
	2. A **tool** addresses human needs by amplifying human capabilities. In other words, tools convert what we _can_ do into what we want to do.
3. If a tool isn't designed to be used by a person, it can't be a good tool.
4. Most tools incorporate the use of hands and involve tactile feedback to one or more of our senses.
	4. I think the dominance of hand-centered tools is ableist and we should interrogate this more.
	4. The problem with screen technology is that it most often lacks tactile feedback.
5. Screens aren't expressive because they limit interactions to basic gestures like sliding, while there are many more interactions that we are capable of in the natural world.

### Fabrication
We learned how to drill holls and screws in the first Fabrication class from Mark Kleback. For homework we were to build a flashlight. Based on the new skills I learned, I made a flashlight comprised of a wooden cylinder with five holes drilled in it. 
![Image description: My hand holding up the flashlight.](/assets/img/blog/itp-week1/itp_week1_flashlight1.jpg)
>My hand holding up the flashlight.

To make the cylinder I had to use a hole saw drill bit attached to the drill press. It was very hard (!!!) and also my first time using the drill press _immediately_ after a safety training! Drilling the other 5 holes was much easier after that. 

![Image description: Close up shot of the leds and string.](/assets/img/blog/itp-week1/itp_week1_flashlight3.jpg)
>Close up shot of the LEDs and string.

Four of the five holes are attached to string woven with conductive thread which have leds and resistors connected in parallel to form the flashlight. It's not finished, but it's a cute prototype.

![Image description: My sketch and schematic of the flashlight drawn in my notebook.](/assets/img/blog/itp-week1/itp_week1_flashlight2.jpg)
> My sketch and schematic of the flashlight drawn in my notebook.

![Image description: All the components laid out in the process of making the flashlight including purple and orange string, grey conductive thread, yellow leds, resistors, my initial cardboard prototype and the wooden prototype halfway done.](/assets/img/blog/itp-week1/itp_week1_flashlight4.jpg)
>  All the components laid out in the process of making the flashlight including purple and orange string, grey conductive thread, yellow LEDs, resistors, my initial cardboard prototype and the wooden prototype halfway done.

### Computational Media
In Introduction to Computational Media (ICM), Cassie Tarakajian introduced us to [p5.js](https://p5js.org), a creative coding javascript library which we will be learning how to use and code with this semester. For homework, we were first supposed to create our own screen drawing using 2d shapes like `arc()`, `curve()` or `ellipse()`. I made an effort to recreate the design of a book cover I really like titled "[AVERROES and the Metaphysics of Causation](https://www.sunypress.edu/p-42-averroes-and-the-metaphysics-of.aspx)" by Barry S. Kogan. You can view my live sketch [here](https://editor.p5js.org/netanoir/sketches/jZkn1whY6) or below.

![Image description: Screenshot of my sketch.](/assets/img/blog/itp-week1/itp_week1_sketch.png)
>Screenshot of my sketch.


Second, we're supposed to write about how computation applies to our interests. I'm interested in using computation from a cybernetics perspective, where learning about (computational) systems will not only help me better understand how to dismantle them, but to create better ones in place. It is my goal to apply my learning in this area to the organizing work I do for abolition with organizations like No New Jails and Survived and Punished.







