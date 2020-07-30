$('document').ready(function() {
  for (var i = 0; i < 3; i++) {
    $.ajax({
      url: 'https://dog.ceo/api/breeds/image/random',
      type: 'get',
      dataType: 'json',
      success: function(data) {
        $('#photos').append('<img src="' + data.message + '">');
      },
      error: function() {
        console.log(':(')
      }
    });
  }
})
