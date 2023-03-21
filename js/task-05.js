// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-h1 > span'),
// };

// const input = document.querySelector('#js-input');
// const nameLabel = document.querySelector('#js-h1 > span');

//   input.addEventListener('input', () => {
//     nameLabel.textContent = input.value.trim() || 'Anonymous';
//   });

// function onInputChange(event) {
//     refs.nameLabel.textContent = event.currentTarget.value;
// }


  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value.trim() || 'Anonymous';
  });




