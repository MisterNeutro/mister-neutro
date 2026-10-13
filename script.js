const form = document.getElementById('buildForm');
const result = document.getElementById('buildResult');
const names = {
  Knight: 'Knight — foco sugerido: resistência, combate corpo a corpo e sobrevivência.',
  Paladin: 'Paladin — foco sugerido: dano à distância, posicionamento e equilíbrio entre ataque e defesa.',
  Sorcerer: 'Sorcerer — foco sugerido: dano mágico, gerenciamento de mana e posicionamento seguro.',
  Druid: 'Druid — foco sugerido: suporte, cura, magia e coordenação em grupo.'
};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const vocation = document.getElementById('vocation').value;
  const level = Math.max(1, Number(document.getElementById('level').value) || 1);
  const build = document.getElementById('buildType').value;
  const focus = {
    Physical: 'priorize seu estilo de dano físico e os equipamentos adequados à sua vocação',
    Balanced: 'busque equilíbrio entre dano, proteção e custo dos equipamentos',
    Defensive: 'priorize sobrevivência, resistência e preparação para o conteúdo'
  }[build];
  result.innerHTML = `<strong>Resumo da sua build</strong><br>Vocação: ${vocation} · Level: ${level.toLocaleString('pt-BR')} · Tipo: ${build}<br>${names[vocation]}<br>Próximo passo: ${focus}. <em>Este é um ponto de partida geral; confira os detalhes para sua versão e servidor.</em>`;
  result.classList.add('show');
});
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.getElementById('year').textContent = new Date().getFullYear();
