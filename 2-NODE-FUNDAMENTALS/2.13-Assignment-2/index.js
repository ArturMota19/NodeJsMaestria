const chalk = require("chalk");
const inquirer = require('inquirer');

// Create a prompt to ask the user for his name and age
inquirer.prompt([
  {
      name: 'name',
      message: 'What is your first name?'
  },
  {
      name: 'age',
      message: 'How old are you?'
  }
]) 
// Use the answers from the prompt, and handle them with a callback function
.then(answers => {
  console.log(answers)
  const {name, age} = answers;
  // Check if the user answered the questions, if not throw an error
  if(!name || !age) {
    throw new Error("You need to answer your name and age.")
  }

  console.log(chalk.bgYellow.black(`Hello, ${name}. You are ${age} years old.`))
})
.catch(err => 
  console.log(err)
);

