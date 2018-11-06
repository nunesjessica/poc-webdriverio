let expect = require('chai').expect;
let { Given, When, Then } = require('cucumber');

let NovoUserPage  = require('../pages/novo-usuario.page.js');

Given('que estou na página de criação de usuário', () => {
   NovoUserPage.open();
});

When('insiro todas as informações obrigatórias para criação', () => {
    NovoUserPage.write_name('nameTest');
    NovoUserPage.write_lastname('lastnameTest');
    NovoUserPage.write_email('emailTest@email.com');
});

When('clico no botão para submissão', () => {
    NovoUserPage.create_button_click();
});

Then('vejo o usuário criado com sucesso', () => {
    expect(NovoUserPage.user_message()).to.equal('Usuário Criado com sucesso');
});