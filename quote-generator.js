window.addEventListener('load', newQuote, true);

var quotes = [
"'Is there a difference between harmony and agreement?' asked the Marquis. Yen Tzu replied, 'There is. Harmony is like making broth'. (Tso-chuan)"
, "When what had been done in the heart of darkness was repeated in the heart of Europe, no one wished to recognize what everyone knew. (Raoul Peck)"
, "Quantum physics arises from nonlocal interactions left over when space emerges. (Lee Smolin)"
, "Poverty is a lack of cash. (Rutger Bregman)"
, "Theories are not refuted; they are embarrassed. (Amos Tversky)"
, "Our government must avoid the impulse to live only for today, plundering, for our own ease and convenience, the precious resources of tomorrow. (Dwight D. Eisenhower)"
, "The mind seeks coherent stories. What determines our confidence is not whether they are true. (Daniel Kahnemann)"
, "The diagrams and the whole business that I got the Nobel Prize for came from that piddling around with the wobbling plate. (Richard Feynman)"
/*, "We have to recognize that there are no really trustworthy standards of rigor in a mathematics that has embraced the theory of infinite sets. (E. T. Jaynes)"*/
/*, "Philosophy is too important to be left to the philosophers. (John Archibald Wheeler)"*/
, "Learning happens when you think hard. (Rob Coe)"
, "Somewhere between ridiculous pedantry and erroneous formulation there presumably exists a reasonably precise way of specifying a problem in English. (Tony Dodd)"
/*, "As Aristotle seemed immune to scriptural authority, the theologians were forced to use the language and weapons of reason. How the Greek philosopher would have smiled to see so many world shaking faiths pay hommage to his thought. (Will Durant)"*/
/*, "I hope we shall take warning from the example and crush in it's birth the aristocracy of our monied corporations which dare already to challenge our government to a trial of strength, and to bid defiance to the laws of their country. (Thomas Jefferson)"*/
, "The first truth is that the liberty of a democracy is not safe if the people tolerate the growth of private power to a point where it becomes stronger than their democratic state itself. (Franklin D Roosevelt)"
, "Anything we can actually do, we can afford. (Keynes)"
/*, "Economists set themselves too easy, too useless a task if in tempestuous seasons they can only tell us that when the storm is long past the ocean is flat again. (Keynes)"*/
, "When I was a young man I lost many cases that I should have won, but when I grew older I won many that I should have lost, so on the average justice was done. (Anonymous Lawyer)"
, "And when you do live at the center of a private world, reverse-engineered from your own search history, you begin to notice patterns that others can't. (Edward Snowden)"
, "Computer science was born out of the ruins of Hilbert's Program. (Moshe Vardi)"
/*
, "But I repeat for the hundredth time, there is one case, one only, when man may consciously, purposely, desire what is injurious to himself, what is stupid, very stupid--simply in order to have the right to desire for himself even what is very stupid and not to be bound by an obligation to desire only what is sensible. (Dostoyevsky)"
, "Of course, this very stupid thing, this caprice of ours, may be in reality, gentlemen, more advantageous for us than anything else on earth, especially in certain cases. And in particular it may be more advantageous than any advantage even when it does us obvious harm, and contradicts the soundest conclusions of our reason concerning our advantage--for in any circumstances it preserves for us what is most precious and most important--that is, our personality, our individuality. (Dostoyevsky)"
, "Some, you see, maintain that this really is the most precious thing for mankind; choice can, of course, if it chooses, be in agreement with reason; and especially if this be not abused but kept within bounds. It is profitable and sometimes even praiseworthy. But very often, and even most often, choice is utterly and stubbornly opposed to reason. (Dostoyevsky)"
*/
, "But very often, and even most often, choice is utterly and stubbornly opposed to reason. (Dostoyevsky)"
/*, "Stability of strong liberals under pseudopullback implies each strong liberal is a coinverter of some 2-cell. (Carboni etal)"*/
, "But the line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart? (Solzhenitsyn)"
, "Deep learning is not computationally expensive by accident, but by design. (Thompson etal)"
, "Acting alone, seeing ourselves as consumers, fixating on mind-numbing trivia, even as systemic environmental collapse looms: these are forms of obedience. (George Monbiot)"
, "We would rather face civilisational death than the social embarrassment caused by raising awkward subjects. (George Monbiot)"
, "The obedience reflex is our greatest flaw, the kink in the human brain that threatens our lives. (George Monbiot)"
, "Capitalism, which sounds so reasonable when explained by a mainstream economist, is in ecological terms nothing but a pyramid scheme. (George Monbiot)"
, "Our private luxury deprives other people of their private sufficiency. (George Monbiot)"
, "I am more of the technology world's old country doctor ... I don't know the actual edge things ... I don't know how to program in Haskell. (Douglas Rushkoff)"
, "The very same things you could do to prepare for the event, are the things you would do to prevent the event. (Douglas Rushkoff)"
, "There is nothing special human about grammar, it is really the stuff which goes on in the world in some sort of process logic. (Bob Coecke)"
, "There is one and only one social responsibility of business ??? to use its resources and engage in activities designed to increase its profits so long as it stays within the rules of the game. (Milton Friedman)"
, "Surveillance capitalism originates in the discovery that companies can stake a claim to people's lives as free raw material for the extraction of behavioral data, which they then declare their private property. (Zuboff)"
, "We thought that we search Google, but now we understand that Google searches us. (Zuboff)"
, "Privacy policies are actually surveillance policies. (Zuboff)"
, "The most treacherous hallucination of them all: the belief that privacy is private. (Zuboff)"
, "Privacy is a collective good that is logically and morally inseparable from the values of human autonomy and self-determination upon which privacy depends and without which a democratic society is unimaginable. (Zuboff)"
, "Matter, therefore, and spirit, are at bottom equally unknown, and we cannot determine what qualities inhere in the one or in the other. (Hume)"
, "This is the 21st century. It???s not OK for politicians not to understand the internet anymore. (Aaron Swartz)"
, "No, you can???t force other people to change. You can, however, change just about everything else. And usually, that???s enough. (Aaron Swartz)"
, "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you? (Aaron Swartz)"
/*, "In 2016, the Google-incubated augmented reality game, Pok??mon Go, tested economies of action on the streets. Game players did not know that they were pawns in the real game of behavior modification for profit, as the rewards and punishments of hunting imaginary creatures were used to herd people to the McDonald???s, Starbucks and local pizza joints that were paying the company for ???footfall,??? in exactly the same way that online advertisers pay for ???click through??? to their websites. (Zuboff)"*/
, "Let us not become the evil that we deplore. (Barbara Lee)"
, "Fixing things is innately human: we make things and they break and we fix them. We are constantly at war with entropy, pushing back the forces of chaos a little bit at a time. (Kyle Wiens)"
, "The arithmetical world is there for me only when and for so long as I occupy the arithmetical standpoint. (Husserl)"
, "In mathematics we find ourselves at that meeting point of constraint and freedom that is the very essence of human nature. (Hermann Weyl)"
, "Paradoxically, then, it appears that the more precision philosophers attain in their concepts the more difficult it becomes to be precise about the differences in the positions. (Candice Shelby)"
/*, "Well, God has arrived. I met him on the 5.15 train. (Keynes)"*/
, "The fundamental economic problem is not scarcity but mismanagement. (attributed to Keynes)"
, "We lose a battle whenever we accept some false opinion and we need much more skill afterwards to regain our former position than we do to make good progress when we already have principles which are well founded. (Descartes)"
/*, "The multiplicity of laws often provides excuses for vices. (Descartes)"*/
, "You live and must die, and you must do your work. (Fredrick Douglass)"
, "You have no right to enjoy a child's share in the labor of your fathers, unless your children are to be blest by your labors. (Fredrick Douglass)"
, "Men seldom eulogize the wisdom and virtues of their fathers, but to excuse some folly or wickedness of their own. (Fredrick Douglass)"
, "Education means emancipation. It means light and liberty. It means the uplifting of the soul of man into the glorious light of truth, the light only by which men can be free. (Frederick Douglass)"
, "The art of programming is the art of organizing complexity. (Edsger Dijkstra)"
, "As long as we regard computers primarily as tools, we might grossly underestimate their significance. Their influence as tools might turn out to be but a ripple on the surface of our culture.  (Edsger Dijkstra)"
/*, "I find that the most objectionable feature of the conservative attitude is its propensity to reject well-substantiated new knowledge because it dislikes some of the consequences which seem to follow from it. (Hayek)"*/
, "To inoculate us against the possibility of this kind of manipulative invasion it's actually more efficient to make us moral than to make us cunning. (Peter Railton)"
, "If we replicate the cowardice of the liberal class, if we sell out to the oligarchs as a way to blunt the rise of autocracy, we will discredit the core values of a civil society and fuel the very autocracy we seek to defeat. (Chris Hedges)"
, "Resistance entails suffering. It requires self-sacrifice. It accepts that we may be destroyed. It is not rational. It is not about the pursuit of happiness. It is about the pursuit of freedom. (Chris Hedges)"
/*, "Computers are useless. They can only give you answers. (Picasso)"*/
, "Many of the processes that shape our natural world are silent and invisible. (Partha Dasgupta)"
, "It is not possible to trace very many of the harms inflicted on Nature (and by extension, on humanity too) to those who are responsible. (Partha Dasgupta)"
, "While humanity has prospered immensely in recent decades, the ways in which we have achieved such prosperity means that it has come at a devastating cost to Nature. (Partha Dasgupta)"
, "Estimates of our total impact on Nature suggest that we would require 1.6 Earths to maintain the world's current living standards. (Partha Dasgupta)"
, "Biodiversity is declining faster than at any time in human history. Current extinction rates, for example, are around 100 to 1,000 times higher than the baseline rate, and they are increasing. (Partha Dasgupta)"
, "Nature's worth to society - the true value of the various goods and services it provides - is not reflected in market prices because much of it is open to all at no monetary charge. (Partha Dasgupta)"
, "Moreover, aspects of Nature are mobile; some are invisible, such as in the soils; and many are silent. These features mean that the effects of many of our actions on ourselves and others are hard to trace and go unaccounted for. (Partha Dasgupta)"
, "Our economies are embedded within Nature, not external to it. (Partha Dasgupta)"
, "None of the macroeconomic forecasts of the future have ever built a model of the human economy as embedded in nature. (Partha Dasgupta)"
, "Many of the most prominent economists today have a math background, and most have no knowledge of ecology. (Partha Dasgupta)"
, "Mathematical models of ecosystems bear a strong resemblance to models of economic systems, so it should be relatively easy for economics courses to include natural capital. (Partha Dasgupta)"
, "Estimates show that between 1992 and 2014, produced capital per person doubled, and human capital per person increased by about 13% globally; but the stock of natural capital per person declined by nearly 40%. (Partha Dasgupta)"
/*, "Is anybody paying rent for the use of the oceans? (Partha Dasgupta)"*/
, "Every individual person must find himself a gainer, on ballancing the account; since, without justice, society must immediately dissolve. (Hume)"
, "He who appropriates land to himself by his labour, does not lessen, but increase the common stock of mankind: for the provisions serving to the support of human life, produced by one acre of inclosed and cultivated land, are (to speak much within compass) ten times more than those which are yielded by an acre of land of an equal richness lying waste in common. (Locke)"
, "But though this be a state of liberty, yet it is not a state of license. (Locke)"
, "When you are dead, you do not know you are dead. It is only painful for others. The same applies when you are stupid. (Ricky Gervais)"
, "Every measure which becomes a target becomes a bad measure. (Goodhart/Hoskins)"
, "Our program calls for a redistribution of economic power. (Martin Luther King)"
, "And I tell you if this country does not see its poor ??? if it lets them remain in their poverty and misery ??? it will surely go to hell! (Martin Luther King)"
, "The numerous anthropogenic causes of today's mass extinction are deeply unrelated to the known causes of earlier ones. (J. Alroy)"
, "I want to uncover the stories that built us, and examine which of them we want to hold onto and which we are prepared to let go of. The story of living by the sword no longer has a future. (Yuli Novak)"
, "Because even if I should speak, no one would believe me. And they would not believe me precisely because they would know that what I said was true. (James Baldwin)"
, "Switching costs may seem technological, but they're actually legal. (Cory Doctorow)"
, "Legal structures seek to anchor themselves in some more solid foundation provided by more or less widely accepted and deliberate societal agreement. (Adam Tooze)"
, "Money is a tool of collective organization. (Adam Tooze)"
, "Privacy is the power to selectively reveal oneself to the world. (Eric Hughes)"
, "As long as there has been digital real estate, there have been digital housing crises, which stem from a shortage of digital land. (Lars Doucet)"
/*, "We build a world where freedom can flourish not by removing from society any self-conscious control; we build a world where freedom can flourish by setting it in a place where a particular kind of self-conscious control survives. (Lawrence Lessig)"*/
, "The presence of a commons is key to limiting, or checking, certain forms of governmental control. (Lawrence Lessig)"
, "The 'iPad Native' generation will continue to mature. Most are still consumers, a few are creators, and almost none are business leaders. They will be. And their frames of reference will lead to transformative change. (Matthew Ball)"
/*, "Make no little plans; they have no magic to stir mens??? blood and probably themselves will not be realized. Make big plans; aim high in hope and work, remembering that a noble, logical diagram once recorded will never die. (Daniel Burnham)"*/
/*, "Make big plans; aim high in hope and work, remembering that a noble, logical diagram once recorded will never die. (Daniel Burnham)"*/
/*, "It has often and confidently been asserted, that man's origin can never be known: but ignorance more frequently begets confidence than does knowledge: it is those who know little, and not those who know much, who so positively assert that this or that problem will never be solved by science. (Darwin)"*/
, "Ignorance more frequently begets confidence than does knowledge. (Darwin)"
, "This virtue, one of the noblest with which man is endowed, seems to arise incidentally from our sympathies becoming more tender and more widely diffused, until they are extended to all sentient beings. (Darwin)"
, "VCs are pouring money into cryptocurrency and web3 companies. This money is not going to build systems with low barriers to entry. Thus the systems that will result from this flood of money will not be decentralized, no matter what the sales pitch says. (David Rosenthal)"
/*, "The problem here is that since the systems are not actually decentralized, we get the externalities but don't get the benefits. (David Rosenthal)"
, "The problem here is that the amount of actual money you can get out of a cryptocurrency equals the amount of actual money that has been put in, minus the actual costs of mining. (David Rosenthal)"*/
, "The Cloud now has a greater carbon footprint than the airline industry. (Steven Gonzalez Monserrate)"
, "Everyone thinks they think. But if you don't write down your thoughts you are fooling yourself. (Leslie Lamport)"
, "You should think before you code. A spec is simply what you write before coding. (Leslie Lamport)"
, "Thinking is hard. It is easier to think you are thinking. (Leslie Lamport)"
, "If you don't start with a spec every piece of code you write is a patch. (Leslie Lamport)"
, "The Planet Is A Political Orphan. (Dipesh Chakrabarty)"
/*, "Defining the meaning of inequality and justifying the position of the winners is a matter of vital importance. (Thomas Piketty)"
, "The central question to be answered in this textbook is the extent to which moral values play a role as productive forces for the economy. (Christian Conrad)"*/
, "Once we have surrendered our senses and nervous systems to the private manipulation of those who would try to benefit from taking a lease on our eyes and ears and nerves, we don't really have any rights left. (McLuhan)"
/*, "Work is accomplished by those employees who have not yet reached their level of incompetence. (Lawrence Peter) "*/
, "There is a strategic and a moral dimension involved with almost every issue in international politics. I think that sometimes those moral and strategic dimensions line up with each other. (Mearsheimer)"
, "A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system. (John Gall)"
, "We are as yet unable to account for the role that procedures and institutions play in fostering corruption through their normal functioning. (Camila Vergara)"
/*, "Norms allowing for increased license bring ruin even to the most glorious men and institutions. (Camila Vergara),"*/
/*, "Laws play a key role in allowing for inequality, which ultimately makes the protection of liberty and the republican project impossible. (Camila Vergara)"*/
, "Good law is only the result of the conflict between the few and the many. (Camila Vergara)"
/*, "This process ??? finding some idiot who said something ridiculous and aggregating whatever they said into a form that fits a trending algorithm ??? is now, hilariously, how all of American culture works. (Ryan Broderick)"*/
/*, "The only 'laws' [of history] are those we make up ourselves. (Graeber/Wengrow)"*/
, "There is the security of knowing one has a statistically smaller chance of getting shot with an arrow. And then there's the security of knowing that there are people in the world who will care deeply if one is. (Graeber/Wengrow)"
, "One must simplify the world to discover something new about it. The problem comes when, long after the discovery has been made, people continue to simplify. (Graeber/Wengrow)"
, "You insist that there is something a machine cannot do. If you will tell me precisely what it is that a machine cannot do, then I can always make a machine which will do just that! (John von Neumann)"
, "Politics is the entertainment division of the military industrial complex. (Frank Zappa)"
, "I never set out to be weird. It was always other people who called me weird. (Frank Zappa)"
, "The illusion of freedom will continue as long as it's profitable to continue the illusion. At the point where the illusion becomes too expensive to maintain, they will just take down the scenery, they will pull back the curtains, they will move the tables and chairs out of the way and you will see the brick wall at the back of the theater. (Frank Zappa)"
, "All the good music has already been written by people with wigs and stuff. (Frank Zappa)"
, "You can't be a real country unless you have a beer and an airline - it helps if you have some kind of football team, or some nuclear weapons, but in the very least you need a beer. (Frank Zappa)"
, "Since the bourgeoisie claimed to the guardian of Western traditions and confounded all moral issues by parading publicly virtues which it not only did not posess in private and in business life, but actually held in contempt, it seemed revolutionary to admit cruelty, disregard of human values, and general amorality, because this at least destroyed the duplicity upon which the existing society seemed to rest. (Hannah Arendt)"
, "The price, we think, the price is worth it. (Madeleine Albright)"
, "The political problem of mankind is to combine three things: economic efficiency, social justice and individual liberty. (John Maynard Keynes)"
, "Modeling all these things as one system of which part is realized as software, part is peopleware, part is hardware. (Margaret Hamilton)"
, "About 109 billion people have lived and died. It is these 109 billion people we have to thank for the civilization that we live in. The languages we speak, the food we cook, the music we enjoy, the tools we use - what we know we learned from them. (Max Roser)"
/*, "The Iron Law of Liberalism: Any market reform, any government initiative intended to reduce red tape and promote market forces will have the ultimate effect of increasing the total number of regulations, the total amount of paperwork, and the total number of bureaucrats. (David Graeber)"*/
/*, "When managers began trying to come up with scientific studies of the most time- and energy-efficient ways to deploy human labor, they never applied those same techniques to themselves???or if they did, the effect appears to have been the opposite of what they intended. (David Graeber)"*/
/*, "Policy is the negation of politics. (David Graeber)"*/
, "It's this very unavailability of absolute knowledge which makes a commitment to optimism a moral imperative. (David Graeber)"
, "We should not normalize the idea that our computers are there to control us, rather than to empower us. (Cory Doctorow)"
, "The struggle over automation has always been about control. (Cory Doctorow)"
, "People who want to control you with your computer put a lot of energy into blurring the line between enforcement and automation. (Cory Doctorow)"
, "The difference between the white slave, and the black slave, is this: the latter belongs to one slaveholder, and the former belongs to all the slaveholders, collectively. (Frederick Douglass)"
, "Elitism does not necessarily obstruct the exercise of liberal values, but it eviscerates their potential to enhance individual and social development. (John Ryder))"
, "One should organize around shared practical interests, not opinions. (John Coleman)"
, "Sustained growth is exponential. Exponential growth is not sustainable. (John Coleman)"
, "Most externalities are invisible. (John Coleman)"
, "Property is only another name for monopoly. (Posner and Glen Weyl)"
, "Any system which claims to be non-finance, but does not actually make an effort to prevent collusion, will eventually acquire the characteristics of finance, if not something worse. (Vitalik Buterin)"
, "A society is best thought of as an ecosystem of interdependent institutions. When those institutions are well-designed and functional, society flourishes. (Samo Burja)"
, "Water scarcity will be the biggest climate-related threat to corporate assets within the next few decades. (Reuters)"
, "In essence, the conflict that exists today is no more than an old-style struggle for power, once again presented to mankind in semireligious trappings. The difference is that this time, the development of atomic power has imbued that struggle with a ghostly character; for both parties know and admit that, this time, should the struggle deteriorate into actual war, mankind is doomed. (Albert Einstein)"
, "Watching an ad is like watching a corporation dream. Waking up, however, you realize. It's a living nightmare for human beings.(Indrajit Samarajiva)"
, "Degrowth calls for a planned reduction of excess resource use and energy use in high income nations in a manner that is safe, just and equitable. (Jason Hickel)"
, "Economic inequality, corruption and global corporations are viewed as the most significant threats to democracy. (Democracy Perception Index 2022)"
, "The countries considered most democratic by their citizens are China, Vietnam, and Taiwan. (Democracy Percpetion Index 2022)"
, "But you're the only person in your bubble. (Eli Pariser)"
, "One of the most important insights about people is that they can form social relationships with almost anything. Animals, the deceased, spirits, Gods, inanimate objects???humans look across nature and find new allies or adversaries everywhere they go. (William Buckley)"
]

