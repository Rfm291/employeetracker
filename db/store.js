const connection = require('./connection');

class Store{
    constructor(connection){
        this.connection = connection;
    }

    read() {
        return this.connection.query("SELECT * FROM employee;");
    }
    searchByname(name){
        return this.connection.query("SELECT * FROM")
    }
}

module.exports = new Store(connection);