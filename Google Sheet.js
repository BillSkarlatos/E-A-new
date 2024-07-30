const scriptURL = 'https://script.google.com/macros/s/AKfycbxQJ3_sUZYZbFReEF5EYEkKobm8iMsmSCkKhCmo8Dk3Tertu5iCopoeiqIp_MVXB651iA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})