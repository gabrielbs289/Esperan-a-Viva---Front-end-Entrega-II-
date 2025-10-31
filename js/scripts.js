/* --- MÁSCRAS (Da Entrega I) --- */

function mascaraCPF(v) {
    v.value = v.value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}
function mascaraTelefone(v) {
    v.value = v.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{4})$/, '$1-$2');
}
function mascaraCEP(v) {
    v.value = v.value.replace(/\D/g, '').replace(/(\d{5})(\d{3})$/, '$1-$2');
}

document.addEventListener('DOMContentLoaded', function () {

    // Conecta máscaras aos inputs
    const cpf = document.getElementById('cpf');
    const tel = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    if (cpf) cpf.addEventListener('input', function () { mascaraCPF(this); });
    if (tel) tel.addEventListener('input', function () { mascaraTelefone(this); });
    if (cep) cep.addEventListener('input', function () { mascaraCEP(this); });

    /* --- LÓGICA DA ENTREGA II --- */

    // Requisito: Menu Hambúrguer
    const btnHamburger = document.querySelector('.btn-hamburger');
    const navMobile = document.getElementById('nav-mobile');

    if (btnHamburger && navMobile) {
        btnHamburger.addEventListener('click', function () {
            const estaAtivo = navMobile.classList.toggle('ativo');
            btnHamburger.setAttribute('aria-expanded', estaAtivo);
            if (estaAtivo) {
                btnHamburger.setAttribute('aria-label', 'Fechar menu');
            } else {
                btnHamburger.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }

    // Requisito: Componentes de feedback (Alerts) no formulário
    const form = document.getElementById('form-cadastro');
    const mensagem = document.getElementById('mensagem');

    if (form && mensagem) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio real do formulário
            
            // Limpa mensagens anteriores
            mensagem.innerHTML = '';
            mensagem.className = '';

            if (form.checkValidity()) {
                // Sucesso
                mensagem.textContent = 'Cadastro enviado com sucesso (simulado). Obrigado!';
                mensagem.classList.add('alert', 'alert-sucesso');
                form.reset();
            } else {
                // Erro
                mensagem.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
                mensagem.classList.add('alert', 'alert-erro');
                form.reportValidity(); // Mostra os balões de erro nativos do HTML5
            }
        });
    }

});
