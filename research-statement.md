
# Logic in Computer Science

Compared to other disciplines such as physics and engineering, computer science is still a young field. With the amazing technical advances we have seen, it is not a surprise that we still need to develop the *computer science mathematics* that will adequately support the engineering of secure and reliable software.

As a first rough approximation, one may say that [logic is to computer science](https://www.cs.rice.edu/~vardi/papers/aaas99.jsl.pdf) what [mathematics is to physics](http://www.dartmouth.edu/~matc/MathDrama/reading/Wigner.html). 

Conversely, computer science is having an huge influence on research in logic. I didn't try to count for myself, but I think it is safe to say that the vast majority of logicians nowadays is employed in computer science departments. By the way, one of them co-authored the graphical novel [Logicomix](https://www.logicomix.com/en/index.html) in which Bertrand Russell and the history of logic are the main protagonists.

The best known applications of logic to computer science are probably still in hardware design (digital circuits), since Shannon's [Symbolic Analysis of Relay and Switching Circuits](https://en.wikipedia.org/wiki/A_Symbolic_Analysis_of_Relay_and_Switching_Circuits) from 1937.

Current research in logic is driven more by applications to programming and software engineering. These applications led us from the one universal logic which Russell was still seeking at the beginning of the 20th century to a large zoo of bespoke logics, each with its own applications and algorithms. 

The reason why we need so many logics is in its essence contained in Turing's famous result that the so-called [halting problem](https://en.wikipedia.org/wiki/Halting_problem) cannot be solved by an algorithm, or, in more technical terms, it is undecidable. In fact, a corollary of the unsolvability of the halting problem is [Rice's theorem](https://en.wikipedia.org/wiki/Rice%27s_theorem) saying that all non-trivial semantic properties of programs are undecidable.

To deal with the undecidability, several strategies have been employed:
-  Design bespoke decidable logics that work on abstract models instead of on general programs.
-  Build interactive tools that input guidance from an expert instead of being fully automated.
- Develop approximate methods that find the right answer with a high probability.

This line of research has been very successful and gave rise to a wide range of logics and software tools, many of which are nowadays mature enough so that they can be used by programmers who did not specialise in logic.

Logic | Area | Example Tool |
|:---:|:---:|:---:|
|[propositional logic](https://en.wikipedia.org/wiki/Propositional_calculus) | [SAT-solving](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem#Online_SAT_solvers) | [MiniSat](https://www.msoos.org/2013/09/minisat-in-your-browser/)
|[temporal logic](https://en.wikipedia.org/wiki/Temporal_logic) | [model checking](https://en.wikipedia.org/wiki/Model_checking) | [SPIN](https://en.wikipedia.org/wiki/SPIN_model_checker) |
| [Hoare logic](https://en.wikipedia.org/wiki/Hoare_logic) | [static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis) | [Dafny](https://en.wikipedia.org/wiki/Dafny)
| [first-order logic](https://en.wikipedia.org/wiki/First-order_logic) |  [data base query languages](https://en.wikipedia.org/wiki/Query_language) | [SQL](https://en.wikipedia.org/wiki/SQL) 
| " |  [logic programming](https://en.wikipedia.org/wiki/Logic_programming) | [Prolog](https://en.wikipedia.org/wiki/Prolog) 
| " |  [automated theorem proving](https://en.wikipedia.org/wiki/Automated_theorem_proving) | [Vampire](https://en.wikipedia.org/wiki/Vampire_(theorem_prover)) 
| [type theory](https://en.wikipedia.org/wiki/Higher-order_logic) | [interactive theorem proving](https://en.wikipedia.org/wiki/Type_theory) | [Lean](https://en.wikipedia.org/wiki/Lean_(proof_assistant))

Each of these logics comes in many variations. Each of this areas are big enough to spend a life-time of research in it.  I would expect a student who takes a course on logic in computer science to know about SQL and maybe Prolog. But all of these tools are worth knowing.

