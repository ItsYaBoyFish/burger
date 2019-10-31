console.log('hello');

$(document).on('click', '.devour-button', function() {
  // console.log('button clicked');
  let id = $(this).attr('data-id');
  console.log(id);
  // let options = {
  //   method: 'PUT',
  //   headers: {
  //     "Content-Type":"application/json"
  //   },
  // }
   axios.put(`/api/update/${id}`).then(function(response) {
     console.log(response);
     if (response.status === 200) {
      alert(`You have updated the burger with id: ${id}. Please Reload To See The Changes!`);
    }
   });
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
  axios.post('/api/post', data).then(function(response) {
    console.log(response);
    if (response.status === 200) {
      alert('You have created a new burger! Please Reload To See The Changes!');
    }
    // window.location = response.location;
  })
})