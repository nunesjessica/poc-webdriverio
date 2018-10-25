# POC Webdriver.IO + Cucumber


## Configurando o ambiente

## Pré requisito

* Node
* Chrome

### Instalar webdriver.io
````
npm install webdriverio
````

### Configurar o ambiente utilizando o wdio config
````
./node_modules/.bin/wdio config
````

### Criar o package.json 
````
npm init
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
