$(function() {

    var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickrApiUrl, {
        tags: "sun, beach",
        tagmode: "any",
        format: "json"
    }).done(function(data){
        $.each(data.items, function (i, v) {

            if (i <= 2) {
                $('#row1').append(
                
                    `<div class="col-md-4">
                        <img src="${v.media.m}" alt="${v.title}">
                    </div>`
    
                )
            } else if ( i >= 3 && i <= 5) {
                $('#row2').append(
                
                    `<div class="col-md-4">
                        <img src="${v.media.m}" alt="${v.title}">
                    </div>`
    
                )
            }
        })
        
    }).fail(function(){

    })

    // $.ajax({
    //     url : "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    //     type: "GET",
    //     dataType: "json",
    //     success: function(data){
    //         console.log(data);
    //     },
    //     error: function(){
    //         console.log("Erro na requisição");
    //     }  
    // });

});