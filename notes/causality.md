# Causality - literature review (under construction)

Various links I have been coming across recently:

- [From Verification to Causality-Based Explications](https://drops.dagstuhl.de/opus/volltexte/2021/14070/pdf/LIPIcs-ICALP-2021-1.pdf). A survey about applications of causality to the verification of software systems.
- ...

# From Feb 2020

## General Resources

- Pearl: *The Book of Why?* This is a great book with lots of motivation and history. Easy and fun to read. A good starter to understand the big ideas.

- Shalizi: [Advanced Data Analysis from an Elementary Point of View](https://www.dropbox.com/s/op0swo2mdbjnwnp/Shalizi-Advanced%20Data%20Analysis%20from%20an%20Elementary%20Point%20of%20View.pdf?dl=0), Chapter 20-24. Mathematically precise, lots of examples, very clear so far.

- Halpern: Actual Causality. A logicians perspective. Mathematically precise, but still light on technicalities and clear on the motiviations.

- Spirtes et al (2000) [Causation, Prediction and Search](https://www.dropbox.com/s/lm3j3i858wczolb/Spirtes-Glymour-Scheines-Causation%20Prediction%20Search-fullbook.pdf?dl=0}) seems to be the classic reference but I only read the intro so far.

-  [Pearl: Causal inference in statistics: An overview.](http://projecteuclid.org/euclid.ssu/1255440554) I didnt try this yet, but looks promising ... a bit shorter than Spirtes et al.

- Williamson: Bayesian Nets and Causality: Philosophical and Computational Foundations. I only started to read it. I like the general discussions, which are backed up with maths and computer science.


## Causal Identification in Economics.

David Rojo-Arjona made me aware that in economcis there is a field working on (causal) indentification. He recommended [Causal inference in economics and marketing](https://www.pnas.org/content/113/27/7310) and [The State of Applied Econometrics: Causality and Policy Evaluation](https://pubs.aeaweb.org/doi/pdfplus/10.1257/jep.31.2.3). The approach of the  first paper looked to me, after a first superficial reading, like a special case of Pearl's, but the second paper makes clear that in this area researchers follow Rubin's approach. 

There seems to be some debate whether Pearl's approach subsumes Rubin's and what there respective advantages are. I found some discussions on this [here](https://statmodeling.stat.columbia.edu/2009/07/05/disputes_about/) (which has a discussion at the end about continuous vs discrete models which I thought was interesting but to which [Pearl replies](https://statmodeling.stat.columbia.edu/2009/07/05/disputes_about/#comment-49482) further down that it is tangential and [here](https://statmodeling.stat.columbia.edu/2009/07/05/disputes_about/) (search for Pearl's replies in the comments). My preliminary summary: Both approaches are equivalent and statisticians prefer Rubin while computer scientists prefer Pearl.


## Causal Discovery 

#### References with comments from Frederick Eberhardt

Fredrick Eberhardt gave a talk at Chapman in 2019. I quote from an email he sent me with pointers to the literature related to his talk and our questions about an axiomatisation of causality.

To quote: 

"As for the axiomatization, there is no explicit written up version of an axiomatization of causality akin to, say, the Kolmogorov axiomatization of probability. At this point, it is just a much looser way of thinking about causality. 

- Spirtes et al (2000) present it this way in the book [Causation, Prediction and Search](https://www.dropbox.com/s/lm3j3i858wczolb/Spirtes-Glymour-Scheines-Causation%20Prediction%20Search-fullbook.pdf?dl=0), Section 3.4, but that is not a proper axiomatization in the mathematical sense.

- Perhaps the one most carefully studied "axiom" is the faithfulness assumption, where there now exist whole variety of versions and weakenings, see Zhang and Spirtes, "The three faces of faithfulness"

- A few years ago together with two colleagues I developed a causal discovery algorithm that uses Answer Set Programming (essentially a SAT solver) to search for causal graphs [Discovering Cyclic Causal Models with Latent Variables](http://www.its.caltech.edu/~fehardt/papers/HHEJ2013.pdf) and [Constraint-based Causal Discovery](http://www.its.caltech.edu/~fehardt/papers/HEJ_UAI2014.pdf).

- That framework allowed us to logically encode our background assumptions about causality (our "axioms") and then immediately have a complete search procedure for that set of assumptions. We have used this a bit to explore the effect of different background assumptions on what can be discovered from data [SAT-Based Causal Discovery under Weaker Assumptions](http://www.its.caltech.edu/~fehardt/papers/ZZEM2017.pdf)

- I think what you are looking for does not exist (yet). None of these accounts currently offers what one would consider a proper axiomatization that one could call a foundation of causality. As for a beginners reference to the topic, Cosma Shalizi's [Advanced Data Analysis from an Elementary Point of View](https://www.dropbox.com/s/op0swo2mdbjnwnp/Shalizi-Advanced%20Data%20Analysis%20from%20an%20Elementary%20Point%20of%20View.pdf?dl=0) from Chapter 20 onwards is a good intro to causality. And in a short paper I wrote [Constraint-based Causal Discovery](http://www.its.caltech.edu/~fehardt/papers/Eberhardt_IJDSA2017.pdf) I tried to give a sense of how one can now switch the background assumptions and then prove different identifiability results for causal structure."

## The Do-Calculus
[The Do-Calculus Revisited](http://ftp.cs.ucla.edu/pub/stat_ser/r402.pdf) is a survey paper by Pearl. In particular, it could be interesting to look at the completeness results ...

## The do-operator and epistemic logic? 

Larry Moss mentioned Rachel Briggs. I started reading [Interventionist counterfactuals](https://www.dropbox.com/s/fl0zvixjt0i35vj/Briggs-Interventionist%20counterfactuals.pdf?dl=0).

## Probabilistic/Bayesian Logic Programming 

Probabilistic Logic Programming was introduced by [Ng and Subrahmanian](https://www.sciencedirect.com/science/article/pii/089054019290061J) as a probabilistic interpretation of many-valued PROLOG-style logic programming. See also papers by [Fitting-1985](https://www.sciencedirect.com/science/article/pii/S0743106685800054), [Fitting-1991](https://www.sciencedirect.com/science/article/pii/074310669190014G) and others.

Bayesian Logic Programming  starts from the observation that Bayesian nets are propositional and that a predicate logic extension is needed to succinctly encode information. For example, [Russell](https://people.eecs.berkeley.edu/~russell/papers/ipmu14-oupm.pdf) makes the point that describing the rules of chess in propositional logic takes $10,000$ pages while they fit on one page of predicate logic. An updated version of this paper was presented in an invited lecture at FLoC 2018, available now as the video lecture [BLOG: Bayesian Logic](\href{https://www.youtube.com/watch?v=LN1ubjPdb_c)

A survey (which I didnt read yet) is available in [Kersting and De Raedt](http://people.csail.mit.edu/kersting/profile/balios/blpSRLchapter06.pdf), which also briefly discusses in Section 1.7 the relationship between the different approaches.
 
- In *probabilistic logic programming* a clause $A:\mu\Leftarrow B_1:\mu_1,\ldots B_n:\mu_n$ consists of atomic propositions $A,B_i$ annotated with intervals $[\alpha,\beta]\subseteq [0,1]$ interpreted as  constraints on the probability of the propositions. See [Ng and Subrahmanian](https://www.sciencedirect.com/science/article/pii/089054019290061J)

- In *probabilistic databases*, ...

## Category Theoretic Accounts of Bayesian Reasoning

Some references one could look at:
- B. Fong: [Causal theories: a categorical perspective on Bayesian networks](https://arxiv.org/abs/1301.6201), Master's thesis, University of Oxford (2012). Chapter 3 contains a succinct overview of Bayesian Networks, including formal defintiions and some theorems. Chapter 4 is interesting as it associates a monoidal category to each Bayesian Network. One question here is: Does the categorical structure add something new and useful?

- [A predicate/state transformer semantics for Bayesian learning](http://www.cs.ru.nl/B.Jacobs/PAPERS/A_predicate_state_transformer_semantics.pdf) by Bart Jacobs and Fabio Zanasi

- [The Logical Essentials of Bayesian Reasoning](https://arxiv.org/abs/1804.01193) Bart Jacobs, Fabio Zanasi

- [Bayesian Factorisation as Adjoint](http://wadt18.cs.rhul.ac.uk/submissions/WADT18A33.pdf) by Bart Jacobs, Fabio Zanasi, and Octavio Zapata

- [A Formal Semantics of Influence in Bayesian Reasoning](http://www.cs.ru.nl/B.Jacobs/PAPERS/influence.pdf) by Bart Jacobs and Fabio Zanasi

- [Causal Inference by String Diagram Surgery](https://arxiv.org/abs/1811.08338) by Bart Jacobs, Aleks Kissinger, Fabio Zanasi


 ## Applications

- [An algorithm that can spot cause and effect could supercharge medical AI](https://www.technologyreview.com/s/615141/an-algorithm-that-can-spot-cause-and-effect-could-supercharge-medical-ai/)

