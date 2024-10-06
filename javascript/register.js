

    document.addEventListener('DOMContentLoaded', function() {
  const courseSelect = document.getElementById('courseselect');
  const coursePriceInput = document.getElementById('inputprice');

  courseSelect.addEventListener('change', (e) => {
    const selectedValue = e.target.value.replace('' ,''); 
    coursePriceInput.value = selectedValue;
  });
});

// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const requiredFields = document.querySelectorAll('[required]');

//   let isValid = true;

//   requiredFields.forEach((field) => {
//     if (field.value.trim() === '') {
//       field.style.border = '1px solid red';
//       isValid = false;
//     } else {
//       field.style.border = '';
//     }
//   });

//   if (isValid) {
//     // Form is valid, proceed with submission
//   }
// });


