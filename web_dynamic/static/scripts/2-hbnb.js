// Listen for changes on each input checkbox tag

$(document).ready(function (){
    $("input").on("change", function() {
        let amenityIds = {};
        if ($( "input:checked" )) {
            amenityIds[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenityIds[$(this).data('id')];
        }
        let newList = Object.values(amenityIds);
        if (newList.length > 0) {
          $('div.amenities > h4').text(Object.values(newList).join(', '));
        } else {
          $('div.amenities > h4').html('&nbsp;');
        }
    })

    $.get("http://0.0.0.0:5001/api/v1/status/", function( status ) {
        if (status === "OK") {
            $( "api_status" ).addClass( "available" );
        } else {
            $( "api_status" ).removeClass( "available" );
        }
    })
})
