const expect = require('chai').expect;
const { Given, When, Then } = require('cucumber');

Given('que estou na página de criação de usuário', () => 
   browser.url('https://automacaocombatista.herokuapp.com/users/new')
);

When('insiro todas as informações obrigatórias para criação', () => {
    $('#user_name').setValue('test');
    $('#user_lastname').setValue('user');
    $('#user_email').setValue('user@test.com');
});

When('clico no botão para submissão', () => {
    $('//*[@name="commit"]').click();
});

Then('vejo o usuário criado com sucesso', () => {
    expect($('#notice').getText()).to.equal('Usuário Criado com sucesso');
});