$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000'),
    $('#cpf').mask('000.000.000-00'),
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true 
            },
            cep: {
                required: true 
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu Nome',
            telefone: 'Por favor, insira seu Telefone',
            email: 'Por favor, insira seu E-mail',
            cep: 'Por favor, insira seu CEP',
            cpf: 'Por favor, insira seu CPF',
            endereco: 'Por favor, insira seu Endereço',
        },
        submitHandler: function(form){
            alert ('Seu cadastro foi enviado ao RH, logo entraremos em contato.')
        }
        
    })
})