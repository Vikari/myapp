$(document).ready(function() {

  $('#form1').submit(laheta);

  function laheta(event) {
    var nimi = $('input[name=nimi]').val();
    var supersankari = $('form input[name=supersankari]:checked').val();
    event.preventDefault();

    $.ajax({
      url: "http://localhost:3000/supersankari",
      method: 'POST',
      data: {
        nimi,
        supersankari
      },
      success: lahetysOnnistui
    });
  }

  function lahetysOnnistui(response) {
    $('#tekks').html(response);
  }
})