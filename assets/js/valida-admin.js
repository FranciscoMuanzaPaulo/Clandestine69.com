
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('userLogin').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Obtém os valores dos campos de email e senha
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        // Verifica se o email e a senha são válidos
        if (email === 'franciscomuanza2@gmail.com' && password === '123456') {
            window.location.href = 'admin-dashboard.html'; // Redireciona para a página agent-dashboard.html
        } else{
            alert('Email ou senha incorretos.'); // Mostra uma mensagem de erro
        }
    });
});