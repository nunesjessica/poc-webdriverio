'use strict';
class Page {
    constructor(){

    }
    open(path) {
         browser.url(path);
         
    }
    write_input(element, word) {
        $(element).setValue(word);
    }
    click_buttons(button_id){
        $(button_id).click();
    }

    get_alert(alert_id){
        return $(alert_id).getText();
    }
}

module.exports = Page;
