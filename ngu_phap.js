$(document).ready(function(){
    $(document).on("click",".cau", function () {
        var da = $(this).parent().find('.da');
       da.slideToggle();
        
    });
});
$(document).ready(function(){
    $(document).on("click", ".bt", function () {
        var x = $(this).parent().find('.nd');
       x.slideToggle();
        
    });
});
