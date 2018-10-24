var expect = require('chai').expect;
var assert = require('assert');

var {Given, When, Then} = require('cucumber');

Given('que estou na página de criação de usuário', function (){
    return browser.url("https://automacaocombatista.herokuapp.com/users/new")
});

When('insiro todas as informações necessárias para criação', function(){
    browser.element('//*[@id="user_name"]').setValue('test');
    browser.element('//*[@id="user_lastname"]').setValue('user');
    browser.element('//*[@id="user_email"]').setValue('user@test.com');
    browser.click('//*[@id="new_user"]/div[5]/div/div/input')

});

Then('vejo o usuário criado com sucesso', function(){
    assert.equal(browser.element('//*[@id="notice"]').getText(),'Usuário Criado com sucesso');
});