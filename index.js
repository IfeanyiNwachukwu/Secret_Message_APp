document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // Allows us time to get form details
   const input = document.querySelector('#message-input');
   const encrypted = btoa(input.value);
   
   const linkInput = document.querySelector('#link-input');
   linkInput.value = `${window.location}#${encrypted}`;
   linkInput.select();
});