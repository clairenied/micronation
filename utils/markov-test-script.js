const Markov = require('libmarkov')

let poem = `Because you will fall down the stairs and get rug burn and contract chicken pox and catch a cold and break a glass and smell weird and have greasy hair and have no friends and the tangerines will get moldy and a car will crash in the next county and you’ll ruin the postal system and court the loss of a digit and fail Trigonometry/Algebra 2 and get high off of paint fumes and start an electrical fire and put your eye out and have no television for a month and shatter a window and spontaneously combust and get a deeply unattractive, incurable rash and lose your privileges and sever a worm and disappoint your mother and miss out and lose the soccer game and get wrinkles at a tender age and get ringworm and get lice and get cold sores all at the same time and cry yourself to sleep at night and alter the space-time continuum and then you won’t exist at all. Our kiddie pool doesn’t hold enough water anyway. Stick a limb in there and the volume displacement will dry the whole thing up into a pink plastic desert with rubber ducks for sphinxes. The vinyl slats in the chez lounges are leaving regular red marks on the skin of the backs of my legs and the summer sun is leaving one big red mark on the skin of the fronts of my legs and the first centipede of the season skittered around my apartment, so all around it’s legs. But it’s still summer and it still smells like that vaguely pleasant soggy grass smell that every kiosk at every shopping mall eternally attempts to bottle and sell as an air- or people-freshener. One lettuce leaf is a mountain for aphids, a train set-sized, light green model of californian topography. There is no foliage, only salad (extra foliage would be redundant). Iceberg wedges have veins like big waxy pinky hands but they aren’t blue or red. Don’t pour dressing on any of it, especially not Ranch, (that white, flecked mudslide). All bears are dangerous. The fictional ones,they can do the most harmbecause they fly metallic shellacked spaceships with evenly placed little lights around the rimsso they don’t even need to crawl to follow you up the tree as you hide from them.And they eat spaghettiwhich covers their sticky mouth fur in warm wet tomato. And they have hearing aids in addition to fantastic hearing to begin with so they hear everything especially when you gossip. Notes about this week’s poetry: I had some friends ask me questions and responded to them. When you see a question or prompt as the title, that is where the poem originated. I wrote three poems in forms that privileged sound, and the rest are their own animals. I hope that I interpreted the directions correctly!

Chant:
Are you a hamster?
(Alina Buevich)

The rodent had the softest fur  in the whole world  it must have been synthetic.

I put her in the bathroom because at night she would run 

around and around
it must have been synthetic
 
in her bright blue plastic bubble house 
and the noise was insufferable
around and around

The rodent was purchased with more enthusiasm than a bubble house
it must have been synthetic.Blues for early March

All of those rays, 
have gone back to their homes
and all of those rays
have been ground down to bone.

All of those rays 
smell like stale heat.
That longlong stretch
with knits on our feet.

It’s so bad it’s brisk
it’s so bad it’s brisk,
and the air’s out on its own
Binary fission chant

One bacterium
One bacterium one bacterium
One bacterium one bacterium one bacterium one bacterium one bacterium one bacterium one bacterium one bacterium
everyone’s bacteria 

all over everywhere all over everyone all over the table and the counter 
growing baby microbe metropolises 

one bacterium one bacterium
the closest thing imaginable is sea monkeys
one bacterium one bacterium 

you can’t see them
one bacterium one bacterium 

they built a castle out of themselves on top of themselves and they’re still flat[Write a poem] about that photo

Half way to far away

There is a green bean man in a mid-size room with folding chairs half-way to far away and all he packed to get there was a pair of pants and some pristine electrical equipment. He is surrounded by beige. Everyone’s talking about everything that’s important, and extra electrical equipment has been provided. 

He’s been to most of the half-way to far aways but nothing’s ever far away to him. He leaves with friendly expectations and comes back with more friendly expectations and some accomplishments and a nap. 
How can I come out of my shyness so I can show my charm? I do not know.
(Lia Niederberger, my little sister)

Allegory

The tall grass was laid down 
across the prairie 
in identical squares, 
one by one. 

Sometimes it was referred to as gold 
but it wasn’t really gold 
at all, it was dry-grass color most of the time 
and spring grass color in the spring. 

It was all very pseudo-bucolic 
punctuated by an ancient 
elaborate grid of holes 
and puttering prairie dogs.

One day one small rodent head emerged
from a cavity and looked right down into another cavity 
and earnestly inquired as to how to become a buffalo.Why does mr. Rogers always wear yellow cardigans? And why does [B]ill Cosby wear sweaters that look like a knitting machine blew up?

Nostalgia
(We tried tweezers first)

In one of those small rooms propped up in the sky
I watched the Cosby show on my belly 
on the big ugly couch that had brown brown squares 
it was made of mirrors 
it was reflecting everyone’s outfits. 

And my dad had held a sewing needle to a match flame:
it was scientifically clean and the tip was fantastic black. 

He was using it to retrieve the splinter 
from the arch of my ice-numbed foot.How do you feel about killing plants by loving them too much?

Inside Gardening

A tenant took a hole punch to the ground
and popped out all of the plant parts

(Holes pepper the dirt now.)

and then he went right back upstairs
and wrapped them lovingly
up in factory-regular terra cotta.What is one vice that you have (serious or minor)?

Minor vice

The almostlady wakes up every morning and draws all over her face.
She circles her favorite parts with all of the colors
such as 
brown and green and blue and green blue and blue green and green brown and brown green

She kneels, sleepy, 
before the stumpy dresser altar 
full of all of the colors
and the carpet makes dents in the skin on her knees.
What is one vice that you have (serious or minor)?
(Adriana Garties)

Serious Vice 

The factory is a little taller than one half of a story 
and it produces various stacks at intervals.
All around the grounds are perfectly ordered piles.

In recent history, the cells ran quite effectively nothing 
but cirrus clouds.

It would have gone on but they came and shut it down it’s not friendly.

`

let generator = new Markov(poem)

console.log((generator.generate(5)))