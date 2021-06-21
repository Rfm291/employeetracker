const store = require()
const inquirer = require('inquirer')
const questions = require('./utils/questions')
const {menu, searchByName} = require('./utils/questions')

async function userMenu () {
    const { choice } = await inquirer.prompt(menu);

    const formatedChoices = choice.toLowerCase().trim();
    switch (formatedChoices){
        case 'search by employee name': return querysearchByName()
        case 'add employee': return addEmployee()
    }
}

async function addEmployee(){
    const {name} = inquirer.prompt(questions.querysearchByName)
    

    userMenu();
}

async function querysearchByName(){
    const {name} = inquirer.prompt(questions.querysearchByName)
    store.searchByName(name);

    userMenu();
}

userMenu()