console.log('hello');

$(document).on('click', '.devour-button', function() {
  // console.log('button clicked');
  let id = $(this).attr('data-id');
  console.log(id);
  let options = {
    method: 'PUT',
    headers: {
      "Content-Type":"application/json"
    },
  }
   fetch(`/api/update/${id}`, options);
})

$('#submitBtn').on('click', function() {
  let burgerName = $('#newBurger').val();

  let data = {
    name: burgerName
  };
  
  let options = {
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  }
  console.log(options);
  fetch('/api/post', options)
})