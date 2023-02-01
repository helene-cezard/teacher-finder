const app = {

  init: function() {
    console.log('Je suis dans la fonction init');

    app.createSelect();
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

};

document.addEventListener('DOMContentLoaded', app.init);