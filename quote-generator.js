window.addEventListener('load', newQuote, true);

var quotes = [
"'Is there a difference between harmony and agreement?' asked the Marquis. Yen Tzu replied, 'There is. Harmony is like making broth'. (Tso-chuan)"
, "When what had been done in the heart of darkness was repeated in the heart of Europe, no one wished to recognize what everyone knew. (Raoul Peck)"
, "Therefore geometry is founded in mechanical practice, and is nothing but that part of universal mechanics which accurately proposes and demonstrates the art of measuring. (Isaac Newton)"
, "Quantum physics arises from nonlocal interactions left over when space emerges. (Lee Smolin)"
, "Poverty is a lack of cash. (Rutger Bregman)"
, "Theories are not refuted; they are embarrassed. (Amos Tversky)"
, "Our government must avoid the impulse to live only for today, plundering, for our own ease and convenience, the precious resources of tomorrow. (Dwight D. Eisenhower)"
, "The mind seeks coherent stories. What determines our confidence is not whether they are true. (Daniel Kahnemann)"
, "The diagrams and the whole business that I got the Nobel Prize for came from that piddling around with the wobbling plate. (Richard Feynman)"
, "We have to recognize that there are no really trustworthy standards of rigor in a mathematics that has embraced the theory of infinite sets. (E. T. Jaynes)"
, "Philosophy is too important to be left to the philosophers. (John Archibald Wheeler)"
, "Learning happens when you think hard. (Rob Coe)"
, "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others. (Nelson Mandela)"
, "Somewhere between ridiculous pedantry and erroneous formulation there presumably exists a reasonably precise way of specifying a problem in English. (Tony Dodd)"
, "As Aristotle seemed immune to scriptural authority, the theologians were forced to use the language and weapons of reason. How the Greek philosopher would have smiled to see so many world shaking faiths pay hommage to his thought. (Will Durant)"
, "I hope we shall take warning from the example and crush in it’s birth the aristocracy of our monied corporations which dare already to challenge our government to a trial of strength, and to bid defiance to the laws of their country. (Thomas Jefferson)"
, "Carter had solar collectors on the White House roof and Reagan took them off. (A Fierce Green Fire)"
, "Anything we can actually do, we can afford. (John Maynard Keynes)"
, "When I was a young man I lost many cases that I should have won, but when I grew older I won many that I should have lost, so on the average justice was done. (Anonymous Lawyer)"
, "And when you do live at the center of a private world, reverse-engineered from your own search history, you begin to notice patterns that others can’t. (Edward Snowden)"
, "But I repeat for the hundredth time, there is one case, one only, when man may consciously, purposely, desire what is injurious to himself, what is stupid, very stupid--simply in order to have the right to desire for himself even what is very stupid and not to be bound by an obligation to desire only what is sensible. (Dostoyevsky)"
, "Of course, this very stupid thing, this caprice of ours, may be in reality, gentlemen, more advantageous for us than anything else on earth, especially in certain cases. And in particular it may be more advantageous than any advantage even when it does us obvious harm, and contradicts the soundest conclusions of our reason concerning our advantage--for in any circumstances it preserves for us what is most precious and most important--that is, our personality, our individuality. (Dostoyevsky)"
, "Some, you see, maintain that this really is the most precious thing for mankind; choice can, of course, if it chooses, be in agreement with reason; and especially if this be not abused but kept within bounds. It is profitable and sometimes even praiseworthy. (Dostoyevsky)"
, "But very often, and even most often, choice is utterly and stubbornly opposed to reason. (Dostoyevsky)"
, "Stability of strong liberals under pseudopullback implies each strong liberal is a coinverter of some 2-cell. (Carboni etal)"
, "The bankruptcy of the liberal class is important, for it effectively turns liberal democratic values into the empty platitudes those who embrace autocracy condemn and despise. (Chris Hedges)"
, "But the line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart? (Solzhenitsyn)"
, "Deep learning is not computationally expensive by accident, but by design. (Thompson etal)"
, "Acting alone, seeing ourselves as consumers, fixating on mind-numbing trivia, even as systemic environmental collapse looms: these are forms of obedience. (George Monbiot)"
, "We would rather face civilisational death than the social embarrassment caused by raising awkward subjects. (George Monbiot)"
, "The obedience reflex is our greatest flaw, the kink in the human brain that threatens our lives. (George Monbiot)"
, "Capitalism, which sounds so reasonable when explained by a mainstream economist, is in ecological terms nothing but a pyramid scheme. (George Monbiot)"
, "I am more of the technology world's old country doctor ... I don't know the actual edge things ... I don't know how to program in Haskell. (Douglas Rushkoff)"
, "The very same things you could do to prepare for the event, are the things you would do to prevent the event. (Douglas Rushkoff)"
, "There is nothing special human about grammar, it is really the stuff which goes on in the world in some sort of process logic. (Bob Coecke)"
, "There is one and only one social responsibility of business — to use its resources and engage in activities designed to increase its profits so long as it stays within the rules of the game. (Milton Friedman)"
, "Surveillance capitalism originates in the discovery that companies can stake a claim to people’s lives as free raw material for the extraction of behavioral data, which they then declare their private property. (Zuboff)"
, "We thought that we search Google, but now we understand that Google searches us. (Zuboff)"
, "Privacy policies are actually surveillance policies. (Zuboff)"
, "The most treacherous hallucination of them all: the belief that privacy is private. (Zuboff)"
, "Privacy is a collective good that is logically and morally inseparable from the values of human autonomy and self-determination upon which privacy depends and without which a democratic society is unimaginable. (Zuboff)"
, "Matter, therefore, and spirit, are at bottom equally unknown, and we cannot determine what qualities inhere in the one or in the other. (Hume)"
, "This is the 21st century. It’s not OK for politicians not to understand the internet anymore. (Aaron Swartz)"
, "No, you can’t force other people to change. You can, however, change just about everything else. And usually, that’s enough. (Aaron Swartz)"
, "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you? (Aaron Swartz)"
, "In 2016, the Google-incubated augmented reality game, Pokémon Go, tested economies of action on the streets. Game players did not know that they were pawns in the real game of behavior modification for profit, as the rewards and punishments of hunting imaginary creatures were used to herd people to the McDonald’s, Starbucks and local pizza joints that were paying the company for “footfall,” in exactly the same way that online advertisers pay for “click through” to their websites. (Zuboff)"
, "Let us not become the evil that we deplore. (Barbara Lee)"
, "Fixing things is innately human: we make things and they break and we fix them. We are constantly at war with entropy, pushing back the forces of chaos a little bit at a time. (Kyle Wiens)"
, "The arithmetical world is there for me only when and for so long as I occupy the arithmetical standpoint. (Husserl)"
, "In mathematics we find ourselves at that meeting point of constraint and freedom that is the very essence of human nature. — Hermann Weyl"
, "Paradoxically, then, it appears that the more precision philosophers attain in their concepts the more difficult it becomes to be precise about the differences in the positions. (Candice Shelby)"
]
  

