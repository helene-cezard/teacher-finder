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

  createLanguageSelect: function() {
    console.log('Je suis dans la fonction createLanguageSelect');

    const container = document.getElementById('app');
    const form = document.createElement('form');
    form.setAttribute('class', 'selectForm');
    container.appendChild(form);

    const select = document.createElement('select');
    select.setAttribute('class', 'languages');
    form.appendChild(select);

    const placeHolder = document.createElement('option');
    placeHolder.textContent = 'Choisissez un language';
    placeHolder.setAttribute('disabled', 'disabled');
    placeHolder.setAttribute('selected', 'selected');
    placeHolder.setAttribute('value', 'placeholder')
    select.appendChild(placeHolder);

    const javaScriptOption = document.createElement('option');
    javaScriptOption.textContent = 'JavaScript';
    javaScriptOption.setAttribute('value', 'JavaScript');
    select.appendChild(javaScriptOption);

    const phpOption = document.createElement('option');
    phpOption.textContent = 'PHP';
    phpOption.setAttribute('value', 'PHP');
    select.appendChild(phpOption);
  },

  createSpecialitySelect: function() {
    console.log('Je suis dans la fonction createSpecialitySelect');

    const form = document.querySelector('.selectForm');

    const select = document.createElement('select');
    select.setAttribute('class', 'specialities');
    form.appendChild(select);

    const placeHolder = document.createElement('option');
    placeHolder.textContent = 'Choisissez une spécialité';
    placeHolder.setAttribute('disabled', 'disabled');
    placeHolder.setAttribute('selected', 'selected');
    placeHolder.setAttribute('value', 'placeholder')

    select.appendChild(placeHolder);

    const reactOption = document.createElement('option');
    reactOption.textContent = 'React';
    reactOption.setAttribute('value', 'React');
    select.appendChild(reactOption);

    const symfonyOption = document.createElement('option');
    symfonyOption.textContent = 'Symfony';
    symfonyOption.setAttribute('value', 'Symfony');
    select.appendChild(symfonyOption);

    const wordpressOption = document.createElement('option');
    wordpressOption.textContent = 'WordPress';
    wordpressOption.setAttribute('value', 'WordPress');
    select.appendChild(wordpressOption);

    const dataOption = document.createElement('option');
    dataOption.textContent = 'Data';
    dataOption.setAttribute('value', 'Data');
    select.appendChild(dataOption);
  },

  createOrModifyCounter: function() {

    if (document.querySelector('.counter') === null) {
    
      const form = document.querySelector('.selectForm');
      const counter = document.createElement('div');
      counter.textContent = this.nbTeachers + ' profs trouvés';
      counter.setAttribute('class', 'counter');
      form.after(counter);

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

      const SpecialityTag = document.createElement('span');
        SpecialityTag.textContent = teacher.speciality;
        listElement.appendChild(SpecialityTag);
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
      console.log('coucou');
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