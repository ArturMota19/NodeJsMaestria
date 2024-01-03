const chalk = require("chalk");

const testGrade = "10"
// Just using chalk to change console colors
if(testGrade >= 5){
    console.log(chalk.green("Congratulations! You're approved"))
}else{
    console.log(chalk.bgRed.black("Unfortunately you were not approved"))
}