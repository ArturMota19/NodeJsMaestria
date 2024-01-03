const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'p1',
        message: 'Please enter the first note'
    },
    {
        name: 'p2',
        message: 'Please enter the second note'
    }
])
.then(answers => {
    const answer1 = parseFloat(answers.p1)
    const answer2 = parseFloat(answers.p2)
    const average = (answer1 + answer2)/2
    console.log(`The average of ${answer1} and ${answer2} is ${average}`)
})
.catch(err => 
    console.log(err)
);