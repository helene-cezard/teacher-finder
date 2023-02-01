const app = {

  init: function() {
    console.log('Je suis dans la fonction init');

    app.createSelect();
    app.createCounter();
    app.createList();
  },

  createSelect: function() {
    console.log('Je suis dans la fonction createSelect');

    const container = document.getElementById('app');
    const form = document.createElement('form');
    container.appendChild(form);

    const select = document.createElement('select');
    select.setAttribute('class', 'languages');
    form.appendChild(select);

    const javaScriptOption = document.createElement('option');
    javaScriptOption.textContent = 'JavaScript';
    javaScriptOption.setAttribute('value', 'JavaScript');
    select.appendChild(javaScriptOption);

    const phpOption = document.createElement('option');
    phpOption.textContent = 'PHP';
    phpOption.setAttribute('value', 'PHP');
    select.appendChild(phpOption);
  },

  createCounter: function(count) {
    // const container = document.getElementById('app');
    const select = document.querySelector('.languages');
    const counter = document.createElement('div');
    counter.textContent = '3 profs trouvés';
    counter.setAttribute('class', 'counter');
    // container.appendChild(counter);
    select.after(counter);
  },

  createList: function() {
    console.log('Je suis dans la fonction createList');

    const container = document.getElementById('app');
    const list = document.createElement('ul');
    list.setAttribute('class', 'list')
    container.appendChild(list);

    for (let index = 0; index < 5; index++) {

      const listElement = document.createElement('li');
      listElement.textContent = 'Machin';
      list.appendChild(listElement);

      const tag = document.createElement('span');
      tag.textContent = 'Truc';
      listElement.appendChild(tag);
    }
  },

};

document.addEventListener('DOMContentLoaded', app.init);