/*
, "Care is about reparing our world. (John Coleman)"
, "I know no country in which, speaking generally, there is less independence of mind and true freedom of discussion than in America. (Alexis the Toqueville)"
, "Oligarchy is a grinding machine, no matter how charming the oligarch. (Ben Hunt)"
, "Show me your network and I tell you who your are. (John Coleman)"
, "The invisible hand does not write code. But code runs the invisible hand. (John Coleman)"
, "To build a strong position towards China, the best would be to go full woke, including universal health care and basic income. (John Coleman)"
, "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others. (Nelson Mandela)"
, "Therefore geometry is founded in mechanical practice, and is nothing but that part of universal mechanics which accurately proposes and demonstrates the art of measuring. (Isaac Newton)"
, "Hobbes and Rousseau told their contemporaries things that were startling, profound and opened new doors of imagination. Now their ideas are just tired common sense. (Graeber/Wengrow)"
, "Lack of imagination is not itself an argument. (Graeber/Wengrow)"
, "People can have the old Internet back whenever they want. (Marc Andreessen)"
, "The pointy end of the spear of WEIRD in our time is woke; woke is currently America's #1 cultural export. (Marc Andreessen)"
, "Net worth is highly concentrated, with the richest 1 percent (as ranked by wealth) owning 39.6 percent of total household wealth in 2016 and the top 20 percent owning 89.9 percent. (Edward Wolff)"
, "Factors which encourage systemic corruption include conflicting incentives, discretionary powers; monopolistic powers; lack of transparency; low pay; and a culture of impunity. (Wkipedia)"
, "Since 1920, the vast increase in welfare beneficiaries and the extension of the franchise to women ??? two constituencies that are notoriously tough for libertarians ??? have rendered the notion of ???capitalist democracy??? into an oxymoron. (Peter Thiel)"
, "Every man is an heir to a legacy of dignity and worth. (Martin Luther King)"
, "When machines and computers, profit motives and property rights, are considered more important than people, the giant triplets of racism, extreme materialism, and militarism are incapable of being conquered. (Martin Luther King)"
, "This is the privilege of champions: even when you???re not at your best, oppositions still have to pretend you are. (Jonathan Liew)"
, "We do not know them, we do not wish to know them, it is not our business to know them, it is our businuess not to know them! (Edsger Dijkstra)"
, "Carter had solar collectors on the White House roof and Reagan took them off. (A Fierce Green Fire)"
, "Moreover, aspects of Nature are mobile; some are invisible, such as in the soils; and many are silent. These features mean that the effects of many of our actions on ourselves and others ??? including our descendants ??? are hard to trace and go unaccounted for, giving rise to widespread ???externalities??? and making it hard for markets to function well. (Partha Dasgupta)"
, "The competing systems of power in the United States are divided between oligarchy and autocracy. (Chris Hedges)"
, "The bankruptcy of the liberal class is important, for it effectively turns liberal democratic values into the empty platitudes those who embrace autocracy condemn and despise. (Chris Hedges)"
, "The alliance between the oligarchs and the autocrats gives birth to fascism. (Chris Hedges)"
, "Mathematics is not the rigid and rigidity-producing schema that the layman thinks it is; rather, in it we find ourselves at that meeting point of constraint and freedom that is the very essence of human nature. ??? Hermann Weyl"
, "As soon as the land of any country has all become private property, the landlords, like all other men, love to reap where they never sowed, and demand a rent even for its natural produce. (Adam Smith)"
, "The barbarous gold barons - they did not find the gold, they did not mine the gold, they did not mill the gold, but by some weird alchemy all the gold belonged to them. (Bill Haywood)"
, "Americans make up about 4.4 percent of the global population but own 42 percent of the world???s guns. (NYT)"
, "Think deeply about things. Don???t just go along because that???s the way things are or that???s what your friends say. Consider the effects, consider the alternatives, but most importantly, just think. (Aaron Swartz)" 
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