"use strict"

const Page = require('./page');


class NovoUserPage extends Page {
    open() {
        super.open('https://automacaocombatista.herokuapp.com/users/new'); 
    } 
    get name() {
        return browser.$('#user_name');
    }
    get lastname() {
        return browser.$('#user_lastname');
    }
    get email() {
        return browser.$('#user_email');
    }
    get submitbutton() {
        return '//*[@name="commit"]';
    }
    write_required_fields(name, lastname, email){
        this.name.setValue(name);
        this.lastname.setValue(lastname);
        this.email.setValue(email);
    }
    submit(){
        browser.click(this.submitbutton);
    }
    
}

module.exports = new NovoUserPage();