// Seleciona todos os botões com a classe "joinButton"
const joinButtons = document.querySelectorAll('.joinButton');

// Itera sobre todos os botões selecionados
joinButtons.forEach(function(button) {
    // Adiciona um evento de clique a cada botão
    button.addEventListener('click', function() {
        // Exibe a mensagem quando o botão é clicado
        window.alert('Obrigado por entrar na nossa lista de espera');
    });
});
