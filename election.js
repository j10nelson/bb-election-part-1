$(function() {
    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET'
    }).done(function(responseData){
      for (var i = 0; i < responseData.candidates.length; i++) {
          console.log(responseData.candidates[i]);
          $( '#candidate' ).append( '<li> Name: ' + responseData.candidates[i].name + '<br> Votes: ' + responseData.candidates[i].votes + '</li>' );
        }
  });
  });
