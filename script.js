function abrirModal() {
  document.getElementById('modalCardapio').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modalCardapio').style.display = 'none';
}

let indiceAtual = 0;
const itensPorTela = 3;
const tempoTroca = 4000; // tempo em milissegundos (4 segundos)

function moverCarrossel(direcao = 1) {
  const carrossel = document.querySelector('.carrossel');
  const totalItens = document.querySelectorAll('.carrossel-item').length;
  const totalPaginas = Math.ceil(totalItens / itensPorTela);

  indiceAtual += direcao;

  if (indiceAtual < 0) indiceAtual = totalPaginas - 1;
  if (indiceAtual >= totalPaginas) indiceAtual = 0;

  const larguraItem = document.querySelector('.carrossel-item').offsetWidth;
  carrossel.style.transform = `translateX(-${indiceAtual * larguraItem * itensPorTela}px)`;
}

// Auto-scroll a cada X segundos
setInterval(() => {
  moverCarrossel(1);
}, tempoTroca);

