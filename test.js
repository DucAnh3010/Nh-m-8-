var nd = $("#noi_dung_de").html();
   var cau_hoi = nd.split('|');
   var html = ""; var tra_loi_dung = 0;
   for(var i = 0;i<cau_hoi.length;i++)
   {
    var chi_tiet = cau_hoi[i].split(';');
    //alert(chi_tiet[i]);
    for(var j=0;j<chi_tiet.length;j++)
    {
     
     if (j==0) html += "<tr><td><b>Câu " + (i+1) + ":</b></td><td> <b>" + chi_tiet[j].trim() + "</b></td></tr>";
     else 
     {
      html += "<tr><td></td><td id='" + (i + 1 + String.fromCharCode(64 + j)) + "'><input type='checkbox' name='" + (i + 1 + String.fromCharCode(64 + j)) + "' value='" + chi_tiet[j].trim() +"'> " + String.fromCharCode(64 + j) + ". " + chi_tiet[j].replace("[","").trim() + "</td></tr>";
     }
    }
   }

   $("#noi_dung_de").empty().append("<table>" + html + "</table><input type='submit' value='Trả lời xong' id='tra_loi_xong'>").fadeIn();
   $("#noi_dung_de input").click(function(){   
    
    var id = $(this).attr("name");
    
    if ($(this).is(":checked")) $("td#" + id).css("background-color","yellow");
    else $("td#" + id).css("background-color","");     
   });
   
   $("#tra_loi_xong").click(function(){
    $('#noi_dung_de input').each(function () {
     var id = $(this).attr("name");
     var ctl = $(this).val();
     
     if (ctl[0] == '[') 
     {
     //alert($("td#" + id).css("background-color"));
      if ($("td#" + id).css("background-color") == "rgb(255, 255, 0)")
      {
       tra_loi_dung++;
      }
      else $("td#" + id).css("background-color","red");     
     }
    });
    $("#noi_dung_de").append("<p>Trả lời đúng :" + (tra_loi_dung < 0 ? "0" : tra_loi_dung) + " câu</p>");
    $("#tra_loi_xong").fadeOut();
   });