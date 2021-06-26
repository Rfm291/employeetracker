const store = require('./db/store');
const inquirer = require('inquirer');
const questions = require('./utils/questions');

async function userMenu () {
    const { choice } = await inquirer.prompt(questions.menu);

    const formatedChoices = choice.toLowerCase().trim();
    switch (formatedChoices){
        case 'search by employee name': return querysearchByName()
        case 'add employee': return addEmployee()
    }
}

async function addEmployee(){
    try{
    const departments = await store.getDepartments()
    const role = await store.getRole()
    console.log(departments)
    console.log(role)
    const roleNames = role.map(role => role.title)

    const employeeAnswers = await inquirer.prompt([
        ...questions.addEmployee,
        // which department?
        {
            name: "department",
            type: "list",
            message: "Which Department?",
            choices: departments
        },
        // what role?
        {
            name: "role",
            type: "list",
            message: "Which role?",
            choices: roleNames
        },
    ])
    console.log(employeeAnswers)
    // Create new employee
    }
    catch(e){
        console.log(e)
    }

    userMenu();
}

async function querysearchByName(){
    const {name} = inquirer.prompt(questions.querysearchByName)
    store.searchByName(name);

    userMenu();
}

userMenu()