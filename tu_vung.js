
$( document ).ready(function() {
        var tieu_de = ["STT","Từ vựng","Kanji","Nghĩa"];
        var tu_vung = ["わたし","わたしたち","あなた","あのひと","あのかた","みなさん","ふじだいがく","～さん","～ちゃん","～くん","～じん","せんせい","きょうし","がくせい","かいしゃいん","～しゃいん","ぎんこういん","いしゃ","けんきゅうしゃ","エンジニア","だいがく","びょういん","でんき","だれ","どなた","～さい","なんさい","おいくつ","はい","いいえ","しつれいですが","おなまえは？","はじめまして","どうぞよろしくおねがいします","こちらは～さんです","～からきました","アメリカ","イギリス","インド","インドネシア","かんこく","タイ","ちゅうごく","ドイツ","にほん","フランス","ブラジル","さくらだいがく"];

        var phat_am = [" "," "," ","あの人","あの方","皆さん","富士大学"," "," ","～君","～人","先生","教師","学生","会社員","社員","銀行員","医者","研究者"," ","大学","病院","電気"," "," ","－歳","何歳"," "," "," ","失礼ですが","お名前は？","初めまして。","どうぞよろしく[お","願いします。"," "," "," "," "," "," ","韓国"," ","中国","日本"," "," ","さくら大学"];
        
        var nghia = ["tôi","chúng ta, chúng tôi","bạn","người kia","vị kia","các bạn","Trường ĐH Fuji","anh ~","bé ( dùng cho nữ) hoặc gọi thân mật cho trẻ con ( cả nam lẫn nữ)","bé (dùng cho nam) hoặc gọi thân mật","người nước ～","giáo viên","giáo viên ( dùng để nói đến nghề nghiệp)","học sinh, sinh viên","nhân viên công ty","nhân viên công ty ～","nhân viên ngân hàng","bác sĩ","nghiên cứu sinh","kỹ sư","trường đại học","bệnh viện","điện","ai (hỏi người nào đó)","ngài nào, vị nào (cùng nghĩa trên nhưng lịch sự hơn)","～tuổi","mấy tuổi","mấy tuổi (Dùng lịch sự hơn)","vâng","không","xin lỗi ( khi muốn nhờ ai việc gì đó)","bạn tên gì?","chào lần đầu gặp nhau","rất hân hạnh được làm quen","đây là ngài ～","đến từ ～","Mỹ","Anh","Ấn Độ","Indonesia","Hàn quốc","Thái Lan","Trung Quốc","Đức","Nhật","Pháp","Brazil","trường đại học Sakura"];
        
        var tr = $('<tr/>');

        for(var j = 0; j<4 ;j++){
            tr.append('<th>' + tieu_de[j] +'</th>');}
        $('#kotoba').append(tr);
        $("th").css("border", "1px solid");
        $("th").css("padding", "10px");  

        for(var i=1; i<49; i++){
            

            $('#kotoba').append( '<tr>'+'<td>' +   i + '</td>'+'<td>' +   tu_vung[i-1] + '</td>'+'<td>' +   phat_am[i-1] + '</td>'+'<td>' +  nghia[i-1] + '</td>'+'</tr>' );
        }
        
        $("td").css("border", "1px solid");
        $("td").css("padding", "10px");
        $("tr").css("width", "100%");    
      });

$( document ).ready(function() {
    var x = $("#s2").height();
    var y = $("#s3").height();
   
        var width = $(window).width();
        if (width > 1000){
            $("#s1").height(x+y-50);
            // $("#bo").css("display","flex");
            // $("#bo").css("flex-direction","row");
            // $("#con1").css("flex","1");
            // $("#con2").css("flex","1");

        }
        else {
            $("#s1").height(250);
        }
        

        for(var i = 1;i<26; i++){

            var z = $('<li>');
            var x = $('<a>',{href:'tu_vung0'+i+'.html',},'</a>');
            
            var y =  $('<img>',{src:'list_bai/'+i+'.jpg',});
            y.appendTo(x);
            x.appendTo(z);
            z.appendTo('#so_bai');
            }  
});


    







