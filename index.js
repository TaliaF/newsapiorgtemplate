/*global $*/
$(document).ready(function(){
    $.ajax({
        method:"GET",
        url:"https://newsapi.org/v2/sources",
        data: {category:"technology", country:"us", language:"en", apiKey:""},
        success: function(data){
            if(data.status=="ok"){
                console.log(data)
           for (var i= 0; i < data.sources.length; i++ ){
            var source = document.createElement("OPTION");
            source.setAttribute("value", data.sources[i].id)
            source.innerHTML = data.sources[i].name;
            document.getElementById('selection').appendChild(source);
            }
        }
    }
    

    // })
//     .done(function( msg ){
//         alert ("Data Saved:" + msg);
//   });
});
    $('#source').submit(function(event){
        event.preventDefault();
        alert(document.getElementById("selection").value);
        
}) ;
}) 