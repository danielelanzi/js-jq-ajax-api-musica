$(document).ready(function() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, stato) {
      var response = data.response;
      processData(response);
    },
    error: function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });

  $("select").change(function(){
    var category = $(this).val();
    $('.cds-container').text('');

    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function (data, stato) {
        processData2(data.response, category)

      },
      error: function (richiesta, stato, errore) {
        alert("E' avvenuto un errore. " + errore);
      }
    });
  });
});
///////////
// FUNZIONI
///////////

//Chiamata lista cds
function processData(discList) {
  discList.forEach(function (cd) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = cd;
    var html = template(context);
    $('.cds-container').append(html);
  });
}

// Chiamata per categorie
function processData2(cds, category) {
  cds.forEach(function (cd) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = cd;
    var html = template(context);

    if (category == cd.genre) {
      $('.cds-container').append(html);
    } else if (category == 'Tutti') {
      $('.cds-container').append(html);
    }
  });
}
