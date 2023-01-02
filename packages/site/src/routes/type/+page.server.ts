import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { randomSelectFromArray } from './utils';
 
export const load = (async ({ params }) => {
  const text = sample.split('\n') 

  const selected = randomSelectFromArray(text, 5)

  if (selected) {
    return { data: selected };
  }
 
  throw error(404, 'Not found');
}) satisfies PageServerLoad;

const sample = `We know sharks are dangerous but do you know that there is a more dangerous animal we can find on a farm? While sharks kill an average of 5 people a year, cows kill an average of 33 people every year.
Bamboo is a very sustainable material as it is one of the world's fastest-growing plants! They grow about thirty-five inches a day and even faster in warmer temperatures.
While English has lots of rules in its language, did you know that 'dreamt' is the only English word that ends in the letters 'mt'? Try and think of any other words that end in 'mt'!
One would assume that American Black bears come in just black. But surprisingly, the black bears can include colors like blonde, cinnamon, brown, white and even silver-blue!
If you toss a can of diet soda and regular soda into water, you'd be surprised to find the diet can float up to the surface! This is due to the sweeteners in the regular can being denser than water.
One common misconception we hear is that you should wait an hour after eating before going swimming as it is unsafe to do otherwise. However, there has been no science to prove this.
You can divide a pie into 8 equal pieces using just 3 cuts! First, make a horizontal cut in the middle, then a vertical cut, and then you stack the 4 slices and make a cut in the middle of that.
Only bears and great apes walk the same way as we do, on our heels. Most other animals walk on either the balls of their feet (like dogs and cats) or their tiptoes (like horses and deer).
The largest internal organ in your body is your liver, weighing up to 3.5 pounds or 1.6 kilograms. However, the largest organ isn't internal at all. It is your skin!
Did you know that winds are generally silent? No matter how fast they go, if nothing is blocking them, they will not make a sound. They only start making noises when they blow against something.
In U.S. history, there is only one president who has been arrested. That president is President Ulysses S. Grant, who was placed under arrest for speeding in his horse and buggy.
If you haven't looked closely at a map, it might surprise you that Barcelona, the city in Spain, is situated much higher on the map than New York City. Barcelona is more northern than New York!
NASA recently discovered data that shows that Saturn's rings are only 10 to 100 million years old. This means that it formed around the age of dinosaurs. It also makes sharks are older than the rings!
Almost all 195 countries in the world have a real-life animal as their national animal, but 6 of them have mythical animals. Scotland, for example, appointed the unicorn as their national animal.
It might come as no surprise that guitars are the most popular music instrument, followed closely by pianos. However, neither of them are the best-selling instrument. That title goes to the harmonica!
Despite their tiny size, the punch of a mantis shrimp has the force of a bullet and can create shockwaves. This means their prey gets hit twice! Once by their powerful claws and then by the shockwave.
Although we see movie trailers before the actual movie, this has not always been the case. Before the late 1930s, movie trailers appeared after the movie, giving them the name 'trailers'.
Did you know that a domesticated pet rabbit can be litter trained just like a cat? While it might take longer to teach them, it is completely doable! This has led to more pet rabbits being cage-free!
In 1883, the immortal jellyfish was discovered. It is the only living thing we know that never dies. Whenever they are harmed or injured, they just revert to a juvenile stage and regrow.
Although amethyst is easy to find, the highest-grade version of them is one of the rarest geodes available in the world. But despite that rarity, they are surprisingly not the most expensive geode.
Do not be fooled by the Military Grade label. This label does not mean superior quality. Instead, it means that the item meets the bare minimum requirements of durability and is cheap to make.
Dart frogs are known to be poisonous little frogs. However, when kept as pets, they are completely non-toxic. This is because their toxic coating comes from the bugs they eat in the wild.
Despite being a bear, black bears are known to be timid. When you see one, you might be able to scare them off by being loud and looking as threatening as possible. Do not try this on purpose, though!
Cougars are solitary cats. However, they become more social during courtship and when the females are caring for their young. The cougar cubs usually stay with their mother for up to two years.
Bangladesh is frequently affected by flooding. Due to this, the Red Cross is helping farmers switch to raising ducks instead of chickens. Since ducks can swim and fly, they are more likely to survive.
The fact that opossums sleep hanging by their tail is a myth. Most adult opossums cannot support their weight for more than a moment. Even the younger ones can only dangle for a few minutes.
When the Wii U didn't sell well and experienced a fall in revenue, the head of Nintendo decided to cut his own pay in half for five months. The extra money was used to make up for the loss. 
A Scottish maid, Williamina Fleming, discovered thousands of stars, white dwarves, and the Horsehead Nebula. This opportunity is thanks to a Harvard Observatory director who hired her to prove a point.
When Grand Theft Auto was released, the developer, Rockstar, paid reviewers to give the game negative reviews to keep it controversial and popular. This tactic worked as it made the game a success.
A study done by Harvard University found that hiring several less productive but more cooperative employees is more beneficial to the company than hiring one very productive but toxic employee.
In 1998, Sony had the chance to buy the rights to most of the Marvel characters. However, they only bought the rights for Spiderman, stating that no one cares about the other characters.
Cops and donuts are often associated with each other. This is because cops work odd hours, and post World War II, most stores that were open during those hours were donut shops.
Despite apes being able to learn sign language and using it to communicate with us, there hasn't been a case where an ape asks a question. Scientists suggest that this is what separates us from apes.
Chocolate-covered almonds have fewer calories than plain almonds. This is due to chocolate being less dense. So their added volume makes the snack have fewer calories if we count calories by weight.
A man, who was falsely imprisoned for 10 years, spent most of his time studying law to prove his innocence. After he succeeded, he became a lawyer to help free those who were also falsely convicted.
When you order fries from Five Guys, you will find extra fries at the bottom of the bag. This is done so it looks like a good deal. However, the menu price already takes this into factor.
A parrot named Willie once saved a toddler's life. When his owner was in another room, the toddler, who was being babysat, began to choke. Willie quickly alerted his owner by screaming, "mama, baby."
Gordon Ramsay has a project in a London prison where he opened up a business and teaches inmates how to bake. This gave the inmates the work experience they need when they finish their sentences.
When we hear outlaw, we think of criminals. But outlaws aren't just any kind of criminal, they are considered outside of the protection of the law. This means that they can be persecuted by anyone.
Since 1985, the price of Costco's hot dog combo has stayed the same at $1.50. The founder was very adamant that the price must never change. Luckily for him, the whole company respected that decision.
In 1959, Pepsi was briefly the 6th largest military in the world. This happened when the Soviet Union traded fleets of submarines and boats to pay for all the soda they wanted to import.
The movie Godfather was adapted from a book written by Mario Puzo. Mario also happened to be the screenwriter for the movie adaptation, even though he has no screenwriting experience or knowledge.
Max Planck was the founder of quantum theory and a Nobel Prize winner. However, when he went to study physics, his professor told him that almost everything has already been discovered.
Anyone who lives in Antarctica is there to work for a scientific research station. Despite that, they still have a population of around 4,000 people in the summer and 1,000 people during winter.
There is a single plant species that a wide variety of vegetables comes from. It produces kale, brussels sprouts, cauliflower, cabbage, and broccoli, which are all varieties of the same plant.
Wyoming is the 10th largest state in the United States. Despite that, they only have two escalators, and they are both found in the same city. This might be because it's cheaper to build outwards.
When you think of where camels came from, you probably think of the desert in the Middle East. However, at some point, the Middle East had to import camels and sand from Australia due to a shortage.
A homeless man once found a check for a large sum of money. Instead of claiming it, he tracked down the recipient, who then offered him a job. A year later, he became one of the board of directors.
Water intoxication happens when you drink too much water without getting extra minerals. This means you can also get tea poisoning, which can cause side effects like blurred vision and muscle cramps.
Dyslexia is a learning disorder that makes reading difficult. However, Benjamin Bolger is a man with that disorder who is also the most credentialed student to date. He has a total of 14 degrees!
The United States has won 246 Olympic gold medals in the entire Olympics history. Michael Phelps happened to have earned 23 of those gold medals. This is equal to about 10% of all the gold medals.
Star Wars' famous opening starts like a storybook narration due to George Lucas imagining the film as a story told by an ancient race of immortals. It stuck even though they didn't make the cut.
Despite media portrayal after Steve Irwin died from one, stingray attacks are almost never fatal. In fact, it is quite rare. Every year, only one or two fatal stingray attacks are reported worldwide.
Pokemon is currently the highest-grossing media franchise. This is followed, by a large difference, by Hello Kitty, Winnie the Pooh, Micky Mouse, and then Star Wars, despite their resounding success.
While Pokemon is the highest-grossing media franchise of all time, it is surprisingly not the best-selling game. In fact, it's not even in the top 3. Currently, Tetris is the best-selling game.
When identical twins have kids, they are genetically half siblings despite legally being cousins. But if two sets of identical twins have children with each other, they would genetically be siblings.
In 2021, a 16-year-old girl graduated from the University of Toronto with a double degree in biology, and cell and molecular biology. She also managed to complete Grade 10 in one summer.
The bowhead whales are currently the oldest living mammal. This was evidenced when a whale was caught and a harpoon dating back 130 years ago was found stuck on the whale's blubber.
Even though the Mall of America is located in Minnesota, where it can get pretty cold, they do not have any centralized heating. Instead, the heat is generated from lightings, body heat, and sunlight.
The drink, Snapple, is known to have real facts stamped on their bottle caps. However, after some investigation, people found out that most of their "real facts" are actually inaccurate.` 
