function gerarCurriculo() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const linkedin = document.getElementById('linkedin').value;
    const resumo = document.getElementById('resumo').value;
    const formacao = document.getElementById('formacao').value;
    const experiencia = document.getElementById('experiencia').value;
    const habilidades = document.getElementById('habilidades').value;

    // Validação de campos
    if (!nome || !email || !telefone || !resumo || !formacao || !experiencia || !habilidades) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    const curriculoTexto = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>${nome}</h2>
            <p><strong>Email:</strong> ${email} | <strong>Telefone:</strong> ${telefone} | <strong>LinkedIn:</strong> ${linkedin}</p>

            <h3>Resumo Profissional</h3>
            <p>${resumo}</p>

            <h3>Formação Acadêmica</h3>
            <p>${formacao}</p>

            <h3>Experiência Profissional</h3>
            <p>${experiencia}</p>

            <h3>Habilidades</h3>
            <p>${habilidades}</p>
        </div>
    `;

    const curriculoElement = document.getElementById('curriculo-texto');
    curriculoElement.innerHTML = curriculoTexto;

    // Adiciona botão para download em PDF
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Baixar Currículo em PDF';
    downloadButton.style.marginTop = '20px';
    downloadButton.onclick = function() {
        gerarPDF(curriculoTexto);
    };

    curriculoElement.appendChild(downloadButton);
}

function gerarPDF(curriculoTexto) {
    const { jsPDF } = window.jspdf; // Importa a biblioteca jsPDF

    const doc = new jsPDF();
    doc.fromHTML(curriculoTexto, 15, 15, {
        width: 180,
    });
    doc.save('curriculo.pdf');
}