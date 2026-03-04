document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');

    envelope.addEventListener('click', () => {
        // Aplica ou remove a classe 'open' que dispara as animações CSS
        envelope.classList.toggle('open');
    });
});