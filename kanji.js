$( document ).ready(function() {
        var height = 0;
        for(var j = 0; j<17;j++){  var y =  $('<img>',{src:'kanji/b1.'+j+'.png',});
        y.css("width","100%");
        var h = $('<div>');
        y.appendTo(h);
        height = height+h.height();
        h.appendTo('#khung');}

       
     
       





   


    // var x = $("#s2").height();
    // var y = $("#s3").height();
   
    //     var width = $(window).width();
    //     if (width > 1000){
    //         $("#s1").height(x+height);
    //     }
    //     else {
    //         $("#s1").height(250);
    //     }
        
        
 
      

    for(var i = 1;i<26; i++){

        var z = $('<li>');
        var x = $('<a>',{href:'tu_vung0'+i+'.html',},'</a>');
        
        var y =  $('<img>',{src:'list_bai/'+i+'.jpg',});
        y.appendTo(x);
        x.appendTo(z);
        z.appendTo('#so_bai');
        }  
});

    

