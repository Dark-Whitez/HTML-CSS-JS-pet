(() => {
  const contactsList = [];
  const selectList = [];

  function editForm(editNameInput, editSurnameInput, editLastNameInput) {
    let inputSurnameLength = editSurnameInput.value;
    const lableSurname = document.getElementById('editSurname');
    if (inputSurnameLength.length > 0) {
      lableSurname.classList.add('add__form-input-txt');
    } else {
      lableSurname.classList.remove('add__form-input-txt');
    };

    let inputNameLength = editNameInput.value;
    const lableName = document.getElementById('editName');
    if (inputNameLength.length > 0) {
      lableName.classList.add('add__form-input-txt');
    } else {
      lableName.classList.remove('add__form-input-txt');
    };

    let inputLastLength = editLastNameInput.value;
    const lableLast = document.getElementById('editLast');
    if (inputLastLength.length > 0) {
      lableLast.classList.add('add__form-input-txt');
    } else {
      lableLast.classList.remove('add__form-input-txt');
    };
  };

  function icon(type) {
    let hrefAttribute;
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 16 16');
    icon.setAttribute('width', '16');
    icon.setAttribute('height', '16');
    if (type === 'phone') {
      icon.setAttribute('fill', 'white');
      const phoneCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      phoneCircle.setAttribute('cx', '8');
      phoneCircle.setAttribute('cy', '8');
      phoneCircle.setAttribute('r', '8');
      phoneCircle.setAttribute('fill', '#9873FF');
      const pathPhoneIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathPhoneIcon.setAttribute('d', 'M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z');
      icon.append(phoneCircle, pathPhoneIcon);
      hrefAttribute = 'tel:';
    } else {
      if (type === 'otherPhone') {
        icon.setAttribute('fill', '#9873FF');
        const pathOtherIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathOtherIcon.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z');
        icon.append(pathOtherIcon);
      } else {
        if (type === 'email') {
          icon.setAttribute('fill', '#9873FF');
          const pathMailIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          pathMailIcon.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z');
          icon.append(pathMailIcon);
          hrefAttribute = 'mailto:';
        } else {
          if (type == 'vk') {
            icon.setAttribute('fill', '#9873FF');
            const pathVkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathVkIcon.setAttribute('d', 'M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z');
            icon.append(pathVkIcon);
          } else {
            icon.setAttribute('fill', '#9873FF');
            const pathFbIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathFbIcon.setAttribute('d', 'M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z');
            icon.append(pathFbIcon);
          };
        };
      };
    };
    return {
      icon,
      hrefAttribute,
    };
  };

  function editContactList(type, contactListEdit, areaFormEdit) {
    const item = document.createElement('li');
    item.classList.add('add__form-item-contact');

    const div = document.createElement('div');
    div.classList.add('input-group');

    const divPrepend = document.createElement('div');
    divPrepend.classList.add('input-group-append');
    const select = document.createElement('select');
    select.name = 'contact';
    select.id = 'optionForm';
    select.classList.add('form-select', 'add__form-select');
    const optionItem = ['Телефон', 'Доп.телефон', 'Email', 'Vk', 'Facebook'];
    const optionValue = ['phone', 'otherPhone', 'email', 'vk', 'facebook'];
    for (let i = 0; i < optionItem.length; i++) {
      const option = document.createElement('option');
      option.value = optionValue[i];
      option.id = i;
      option.innerHTML = optionItem[i];
      if (optionValue[i] == type) {
        option.setAttribute('selected', true);
      }
      if (selectList.length < 5) {
        selectList.push({
          id: option.id,
          type: optionValue[i],
        });
      };
      select.append(option);
    };
    divPrepend.append(select);

    const input = document.createElement('input');
    input.classList.add('form-control', 'add__form-contact-input');
    input.id = 'contact';
    input.placeholder = "Введите данные контакта";

    const divAppend = document.createElement('div');
    divAppend.classList.add('input-group-append');
    const button = document.createElement('button');
    button.classList.add('add__form-contact-btn', 'edit__form-contact-btn');
    const btnIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    btnIcon.setAttribute('viewBox', '0 0 12 12');
    btnIcon.setAttribute('width', '12');
    btnIcon.setAttribute('height', '12');
    const pathBtnIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathBtnIcon.setAttribute('d', 'M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z');
    btnIcon.append(pathBtnIcon);
    button.append(btnIcon);
    divAppend.append(button);

    div.append(divPrepend, input, divAppend);
    item.append(div);

    input.addEventListener('change', () => {
      divAppend.style.display = 'block';
    });

    button.addEventListener('click', (e) => {
      e.preventDefault();

      item.remove();
      if (contactListEdit.children.length == 0) {
        contactListEdit.style.display = 'none';
        areaFormEdit.style.paddingTop = '8px';
        areaFormEdit.style.paddingBottom = '8px';
      };
    });

    return {
      item,
      input,
      select,
      button,
    };
  };

  function getClientsItem(clientsObj, { onEdit, onDelete }) {
    const itemId = document.createElement('td');
    itemId.classList.add('clients__table-body-row-item');
    itemId.setAttribute('scope', ' row');
    const itemIdSpan = document.createElement('span');
    itemIdSpan.classList.add('clients__table-body-row-item-id');
    const idItem = clientsObj.id;

    const itemFio = document.createElement('td');
    itemFio.classList.add('clients__table-body-row-item');
    const itemFioSpan = document.createElement('span');
    itemFioSpan.classList.add('clients__table-body-row-item-txt');

    const itemDateCreate = document.createElement('td');
    itemDateCreate.classList.add('clients__table-body-row-item');
    const itemDateCreateDate = document.createElement('span');
    itemDateCreateDate.classList.add('clients__table-body-row-item-txt', 'clients__table-body-row-item-date');
    const itemDateCreateClock = document.createElement('span');
    itemDateCreateClock.classList.add('clients__table-body-row-item-txt', 'clients__table-body-row-item-clock');

    const itemLastEdit = document.createElement('td');
    itemLastEdit.classList.add('clients__table-body-row-item');
    const itemLastEditDate = document.createElement('span');
    itemLastEditDate.classList.add('clients__table-body-row-item-txt', 'clients__table-body-row-item-date')
    const itemLastEditClock = document.createElement('span');
    itemLastEditClock.classList.add('clients__table-body-row-item-txt', 'clients__table-body-row-item-clock');

    const itemContact = document.createElement('td');
    itemContact.classList.add('clients__table-body-row-item');

    const itemAction = document.createElement('td');
    itemAction.classList.add('clients__table-body-row-item');

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('btn-group', 'clients__table-body-btn');

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('btn', 'clients__table-body-btn-edit');
    buttonEdit.id = 'btnEdit';
    const buttonEditTxt = document.createElement('span');
    buttonEditTxt.classList.add('clients__table-body-row-item-txt', 'clients__table-body-btn-edit-txt')
    buttonEditTxt.innerHTML = 'Изменить';
    const buttonEditIcon = document.createElement('span');
    buttonEditIcon.classList.add('clients__table-body-btn-edit-icon');
    buttonEdit.append(buttonEditIcon, buttonEditTxt);

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn', 'clients__table-body-btn-delete');
    buttonDelete.id = 'btnDelete';
    const buttonDeleteTxt = document.createElement('span');
    buttonDeleteTxt.classList.add('clients__table-body-row-item-txt', 'clients__table-body-btn-delete-txt')
    buttonDeleteTxt.innerHTML = 'Удалить';
    const buttonDeleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    buttonDeleteIcon.setAttribute('viewBox', '0 0 16 16');
    buttonDeleteIcon.setAttribute('width', '16');
    buttonDeleteIcon.setAttribute('height', '16');
    const pathButtonDeleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathButtonDeleteIcon.setAttribute('d', 'M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z');
    pathButtonDeleteIcon.setAttribute('fill', '#F06A4D')
    buttonDeleteIcon.append(pathButtonDeleteIcon);
    buttonDelete.append(buttonDeleteIcon, buttonDeleteTxt);
    buttonDiv.append(buttonEdit, buttonDelete);

    let options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    let optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
    };

    let linkItem;
    const linkList = document.createElement('ul');
    linkList.classList.add('clients__table-body-list')
    const listItemLast = document.createElement('li');
    const more = document.createElement('span');
    const tmpMore = [];
    for (let i = 0; i < clientsObj.contacts.length; i++) {
      const listItem = document.createElement('li');
      listItem.classList.add('clients__table-body-item');
      const link = document.createElement('a');
      if (clientsObj.contacts.length > 1) {
        link.setAttribute('name', clientsObj.contacts[i].type);
        linkItem = icon(clientsObj.contacts[i].type);
        if (linkItem.hrefAttribute === 'tel:') {
          link.title = `${clientsObj.contacts[i].value}`;
          link.href = `${linkItem.hrefAttribute}${clientsObj.contacts[i].value}`;
        } else {
          if (linkItem.hrefAttribute === 'mailto:') {
            link.title = `mail: ${clientsObj.contacts[i].value}`;
            link.href = `${linkItem.hrefAttribute} ${clientsObj.contacts[i].value}`;
          } else {
            link.title = `${clientsObj.contacts[i].type}: ${clientsObj.contacts[i].value}`;
            link.href = clientsObj.contacts[i].value;
          };
        };
        link.classList.add('clients__table-body-item-icon');
        link.append(linkItem.icon);
        listItem.append(link);
        if (i <= 4) {
          if (i == 4) {
            listItemLast.classList.add('clients__table-body-item');
            more.classList.add('clients__table-body-item-icon', 'clients__table-body-item-icon-circle');
            more.id = 'moreBtn';
            more.innerHTML = `+${clientsObj.contacts.length - i}`;
            tmpMore.push({
              id: idItem,
              length: clientsObj.contacts.length - i,
            });
            link.classList.add('clients__table-body-item-icon-hidden');
            listItemLast.append(more);
            linkList.append(listItemLast);
          };
        } else {
          link.classList.add('clients__table-body-item-icon-hidden');
        }
        linkList.append(listItem);
      } else {
        link.setAttribute('name', clientsObj.contacts[i].type);
        linkItem = icon(clientsObj.contacts[i].type);
        link.classList.add('clients__table-body-item-icon');
        if (linkItem.hrefAttribute === 'tel:') {
          link.href = `${linkItem.hrefAttribute}${clientsObj.contacts[i].value}`;
        } else {
          if (linkItem.hrefAttribute === 'mailto:') {
            link.href = `${linkItem.hrefAttribute}${clientsObj.contacts[i].value}`;
          } else {
            link.href = clientsObj.contacts[i].value;
          };
        };
        link.append(linkItem.icon);
        listItem.append(link);
        linkList.append(listItem);
      };
    };
    itemContact.append(linkList);

    more.addEventListener('click', (e) => {
      e.preventDefault();

      const row = document.getElementById(idItem);
      const linkHidden = document.querySelectorAll('.clients__table-body-item-icon-hidden');
      for (const element of tmpMore) {
        if (element.id == row.id) {
          for (let i = 0; i < element.length; i++) {
            linkHidden[i].classList.remove('clients__table-body-item-icon-hidden');
          }
        };
      };
      listItemLast.style.display = 'none';
    });

    itemIdSpan.innerHTML = clientsObj.id;

    itemFioSpan.innerHTML = clientsObj.surname + ' ' + clientsObj.name + ' ' + clientsObj.lastName;

    itemDateCreateDate.innerHTML = new Date(clientsObj.createdAt).toLocaleDateString('ru-RU', options);
    itemDateCreateClock.innerHTML = new Date(clientsObj.createdAt).toLocaleTimeString('ru-RU', optionsTime);

    itemLastEditDate.innerHTML = new Date(clientsObj.updatedAt).toLocaleDateString('ru-RU', options);
    itemLastEditClock.innerHTML = new Date(clientsObj.updatedAt).toLocaleTimeString('ru-RU', optionsTime);

    itemId.append(itemIdSpan);
    itemFio.append(itemFioSpan);
    itemDateCreate.append(itemDateCreateDate, itemDateCreateClock);
    itemLastEdit.append(itemLastEditDate, itemLastEditClock);
    itemAction.append(buttonDiv);

    const openEditForm = document.querySelector('.edit__background');
    buttonEdit.addEventListener('click', async (e) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:3000/api/clients/${idItem}`);
      const clients = await response.json();

      const editId = document.getElementById('clientsId');
      const editNameInput = document.getElementById('nameEdit');
      const editSurnameInput = document.getElementById('surnameEdit');
      const editLastNameInput = document.getElementById('lastNameEdit');
      const addContactEdit = document.getElementById('EditContact');

      buttonEditIcon.classList.remove('clients__table-body-btn-edit-icon');
      buttonEditIcon.classList.add('clients__table-body-btn-edit-icon-load', 'clients__table-body-btn-edit-icon-load-anim');

      setTimeout(() => {
        if (response['status'] === 200) {
          buttonEditIcon.classList.remove('clients__table-body-btn-edit-icon-load', 'clients__table-body-btn-edit-icon-load-anim');
          buttonEditIcon.classList.add('clients__table-body-btn-edit-icon');
          openEditForm.style.display = 'grid';
        };
      }, 2000);

      editId.innerHTML = `ID: ${clients.id}`;

      editNameInput.value = clients.name;
      editSurnameInput.value = clients.surname;
      editLastNameInput.value = clients.lastName;

      editForm(editNameInput, editSurnameInput, editLastNameInput);

      let contactListEditAdd;
      const contactListEdit = document.getElementById('editContactsList');
      const areaFormEdit = document.querySelector('.edit__form-contact');

      if (clients.contacts.length > 0) {
        contactListEdit.style.display = 'block';
        areaFormEdit.style.paddingTop = '25px';
        areaFormEdit.style.paddingBottom = '25px';

        for (let i = 0; i < clients.contacts.length; i++) {
          contactListEditAdd = editContactList(clients.contacts[i].type, contactListEdit, areaFormEdit);
          contactListEditAdd.input.value = clients.contacts[i].value;
          contactListEdit.append(contactListEditAdd.item);
        };
      } else {
        contactListEdit.style.display = 'none';
        areaFormEdit.style.paddingTop = '8px';
        areaFormEdit.style.paddingBottom = '8px';
      };

      addContactEdit.addEventListener('click', (e) => {
        e.preventDefault();

        contactListEdit.style.display = 'block';
        areaFormEdit.style.paddingTop = '25px';
        areaFormEdit.style.paddingBottom = '25px';
        contactListEditAdd = editContactList();
        contactListEdit.append(contactListEditAdd.item);
      });

      const saveEdit = document.getElementById('EditSave');

      saveEdit.addEventListener('click', (e) => {
        e.preventDefault();

        const editLoad = document.querySelector('.edit__form-icon-load');
        const editRow = document.getElementById(idItem);

        editLoad.style.display = 'inline-block';

        editRow.remove();

        onEdit({ clients, editNameInput, editSurnameInput, editLastNameInput });

        setTimeout(() => {
          openEditForm.style.display = 'none';
          editLoad.style.display = 'none';
        }, 2000);
      });

      const editDeleteBtn = document.getElementById('deletelBtn');

      editDeleteBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const tempId = document.getElementById(idItem);
        const deleteForm = document.querySelector('.delete__bacground');
        const deleteBtnClients = document.getElementById('deleteClients');
        const cancelBtnClients = document.getElementById('cancelClients');

        openEditForm.style.display = 'none';
        deleteForm.style.display = 'grid';

        deleteBtnClients.addEventListener('click', () => {
          onDelete({ clientsObj, element: tempId });

          deleteForm.style.display = 'none';
        });

        cancelBtnClients.addEventListener('click', (e) => {
          e.preventDefault();

          deleteForm.style.display = 'none';
          openEditForm.style.display = 'grid';
        });
      });
    });

    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();

      const tempId = document.getElementById(idItem);
      const deleteForm = document.querySelector('.delete__bacground');
      const deleteBtnClients = document.getElementById('deleteClients');
      const cancelBtnClients = document.getElementById('cancelClients');

      deleteForm.style.display = 'grid';

      deleteBtnClients.addEventListener('click', () => {
        onDelete({ clientsObj, element: tempId });

        deleteForm.style.display = 'none';
      });

      cancelBtnClients.addEventListener('click', (e) => {
        e.preventDefault();

        deleteForm.style.display = 'none';
      });
    });

    return {
      itemId,
      itemFio,
      itemDateCreate,
      itemLastEdit,
      itemContact,
      itemAction,
      idItem,
    };
  };

  function addContactList(contactList, areaForm) {
    const item = document.createElement('li');
    item.classList.add('add__form-item-contact');

    const div = document.createElement('div');
    div.classList.add('input-group');

    const divPrepend = document.createElement('div');
    divPrepend.classList.add('input-group-append');
    const select = document.createElement('select');
    select.name = 'contact';
    select.id = 'optionForm';
    select.classList.add('form-select', 'add__form-select');
    const optionItem = ['Телефон', 'Доп.телефон', 'Email', 'Vk', 'Facebook'];
    const optionValue = ['phone', 'otherPhone', 'email', 'vk', 'facebook'];
    for (let i = 0; i < optionItem.length; i++) {
      const option = document.createElement('option');
      option.value = optionValue[i];
      option.id = i;
      option.innerHTML = optionItem[i];
      if (selectList.length < 5) {
        selectList.push({
          id: option.id,
          type: optionValue[i],
        });
      };
      select.append(option);
    };
    divPrepend.append(select);

    const input = document.createElement('input');
    input.classList.add('form-control', 'add__form-contact-input');
    input.id = 'contact';
    input.placeholder = "Введите данные контакта";

    const divAppend = document.createElement('div');
    divAppend.classList.add('input-group-append');
    const button = document.createElement('button');
    button.classList.add('add__form-contact-btn');
    const btnIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    btnIcon.setAttribute('viewBox', '0 0 12 12');
    btnIcon.setAttribute('width', '12');
    btnIcon.setAttribute('height', '12');
    const pathBtnIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathBtnIcon.setAttribute('d', 'M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z');
    btnIcon.append(pathBtnIcon);
    button.append(btnIcon);
    divAppend.append(button);

    div.append(divPrepend, input, divAppend);
    item.append(div);

    input.addEventListener('change', () => {
      divAppend.style.display = 'block';
    });

    button.addEventListener('click', (e) => {
      e.preventDefault();
      const addContact = document.getElementById('addContact');

      item.remove();
      if (contactList.children.length < 10) {
        areaForm.style.paddingBottom = '25px';
        addContact.style.display = 'inline-block';
      };
      if (contactList.children.length == 0) {
        contactList.style.display = 'none';
        areaForm.style.paddingTop = '8px';
        areaForm.style.paddingBottom = '8px';
      };
    });

    return {
      item,
      input,
      select,
      button,
    };
  };

  function addClients() {
    const addContact = document.getElementById('addContact');
    const inputName = document.getElementById('name');
    const inputSurname = document.getElementById('surname');
    const inputLastName = document.getElementById('lastName');
    const contactList = document.querySelector('.add__form-list-contact');
    const areaForm = document.querySelector('.add__form-contact');

    let count = 0;
    let contactListAdd = addContactList();

    addContact.addEventListener('click', (e) => {
      e.preventDefault();

      contactList.style.display = 'block';
      areaForm.style.paddingTop = '25px';
      areaForm.style.paddingBottom = '25px';

      if (contactList.children.length <= 9) {
        contactListAdd = addContactList(contactList, areaForm);
        if (contactList.children.length === 9) {
          addContact.style.display = 'none';
          areaForm.style.paddingBottom = '0';
        };
      };
      contactList.append(contactListAdd.item);
    });

    return {
      contactListAdd,
      inputName,
      inputSurname,
      inputLastName,
    }
  };

  function search(clientsObj, inputSearch, bool) {
    if (clientsObj.name === inputSearch.value.trim()) {
      return {
        clientsObj,
        inputSearch,
        bool
      };
    } else {
      if (clientsObj.surname === inputSearch.value.trim()) {
        return {
          clientsObj,
          inputSearch,
          bool
        };
      } else {
        if (clientsObj.lastName === inputSearch.value.trim()) {
          return {
            clientsObj,
            inputSearch,
            bool
          };
        } else {
          if (clientsObj.id === inputSearch.value.trim()) {
            return {
              clientsObj,
              inputSearch,
              bool
            };
          } else {
            return false;
          };
        };
      };
    };
  };

  function sortTableStudent(colNum, type) {
    console.log(colNum, type);
    let tbody = document.querySelector('tbody');
    let rowsArray = Array.from(tbody.rows);
    let compare;
    switch (type) {
      case 'id': compare = function (rowA, rowB) { return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1 }; break;
      case 'fio': compare = function (rowA, rowB) { return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1 }; break;
      case 'date': compare = function (rowA, rowB) { return new Date(rowA.cells[colNum].innerHTML) > new Date(rowB.cells[colNum].innerHTML) ? 1 : -1 }; break;
      case 'lastEdit': compare = function (rowA, rowB) { return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1 }; break;
    };
    rowsArray.sort(compare);
    tbody.append(...rowsArray);
  };

  function renderTable(clientsArr, handlers) {
    const tableRow = document.createElement('tr');
    tableRow.classList.add('clients__table-body-row');
    const clientsItem = getClientsItem(clientsArr, handlers);
    tableRow.id = clientsItem.idItem;
    tableRow.append(clientsItem.itemId, clientsItem.itemFio, clientsItem.itemDateCreate, clientsItem.itemLastEdit, clientsItem.itemContact, clientsItem.itemAction);
    return tableRow;
  };

  async function createClientsList() {
    const tbody = document.getElementById('tbody');
    const addButton = document.getElementById('addBtn');
    const formOpen = document.querySelector('.add__background');
    const formAdd = document.querySelector('.add__form');
    const closeButton = document.getElementById('closeBtn');
    const cancelButton = document.getElementById('cancelBtn');
    const handlers = {
      onEdit({ clients, editNameInput, editSurnameInput, editLastNameInput }) {

        const flagEdit = document.getElementById('editContactsList');

        if (flagEdit.style.display == 'block') {
          for (let i = 0; i < flagEdit.children.length; i++) {
            const selectIndexEdit = document.querySelectorAll('select');
            const selectInputEdit = document.querySelectorAll('.add__form-contact-input');
            let indexTempEdit = selectIndexEdit[i].selectedIndex;
            if (selectIndexEdit[i].selectedIndex == selectList[indexTempEdit].id) {
              contactsList.push({
                type: selectList[indexTempEdit].type,
                value: selectInputEdit[i].value,
              });
            };
          };
        };
        fetch(`http://localhost:3000/api/clients/${clients.id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            name: editNameInput.value.trim(),
            surname: editSurnameInput.value.trim(),
            lastName: editLastNameInput.value.trim(),
            contacts: contactsList,
          }),
          headers: { 'Content-Type': 'application/json', }
        });
        setTimeout(async () => {
          const responseEdit = await fetch(`http://localhost:3000/api/clients/${clients.id}`);
          const clientsDateEdit = await responseEdit.json();
          tbody.append(renderTable(clientsDateEdit, handlers));
        }, 500);
        contactsList.length = 0;
      },
      onDelete({ clientsObj, element }) {
        element.remove();
        fetch(`http://localhost:3000/api/clients/${clientsObj.id}`, {
          method: 'DELETE',
        });
        setTimeout(async () => {
          const response = await fetch('http://localhost:3000/api/clients');
          const clientsDate = await response.json();
          console.log(clientsDate.length);
          const loadDiv = document.getElementById('table__load')
          const load = document.getElementById('clients__load');
          if (String(clientsDate).length == 0) {
            load.classList.remove('clients__load');
            load.classList.add('clients__load-txt');
            load.innerHTML = 'Отсутствуют данные';
            loadDiv.style.display = 'flex'
            load.style.display = 'block'
          };
        }, 50)
      },
    };

    const loadDiv = document.getElementById('table__load')
    const load = document.getElementById('clients__load');

    const clientsAdd = addClients();

    const response = await fetch('http://localhost:3000/api/clients');
    const clientsDate = await response.json();

    setTimeout(() => {
      if (response['status'] == 200) {
        if (String(clientsDate).length > 0) {
          load.style.display = 'none';
          loadDiv.style.display = 'none';
          clientsDate.forEach(element => {
            const clientsItem = renderTable(element, handlers);
            tbody.append(clientsItem);
          });
        } else {
          load.classList.remove('clients__load');
          load.classList.add('clients__load-txt');
          load.innerHTML = 'Отсутствуют данные';
        }
      } else {
        load.classList.remove('clients__load');
        load.classList.add('clients__load-txt');
        load.innerHTML = `Ошибка ${response['status']}`;
      };
    }, 1000);

    addButton.addEventListener('click', (e) => {
      e.preventDefault();

      formOpen.style.display = 'grid';
    });

    formAdd.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!clientsAdd.inputName.value) {
        return;
      } else {
        if (!clientsAdd.inputSurname.value) {
          return;
        } else {
          if (!clientsAdd.inputLastName.value) {
            return;
          };
        };
      };

      const flag = document.getElementById('contactsList');

      if (flag.style.display == 'block') {
        for (let i = 0; i < flag.children.length; i++) {
          const selectIndex = document.querySelectorAll('select');
          const selectInput = document.querySelectorAll('.add__form-contact-input');
          let indexTemp = selectIndex[i].selectedIndex;
          if (selectIndex[i].selectedIndex == selectList[indexTemp].id) {
            contactsList.push({
              type: selectList[indexTemp].type,
              value: selectInput[i].value,
            });
          };
        }
      };

      const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        body: JSON.stringify({
          name: clientsAdd.inputName.value.trim(),
          surname: clientsAdd.inputSurname.value.trim(),
          lastName: clientsAdd.inputLastName.value.trim(),
          contacts: contactsList,
        }),
        headers: { 'Content-Type': 'application/json', }
      });

      const clientList = await response.json();

      load.remove();
      tbody.classList.remove('clients__table-body-load');

      let clientItemAdd = renderTable(clientList, handlers);

      tbody.append(clientItemAdd);

      const listContact = document.querySelectorAll('.add__form-item-contact');
      const contactList = document.querySelector('.add__form-list-contact');
      const areaForm = document.querySelector('.add__form-contact');

      loadDiv.style.display = 'none';
      formOpen.style.display = 'none';
      contactsList.length = 0;
      selectList.length = 0;
      clientsAdd.inputName.value = '';
      clientsAdd.inputSurname.value = '';
      clientsAdd.inputLastName.value = '';
      if (listContact.length > 0) {
        contactList.style.display = 'none';
        areaForm.style.paddingTop = '8px';
        areaForm.style.paddingBottom = '8px';
        for (let i = 0; i < listContact.length; i++) {
          listContact[i].remove();
        };
      };
    });

    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const lastNameInput = document.getElementById('lastName');

    surnameInput.addEventListener('change', (e) => {
      e.preventDefault();
      let inputLength = surnameInput.value;
      const lableSurname = document.getElementById('lableSurname');
      if (inputLength.length > 0) {
        lableSurname.classList.add('add__form-input-txt');
      } else {
        lableSurname.classList.remove('add__form-input-txt');
      };
    });

    nameInput.addEventListener('change', (e) => {
      e.preventDefault();
      let inputLength = nameInput.value;
      const lableName = document.getElementById('lableName');
      if (inputLength.length > 0) {
        lableName.classList.add('add__form-input-txt');
      } else {
        lableName.classList.remove('add__form-input-txt');
      };
    });

    lastNameInput.addEventListener('change', (e) => {
      e.preventDefault();
      let inputLength = lastNameInput.value;
      const lableLast = document.getElementById('lableLast');
      if (inputLength.length > 0) {
        lableLast.classList.add('add__form-input-txt');
      } else {
        lableLast.classList.remove('add__form-input-txt');
      };
    });

    closeButton.addEventListener('click', (e) => {
      e.preventDefault();

      formOpen.style.display = 'none';

      const listContact = document.querySelectorAll('.add__form-item-contact');
      const contactList = document.querySelector('.add__form-list-contact');
      const areaForm = document.querySelector('.add__form-contact');

      clientsAdd.inputName.value = '';
      clientsAdd.inputSurname.value = '';
      clientsAdd.inputLastName.value = '';
      if (listContact.length > 0) {
        contactList.style.display = 'none';
        areaForm.style.paddingTop = '8px';
        areaForm.style.paddingBottom = '8px';
        for (let i = 0; i < listContact.length; i++) {
          listContact[i].remove();
        };
      };
    });

    cancelButton.addEventListener('click', (e) => {
      e.preventDefault();

      formOpen.style.display = 'none';

      const listContact = document.querySelectorAll('.add__form-item-contact');
      const contactList = document.querySelector('.add__form-list-contact');
      const areaForm = document.querySelector('.add__form-contact');

      clientsAdd.inputName.value = '';
      clientsAdd.inputSurname.value = '';
      clientsAdd.inputLastName.value = '';
      if (listContact.length > 0) {
        contactList.style.display = 'none';
        areaForm.style.paddingTop = '8px';
        areaForm.style.paddingBottom = '8px';
        for (let i = 0; i < listContact.length; i++) {
          listContact[i].remove();
        };
      };
    });

    const closeEditBtn = document.getElementById('closeEditBtn');
    const openEditForm = document.querySelector('.edit__background');

    closeEditBtn.addEventListener('click', (e) => {
      e.preventDefault();

      openEditForm.style.display = 'none';

      const editNameInput = document.getElementById('nameEdit');
      const editSurnameInput = document.getElementById('surnameEdit');
      const editLastNameInput = document.getElementById('lastNameEdit');
      const listContact = document.querySelectorAll('.add__form-item-contact');
      const contactList = document.querySelector('.add__form-list-contact');
      const areaForm = document.querySelector('.add__form-contact');

      editNameInput.value = '';
      editSurnameInput.value = '';
      editLastNameInput.value = '';
      if (listContact.length > 0) {
        contactList.style.display = 'none';
        areaForm.style.paddingTop = '8px';
        areaForm.style.paddingBottom = '8px';
        for (let i = 0; i < listContact.length; i++) {
          listContact[i].remove();
        };
      };
    });

    const inputSearch = document.getElementById('search');

    inputSearch.addEventListener('input', (e) => {
      e.preventDefault();
      setTimeout(() => {
        const rowItem = document.querySelectorAll('.clients__table-body-row');
        const listSearch = document.querySelector('.header__form-list');
        const notFound = document.querySelector('.header__form-item-not-found');
        const listItem = document.querySelectorAll('.header__form-item');

        notFound.style.display = 'none';

        if (listItem.length > 1) {
          for (let i = 1; i < listItem.length; i++) {
            listItem[i].remove();
          };
        };

        if (inputSearch.value.length > 0) {
          listSearch.style.display = 'block';
          const bool = true;
          const falseItem = [];
          for (const obj of clientsDate) {
            const searchItem = search(obj, inputSearch, bool);
            if (searchItem.bool === true) {
              const itemList = document.createElement('li');
              itemList.classList.add('header__form-item');
              itemList.innerHTML = `${searchItem.clientsObj.surname} ${searchItem.clientsObj.name} ${searchItem.clientsObj.lastName}`;
              listSearch.append(itemList);
              itemList.addEventListener('click', (e) => {
                e.preventDefault();

                for (let i = 0; i < rowItem.length; i++) {
                  if (rowItem[i].id != searchItem.clientsObj.id) {
                    rowItem[i].style.display = 'none';
                  };
                };
                listSearch.style.display = 'none';
                itemList.remove();
              });
            } else {
              falseItem.push(searchItem)
            };
          };
          if (falseItem.length === rowItem.length) {
            notFound.style.display = 'block';
          };
        } else {
          for (let i = 0; i < rowItem.length; i++) {
            listSearch.style.display = 'none';
            rowItem[i].style.display = 'table-row';
          };
        };
      }, 2000);
    });

    const table = document.getElementById('table');
    table.addEventListener('click', function (e) {
      if (e.target.tagName != 'TH') { return; } else {
        let th = e.target;
        sortTableStudent(th.cellIndex, th.dataset.name);
      }
    });
  };

  createClientsList();
})();