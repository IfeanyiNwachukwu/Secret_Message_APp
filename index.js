document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // Allows us time to get form details
   const input = document.querySelector('#message-input');
   const encrypted = btoa(input.value);
   console.log(input.value);

   linkInput =  document.querySelector('#link-input');
   linkInput.value = '';
   linkInput.value = encrypted;

//    document.querySelector('#link-input').value = encrypted;
});