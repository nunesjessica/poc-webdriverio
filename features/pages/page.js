
class Page {

    open(url) {
         browser.url(url);

         return this;
         
    }
    get alert_message() {
        return browser.$('#notice');
    }
    alert_text(){
        return this.alert_message.getText();
    }

}

module.exports = Page;
