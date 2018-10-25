# POC Webdriver.IO + Cucumber

## Pré requisito

* Node
* Chrome

### Instalando as dependências do projeto
````
npm install
````

### Instalando Selenium Standalone
````
npm run selenium-install
````

### Levantando o Selenium
````
npm run selenium-start
````

### Rodando os testes
````
npm run tests
````

### Chrome Headless

Para executar os testes utilizando o Chrome Headless é necessário adicionar a seguinte configuração ao arquivo [wdio.conf.js](https://github.com/nunesjessica/poc-webdriverio/blob/master/wdio.conf.js)
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
