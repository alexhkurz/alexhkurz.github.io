window.addEventListener('load', newQuote, true);

var quotes = [
"'Is there a difference between harmony and agreement?' asked the Marquis. Yen Tzu replied, 'There is. Harmony is like making broth'. (Tso-chuan)"
,  "Amoebae dubia actually has 200 times more DNA than do humans. (Nick Lane)"
,  "When what had been done in the heart of darkness was repeated in the heart of Europe, no one wished to recognize what everyone knew. (Raoul Peck)"
, "Therefore geometry is founded in mechanical practice, and is nothing but that part of universal mechanics which accurately proposes and demonstrates the art of measuring. (Isaac Newton)"
,  "Quantum physics arises from nonlocal interactions left over when space emerges. (Lee Smolin)"
,   "Poverty is a lack of cash. (Rutger Bregman)"
,   "What an artist does is not to create, but to discover. To discover natural potentials in the physical elements of this world. The musician doesn't create music, he discovers the potential in the physics of sound. (Aristotle-Holmes)"
,   "Theories are not refuted; they are embarrassed. (Amos Tversky)"
,   "Our government must avoid the impulse to live only for today, plundering, for our own ease and convenience, the precious resources of tomorrow. (Dwight D. Eisenhower)"
,   "Americans make up about 4.4 percent of the global population but own 42 percent of the world’s guns. (NYT)"
,   "The mind seeks coherent stories. What determines our confidence is not whether they are true or not. (Daniel Kahnemann)"
,   "The diagrams and the whole business that I got the Nobel Prize for came from that piddling around with the wobbling plate. (Richard Feynman)"
,   "We have to recognize that there are no really trustworthy standards of rigor in a mathematics that has embraced the theory of infinite sets. (E. T. Jaynes)"
,   "Philosophy is too important to be left to the philosophers. (John Archibald Wheeler)"
,   "In eating, it is best not to fill up; In thinking, it is best not to overdo. (Neiye)"
,   "Learning happens when you think hard. (Rob Coe)"
,   "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others. (Nelson Mandela)"
, "Somewhere between ridiculous pedantry and erroneous formulation there presumably exists a reasonably precise way of specifying a problem in English. (Tony Dodd)"
, "As Aristotle seemed immune to scriptural authority, the theologians were forced to use the language and weapons of reason. How the Greek philosopher would have smiled to see so many world shaking faiths pay hommage to his thought. (Will Durant)"
, "I hope we shall take warning from the example and crush in it’s birth the aristocracy of our monied corporations which dare already to challenge our government to a trial of strength, and to bid defiance to the laws of their country. (Thomas Jefferson)"
, "Carter had solar collectors on the White House roof and Reagan took them off. (A Fierce Green Fire)"
, "Anything we can actually do, we can afford. (John Maynard Keynes)"
, "When I was a young man I lost many cases that I should have won, but when I grew older I won many that I should have lost, so on the average justice was done. (Anonymous Lawyer)"
, "And when you do live at the center of a private world, reverse-engineered from your own search history, you begin to notice patterns that others can’t. (Edward Snowden)"
]


/*
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