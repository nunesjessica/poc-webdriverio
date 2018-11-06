let Page = require('./page');


class NovoUserPage extends Page {
    open() {
        super.open('https://automacaocombatista.herokuapp.com/users/new');
    }
    write_name(name) {
        super.write_input('#user_name', name);
    }
    write_lastname(lastname) {
        super.write_input('#user_lastname', lastname);
    }
    write_email(email) {
        super.write_input('#user_email', email);
    }
    create_button_click() {
        super.click_buttons('//*[@name="commit"]');
    }
    user_message() {
        return super.get_alert('#notice');
    }
}

module.exports = new NovoUserPage();