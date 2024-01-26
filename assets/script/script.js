
    // Função para iniciar o efeito de digitação contínua
    function startTypingAnimation() {
        const headerText = document.getElementById("typing-header");
        const text = "Lorem ipsum dolor sit amet consectetur";
        let index = 0;
    
        function type() {
            headerText.textContent = text.slice(0, index);
            if (index < text.length) {
                index++;
                setTimeout(type, 100); // Ajuste a velocidade de digitação conforme desejado
            } else {
                // Quando a animação terminar, reinicie
                index = 0;
                setTimeout(type, 1000); // Espera 1 segundo antes de reiniciar
            }
        }
    
        type();
    }

    // Inicie a animação quando o documento estiver pronto
    document.addEventListener("DOMContentLoaded", startTypingAnimation);

    ScrollReveal().reveal('.sr', {
        duration: 1000, // Duração da animação em milissegundos
        origin: 'bottom', // Origem da animação
        distance: '20px', // Distância de deslocamento
        delay: 200, // Atraso entre animações
        reset: true // Para que a animação seja executada novamente ao rolar para cima e para baixo
    });
