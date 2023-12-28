const botao = document.getElementById("botao");
const divItens = document.getElementById("divItens");
const input = document.getElementById("todos");

let itens = [];
getLocalStorage();

botao.addEventListener('click', (_) => {
  if (!input.value) {
    return alert("Informe uma tarefa!");
  }
  itens.push(input.value);
  input.value = null;
  adicionarItens();
  addLocalStorage();
});

function adicionarItens() {
  divItens.innerHTML = `
    <div class="row">
      <div class="col">
        <h2>Tarefas: </h2>
      </div>
    </div>
  `;

  itens.forEach((item, i) => {
    let row = document.createElement('div');
    row.className = 'row mt-3';
    row.innerHTML = `
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            ${i} - ${item}
          </div>
        </div>
      </div>
    `
    divItens.appendChild(row);
  }); 
};

function addLocalStorage() {
  localStorage.setItem('itens', JSON.stringify(itens));
};

function getLocalStorage() {
  let localStorageItem = localStorage.getItem('itens');
  itens = localStorageItem ? JSON.parse(localStorageItem) : [];
  adicionarItens();
};

function excluir(_) {
  const idExclusao = prompt('Informe o id:');
  itens.splice(idExclusao, 1);
  adicionarItens();
  addLocalStorage();
}