window.onload = function () {
    const image = document.getElementById("image");

    if (image) { // Verifica se a imagem existe antes de aplicar a animação
        image.style.display = "block"; // Torna a imagem visível
        setTimeout(() => {
            image.classList.add("show"); // Adiciona a classe para o efeito fade-in
        }, 100); // Pequeno atraso para melhor transição
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const commentBox = document.getElementById("comment-box");
    const submitButton = document.getElementById("submit-comment");
    const commentList = document.getElementById("comment-list");

    // Adiciona evento ao botão de enviar
    submitButton.addEventListener("click", function () {
        let commentText = commentBox.value.trim(); // Remove espaços extras

        if (commentText !== "") {
            let commentItem = document.createElement("li");
            commentItem.textContent = commentText;

            // Adiciona o comentário à lista
            commentList.appendChild(commentItem);

            // Limpa a caixa de texto
            commentBox.value = "";
        } else {
            alert("Por favor, digite um comentário antes de enviar.");
        }
    });
});
/* ==== ================================= tela de login ===================================== ==== */

// Função para validar o login
function validarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    // Obtém o botão de envio e o campo de mensagem
    const botaoLogin = document.querySelector('button[type="submit"]');
    const mensagemErro = document.getElementById('mensagem-erro');

    // Limpa a mensagem de erro
    mensagemErro.innerHTML = '';

    // Valida se os campos estão vazios
    if (usuario === '' || senha === '') {
        mensagemErro.innerHTML = 'Por favor, preencha todos os campos!';
        mensagemErro.style.color = 'red';
        return;
    }

    // Simula o envio de dados e muda o botão de cor
    botaoLogin.style.backgroundColor = '#f39c12';
    botaoLogin.textContent = 'Aguardando...';

    // Simula uma "resposta" após 2 segundos (pode ser substituído por uma chamada AJAX real)
    setTimeout(() => {
        // Aqui você pode adicionar uma verificação real, como uma consulta ao servidor

        // Simula uma verificação simples de login
        if (usuario === 'admin' && senha === '12345') {
            alert('Login realizado com sucesso!');
            window.location.href = 'pagina_inicial.html'; // Redireciona para outra página (por exemplo, a página inicial)
        } else {
            alert('Usuário ou senha incorretos.');
        }

        // Restaura o botão após a tentativa de login
        botaoLogin.style.backgroundColor = '#2ecc71';
        botaoLogin.textContent = 'Entrar';
    }, 2000);
}

// Função para ativar a validação quando o formulário for enviado
document.querySelector('form').addEventListener('submit', validarLogin);

/* ==== ================================= cadastro ===================================== ==== */

// Função para validar o cadastro
function validarCadastro(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const nome = document.getElementById('nome').value;
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    // Obtém o botão de cadastro e o campo de mensagem
    const botaoCadastro = document.getElementById('cadastro-btn');
    const mensagemErro = document.getElementById('error-message');

    // Limpa a mensagem de erro
    mensagemErro.innerHTML = '';

    // Valida se os campos estão vazios
    if (nome === '' || usuario === '' || email === '' || senha === '' || confirmaSenha === '') {
        mensagemErro.innerHTML = 'Por favor, preencha todos os campos!';
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmaSenha) {
        mensagemErro.innerHTML = 'As senhas não coincidem!';
        return;
    }

    // Altera o estado do botão de cadastro
    botaoCadastro.textContent = 'Aguarde...';
    botaoCadastro.style.backgroundColor = '#f39c12';

    // Simula uma "requisição" de cadastro com setTimeout
    setTimeout(() => {
        // Simulação de cadastro bem-sucedido
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html'; // Redireciona para a página de login após cadastro
    }, 2000); // Simula 2 segundos de requisição

    // Restaura o botão após a tentativa de cadastro
    botaoCadastro.textContent = 'Cadastrar';
    botaoCadastro.style.backgroundColor = '#2ecc71';
}

// Associa a função de validação ao envio do formulário
document.getElementById('cadastro-form').addEventListener('submit', validarCadastro);
