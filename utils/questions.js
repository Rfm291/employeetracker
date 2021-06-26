module.exports = {
    menu: {
        name: "choice",
        type: "list",
        message: "Next Step",
        choices: ["search by employee", "add employee", "exit"]
    },

    searchByName: {
        name: "name",
        message: "Employee name?",
    },

    addEmployee: [
        {
        name: "first name",
        message: "What is the employee's first name?"
        },
        {
        name: "last name",
        message: "What is the employee's last name?"
        },
        {
        name: "role_id",
        message: "What is the employee's role?"
        },
        {
        name: "manager_id",
        message: "What is the manager's ID"
        },
    ],

};