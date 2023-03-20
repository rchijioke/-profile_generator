const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];



// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

rl.question(questions[0], (answer1) => {
  rl.question(questions[1], (answer2) => {
    rl.question(questions[2], (answer3) => {
      rl.question(questions[3], (answer4) => {
        rl.question(questions[4], (answer5) => {
          rl.question(questions[5], (answer6) => {
            rl.question(questions[6], (answer7) => {
               console.log(`name inputed: ${answer1}, ${answer2}, ${answer3}, ${answer4}, ${answer5}, ${answer6}, ${answer7}`);
  
    rl.close();
            })
          })

        })
      })

    })
   
  })
});

// let i = 0;

// const question = function () {
//   if (i < 7) {
//     rl.question
//   }
// }

