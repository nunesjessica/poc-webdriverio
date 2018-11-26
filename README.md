# POC Webdriver.IO + Cucumber

## Prerequisites

* Node
* Chrome

### Install dependences
````
npm install
````

### Install Selenium Standalone
````
npm run selenium-install
````

### Start Selenium
````
npm run selenium-start
````

### Run tests
````
npm run tests
````

### Chrome Headless

To use the Chrome Headless you need to config the [wdio.conf.js](https://github.com/nunesjessica/poc-webdriverio/blob/master/wdio.conf.js) whith this code
````
capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
            binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
        }

    }]

````
