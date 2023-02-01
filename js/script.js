const app = {

  teachers: [
    {
      name: 'Loris',
      base: 'PHP',
      speciality: 'WordPress',
    },
    {
      name: 'Jean',
      base: 'JavaScript',
      speciality: 'Data',
    },
    {
      name: 'Jean-Christophe',
      base: 'PHP',
      speciality: 'Symfony',
    },
    {
      name: 'Jean-Philippe',
      base: 'PHP',
      speciality: 'Symfony',
    },
    {
      name: 'Julien',
      base: 'PHP',
      speciality: 'React',
    },
    {
      name: 'Vincent',
      base: 'JavaScript',
      speciality: 'React',
    },
    {
      name: 'Tony',
      base: 'JavaScript',
      speciality: 'React',
    },
  ],

  init: function() {
    console.log('Je suis dans la fonction init');

    app.createSelect();
    // app.createCounter();
    // app.createList();

    const languageSelect = document.querySelector('.languages');
    languageSelect.addEventListener('change', app.filterByLanguage);
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
    if (document.querySelector('.counter') === null) {
    
      const select = document.querySelector('.languages');
      const counter = document.createElement('div');
      counter.textContent = this.nbTeachers + ' profs trouvés';
      counter.setAttribute('class', 'counter');
      select.after(counter);

    } else {
      const counter = document.querySelector('.counter');
      counter.textContent = this.nbTeachers + ' profs trouvés';
    }
  },

  createList: function(languageTeachers) {
    console.log('Je suis dans la fonction createList');

    const container = document.getElementById('app');
    const existingList = document.querySelector('.list');

    if (existingList !== null) {
      container.removeChild(existingList);
    }

    const list = document.createElement('ul');
    list.setAttribute('class', 'list')
    container.appendChild(list);

    for (teacher of languageTeachers) {

      const listElement = document.createElement('li');
      listElement.textContent = teacher.name;
      list.appendChild(listElement);

      const tag = document.createElement('span');
      tag.textContent = teacher.base;
      listElement.appendChild(tag);
    }
  },

  filterByLanguage: function(event) {
    const languageTeachers = app.teachers.filter(
      (teacher) => event.target.value === teacher.base
    );

    app.nbTeachers = languageTeachers.length;

    app.createCounter();
    app.createList(languageTeachers);
  },

};

document.addEventListener('DOMContentLoaded', app.init);