import  expect  from 'chai';

import { Given, When, Then } from 'cucumber';

Given('que estou na página de criação de usuário', function (){
    return browser.url("https://automacaocombatista.herokuapp.com/users/new")
});

When('insiro todas as informações obrigatórias para criação', function(){
    $('#user_name').setValue('test');
    $('#user_lastname').setValue('user');
    $('#user_email').setValue('user@test.com');
});

When('clico no botão para submissão', function(){
    $('//*[@name="commit"]').click();
});

Then('vejo o usuário criado com sucesso', function(){
    expect($('#notice').getText()).to.equal('Usuário Criado com sucesso');
});