/*
, "Mathematics is not the rigid and rigidity-producing schema that the layman thinks it is; rather, in it we find ourselves at that meeting point of constraint and freedom that is the very essence of human nature. — Hermann Weyl"
, "As soon as the land of any country has all become private property, the landlords, like all other men, love to reap where they never sowed, and demand a rent even for its natural produce. (Adam Smith)"
, "The barbarous gold barons - they did not find the gold, they did not mine the gold, they did not mill the gold, but by some weird alchemy all the gold belonged to them. (Bill Haywood)"
, "Americans make up about 4.4 percent of the global population but own 42 percent of the world’s guns. (NYT)"
, "Think deeply about things. Don’t just go along because that’s the way things are or that’s what your friends say. Consider the effects, consider the alternatives, but most importantly, just think. (Aaron Swartz)" 
, "We would rather face civilisational death than the social embarrassment caused by raising awkward subjects, and the political trouble involved in resisting powerful forces. (George Monbiot)"
, "Despite their wide empirical use the mathematical success of deep learning remains a mystery. (Soltanolkotabi etal)"
, "The dual of conservative is liberal, while strong liberals can be defined from conservatives [...] Stability of strong liberals under pseudopullback implies each strong liberal is a coinverter of some 2-cell. (Carboni etal)"
,   "In eating, it is best not to fill up; In thinking, it is best not to overdo. (Neiye)"
,   "What an artist does is not to create, but to discover. To discover natural potentials in the physical elements of this world. The musician doesn't create music, he discovers the potential in the physics of sound. (Aristotle-Holmes)"
,  "Amoebae dubia actually has 200 times more DNA than do humans. (Nick Lane)"
, "If only it were all so simple! If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart? (Solzhenitsyn)"
,   "Very few people are enthusiastic about rational thought. (Origen of Alexandria)"
,   "If every man could abandon the business of life and devote his time to philosophy, no other course ought to be followed but this alone. (Origen of Alexandria)" 
, "We are what we repeatedly do. Excellence, then, is not an act, but a habit. (Aristotle-Durant)"
, "It is far better to accept doctrines with reason and wisdom than with mere faith. (Origen of Alexandria)"
,   "Science had its origin, if not in opposition to Aristotle, at least in opposition to Aristotelianism. (Marjorie Grene)"
, "I tend to agree with Roger Bacon that the study of Aristotle increases ignorance. (George Simpson)"
,  "Knowledge of philosophy can be the essential element, because a person with a philosophical education has in their toolbox a plethora of ideas and methods coming from the whole history of human beings attempting to think about the fundamentals of our description of the world. (Lee Smolin)"
,  "The void between bacterial and eukaryotic cells is greater than any other in biology. (Nick Lane)"
,  "Anyone can offer praise for qualities a man actually has; only the truly subservient will humiliate themselves by offering flattery totally untethered from reality. (Paul Krugman)"
*/

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


/*
  "What an artist does is not to create, but to discover. To discover natural potentials in the physical elements of this world. The musician doesn't create music, he discovers the potential in the physics of sound. (<a href="https://www.youtube.com/watch?v=kLKHpSPoNKI#t=21m20s">Aristotle-Holmes</a>)",
*/