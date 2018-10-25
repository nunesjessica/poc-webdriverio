var expect = require('chai').expect;

var {Given, When, Then} = require('cucumber');

Given('que estou na página de criação de usuário', function (){
    return browser.url("https://automacaocombatista.herokuapp.com/users/new")
});

When('insiro todas as informações obrigatórias para criação', function(){
    $('#user_name').setValue('test');
    $('#user_lastname').setValue('user');
    $('#user_email').setValue('user@test.com');
    $('//*[@name="commit"]').click();

});

Then('vejo o usuário criado com sucesso', function(){
    expect($('#notice').getText()).to.equal('Usuário Criado com sucesso');
});