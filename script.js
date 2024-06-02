function cadastrar(){
    var nome = document.querySelector('#nome').value;
    var nick = document.querySelector('#nickname').value;
    var email = document.querySelector('#email').value;
    
    window.alert(`Parabéns ${nome}! Sua conta com o nickname ${nick} foi criada no email ${email}, não esqueca de anotar sua senha!`);
}