let expect = require('chai').expect;
let { Given, When, Then } = require('cucumber');

let newUserPage  = require('../pages/novo-usuario.page.js');

Given('que estou na página de criação de usuário', () => {
    newUserPage.open();
});

When('insiro todas as informações obrigatórias para criação', () => {
    newUserPage.write_required_fields('nameTest', 'lastnameTest', 'emailTest@email.com');
});

When('clico no botão para submissão', () => {
    newUserPage.submit();
});

Then('vejo o usuário criado com sucesso', () => {
    expect(newUserPage.alert_text()).to.equal('Usuário Criado com sucesso');
});