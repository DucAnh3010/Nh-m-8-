
$(document).ready(function(){
    $(document).on("click", ".bt", function () {
        var x = $(this).parent().find('.nd');
       x.slideToggle(1000);
        
    });
});


$(document).ready(function(){
    $(document).on("click",".cau", function () {
        var da = $(this).parent().find('.da');
       da.slideToggle();
        
    });
});

$( document ).ready(function() {
    // var x = $("#s2").height();
    // var y = $("#s3").height();


    var width = $(window).width();
        if (width < 1000){
     
            $("#s1").height(250);
        }
        // else
        // $("#s1").height(x+y);
        
        
      });
      
$( document ).ready(function() {
    for(var i = 1;i<26; i++){

        var z = $('<li>');
        var x = $('<a>',{href:'tu_vung0'+i+'.html',},'</a>');
        
        var y =  $('<img>',{src:'list_bai/'+i+'.jpg',});
        y.appendTo(x);
        x.appendTo(z);
        z.appendTo('#so_bai');
        }  
});

    