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

  nbTeachers: 0,

  init: function() {
    console.log('Je suis dans la fonction init');

    app.createLanguageSelect();
    app.createSpecialitySelect();

    const languageSelect = document.querySelector('.languages');
    languageSelect.addEventListener('change', app.filterByLanguageOrSpeciality);

    const specialitySelect = document.querySelector('.specialities');
    specialitySelect.addEventListener('change', app.filterByLanguageOrSpeciality);
  },

  createNewElement: function(element, parent, attributes, content) {
    const newElement = document.createElement(element);
    
    for(let attribute in attributes)
    {
      let value = attributes[attribute];
      newElement.setAttribute(attribute, value);
    }

    newElement.textContent = content;

    parent.appendChild(newElement);

    return newElement;
  },

  createLanguageSelect: function() {
    console.log('Je suis dans la fonction createLanguageSelect');

    const container = document.getElementById('app');

    const form = app.createNewElement('form', container, {'class' : 'selectForm'});


    const select = app.createNewElement('select', form, {'class' : 'languages'});

    app.createNewElement('option', select, {
      'value' : 'placeholder', 'disabled' : 'disabled', 'selected' : 'selected'
    }, 'Choisissez un langage');

    app.createNewElement('option', select, {'value' : 'JavaScript'}, 'JavaScript');

    app.createNewElement('option', select, {'value' : 'PHP'}, 'PHP');
  },

  createSpecialitySelect: function() {
    console.log('Je suis dans la fonction createSpecialitySelect');

    const form = document.querySelector('.selectForm');

    const select = app.createNewElement('select', form, {'class' : 'specialities'});

    app.createNewElement('option', select,{'value' : 'placeholder', 'disabled' : 'disabled', 'selected' : 'selected'}, 'Choisissez une spécialité');

    app.createNewElement('option', select, {'value' : 'React'}, 'React');

    app.createNewElement('option', select, {'value' : 'Symfony'}, 'Symfony');

    app.createNewElement('option', select, {'value' : 'WordPress'}, 'WordPress');

    app.createNewElement('option', select, {'value' : 'Data'}, 'Data');
  },

  createOrModifyCounter: function() {

    if (document.querySelector('.counter') === null) {
    
      const form = document.querySelector('.selectForm');
      const counter = document.createElement('div');

      if (this.nbTeachers == 0) {
        counter.textContent = 'Aucun prof trouvé';
      } else if (this.nbTeachers == 1) {
        counter.textContent = '1 prof trouvé';
      } else {
        counter.textContent = this.nbTeachers + ' profs trouvés';
      }

      counter.setAttribute('class', 'counter');
      form.after(counter);

    } else {

      const counter = document.querySelector('.counter');
      if (this.nbTeachers == 0) {
        counter.textContent = 'Aucun prof trouvé';
      } else if (this.nbTeachers == 1) {
        counter.textContent = '1 prof trouvé';
      } else {
        counter.textContent = this.nbTeachers + ' profs trouvés';
      }
    }
  },

  createList: function(languageTeachers) {
    console.log('Je suis dans la fonction createList');

    const container = document.getElementById('app');
    const existingList = document.querySelector('.list');

    if (existingList !== null) {
      container.removeChild(existingList);
    }

    const list = app.createNewElement('ul', container, {'class' : 'list'})

    for (teacher of languageTeachers) {

      const listElement = app.createNewElement('li', list, {}, teacher.name);

      app.createNewElement('span', listElement, {}, teacher.base);

        app.createNewElement('span', listElement, {}, teacher.speciality);
    }
  },

  filterByLanguageOrSpeciality: function() {
    console.log('Je suis dans la fonction filterByLanguageOrSpeciality');

    const languagesSelect = document.querySelector('.languages');
    const specialitiesSelect = document.querySelector('.specialities');

    if (languagesSelect.value !== 'placeholder' && specialitiesSelect.value !== 'placeholder') {
      listTeachers = app.teachers.filter(
        (teacher) => languagesSelect.value === teacher.base && specialitiesSelect.value === teacher.speciality
      );
    } else {
      listTeachers = app.teachers.filter(
        (teacher) => languagesSelect.value === teacher.base || specialitiesSelect.value === teacher.speciality
      );
    }

    app.nbTeachers = listTeachers.length;

    app.createOrModifyCounter();
    app.createList(listTeachers);
  },

};

document.addEventListener('DOMContentLoaded', app.init);