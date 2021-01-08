(function(){
    function buildQuiz(){
      const output = [];
      quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
            output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
        quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
      quizQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'forestgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'crimson';
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const quizQuestions = [
      {
            question: "Which of these costumes did Dwight NOT dress up as for a Halloween episode?",
            answers: {
                a: "Joker",
                b: "Scranton Strangler",
                c: "Darth Vader",
            },
            correctAnswer: "c"
        },
        {
            question: "What is the name of Jim and Pam's first child?",
            answers: {
                a: "Cece",
                b: "DeeDee",
                c: "Mimi",
            },
            correctAnswer: "a"
        },
        {
            question: "Which of these is a David Wallace patent?",
            answers: {
                a: "Suck-It!",
                b: "WUPHF",
                c: "Shoe La La",
            },
            correctAnswer: "a"
        },
        {
            question: "What local family paper company was competing with Dunder Mifflin?",
            answers: {
                a: "Prince Paper",
                b: "Pauper Paper",
                c: "Piper Paper",
            },
            correctAnswer: "a"
        },
        {
            question: "What food establishment is Pam banned from permanently?",
            answers: {
                a: "Outback Steakhouse",
                b: "Applebees",
                c: "Chili's",
            },
            correctAnswer: "c"
        },
        {
            question: "Who plays Andy's brother, Walter Bernard Jr.?",
            answers: {
                a: "Zach Braff",
                b: "Josh Groban",
                c: "Dax Shepard",
            },
            correctAnswer: "b"
        },
        {
            question: "Michael Scott's home movie that features his fellow co-workers is called...",
            answers: {
                a: "Magic Mike",
                b: "Red Alert Twilight",
                c: "Threat Level Midnight",
            },
            correctAnswer: "c"
        },
        {
            question: "Who was never a member of the party planning committee?",
            answers: {
                a: "Pam",
                b: "Phyllis",
                c: "Andy",
            },
            correctAnswer: "c"
        },
        {
            question: "Where do Michael and Holly move to after they are engaged?",
            answers: {
                a: "Boulder, CO",
                b: "Nashua, NH",
                c: "Des Moines, IA",
            },
            correctAnswer: "a"
        },
        {
            question: "Which of these is NOT a real place in Scranton featured in The Office?",
            answers: {
                a: "Dunder Mifflin",
                b: "Steamtown Mall",
                c: "Poor Richard's Pub",
            },
            correctAnswer: "a"
        }
    ];
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();
