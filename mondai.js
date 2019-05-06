
//tu vung
$( document ).ready(function() {
    //bai 1


var b2 = {tu_vung1:["STT","Từ vựng","Kanji","Nghĩa","1","わたし"," ","tôi","2","わたしたち"," ","chúng ta, chúng tôi"],
ngu_phap1:["11.Trợ từ は","Nghĩa : N1 là N2 Ví dụ:わたしは　がくせいです。Tôi là học sinhさとさんは　せんせいです Sato là giáo viên*Chú ý: [は]　đọc [わ]","2.N1　は　N2　じゃありません","Nghĩa : N1 không phải là N2 Ví dụ:わたしは　せんせい　じゃありません。Tôi không phải là giáo viên ワンさんは　エンジニアじゃありません Wan không phải là kĩ sư ","3. N1　は　N2　ですか","Nghĩa : N1 có phải là N2 không? Cách trả lời :はい、 N2 です。いいえ、N2　じゃありません / ではありません。Ví dụ:あなた　は　さとさんですか。Bạn có phải là Miller không ?はい、わたし　です。Vâng, tôi là Millerあのひと　は　かいしゃいんですか。Người kia có phải là Nhân viên văn phòng không ?いいえ、かいしゃいん　じゃありません。Không, Không phải là nhân viên văn phòng","4. N1　も　N2　です","Nghĩa : N1 có phải là N2 không Cách trả lời :はい、 N2 です。いいえ、N2　じゃありません / ではありません。Ví dụ:あなた　は　さとさんですか。Bạn có phải là Miller không ?はい、わたし　です。Vâng, tôi là Millerあのひと　は　かいしゃいんですか。Người kia có phải là Nhân viên văn phòng không ?いいえ、かいしゃいん　じゃありません。Không, Không phải là nhân viên văn phòng","5. N1 は　N2　の　N3 です","5. N1 は　N2　の　N3 です Nghĩa :N1 là N2 của N3 Danh từ 2 (N2) bổ nghĩa cho Danh từ 3 (N3). Chữ の có nghĩa là của.Ví dụ :わたしは　Jellyfish Education　のしゃいんです。Tôi là nhân viên của Jellyfish Education ミラーさんは　ふじだいがく　の　かぐせいです。Mira là sinh viên của trường đại học Fuji *Chú ý:+ Từ [さん], trong Tiếng Nhật, nó được dùng ngay sau họ của người nghe để thế hiện sự kính trọng khi gọi tên người đó. Từ [さん] không dùng đối với chính bản thân người nói. + Trong trường hợp đã biết tên người nghe thì không dùng [あなた] mà dùng tên + [さん] để gọi tên người đó."],
};

    var tieu_de1 = ["STT","Từ vựng","Kanji","Nghĩa"];
    var tu_vung1 = ["わたし","わたしたち","あなた","あのひと","あのかた","みなさん","ふじだいがく","～さん","～ちゃん","～くん","～じん","せんせい","きょうし","がくせい","かいしゃいん","～しゃいん","ぎんこういん","いしゃ","けんきゅうしゃ","エンジニア","だいがく","びょういん","でんき","だれ","どなた","～さい","なんさい","おいくつ","はい","いいえ","しつれいですが","おなまえは？","はじめまして","どうぞよろしくおねがいします","こちらは～さんです","～からきました","アメリカ","イギリス","インド","インドネシア","かんこく","タイ","ちゅうごく","ドイツ","にほん","フランス","ブラジル","さくらだいがく"];

    var phat_am1 = [" "," "," ","あの人","あの方","皆さん","富士大学"," "," ","～君","～人","先生","教師","学生","会社員","社員","銀行員","医者","研究者"," ","大学","病院","電気"," "," ","－歳","何歳"," "," "," ","失礼ですが","お名前は？","初めまして。","どうぞよろしく[お","願いします。"," "," "," "," "," "," ","韓国"," ","中国","日本"," "," ","さくら大学"];
    
    var nghia1 = ["tôi","chúng ta, chúng tôi","bạn","người kia","vị kia","các bạn","Trường ĐH Fuji","anh ~","bé ( dùng cho nữ) hoặc gọi thân mật cho trẻ con ( cả nam lẫn nữ)","bé (dùng cho nam) hoặc gọi thân mật","người nước ～","giáo viên","giáo viên ( dùng để nói đến nghề nghiệp)","học sinh, sinh viên","nhân viên công ty","nhân viên công ty ～","nhân viên ngân hàng","bác sĩ","nghiên cứu sinh","kỹ sư","trường đại học","bệnh viện","điện","ai (hỏi người nào đó)","ngài nào, vị nào (cùng nghĩa trên nhưng lịch sự hơn)","～tuổi","mấy tuổi","mấy tuổi (Dùng lịch sự hơn)","vâng","không","xin lỗi ( khi muốn nhờ ai việc gì đó)","bạn tên gì?","chào lần đầu gặp nhau","rất hân hạnh được làm quen","đây là ngài ～","đến từ ～","Mỹ","Anh","Ấn Độ","Indonesia","Hàn quốc","Thái Lan","Trung Quốc","Đức","Nhật","Pháp","Brazil","trường đại học Sakura"];
    
    var tr = $('<tr/>');
    var coun = 0;
    for(var j = 0; j<4 ;j++){
        tr.append('<th >' + tieu_de1[j] +'</th>');
   
    }
    $('#kotoba').append(tr);
    $("th").css("border", "1px solid");
    $("th").css("padding", "10px");  
    var count =0;
  
  

    for(var i=1; i<49; i++){
        

        $('#kotoba').append( '<tr >'+'<td >' +   i + '</td>'+'<td id="'+ count+ 0+'">' +   tu_vung1[i-1] + '</td>'+'<td id="'+ count+1 +'">' +   phat_am1[i-1] + '</td>'+'<td id="'+ count+ 2+'">' +  nghia1[i-1] + '</td>'+'</tr>' );
        count = count+1;
    }
    
    $("td").css("border", "1px solid");
    $("td").css("padding", "10px");  
  });
//tu vung 


$(document).ready(function(){
    $(document).on("click", ".bt", function () {
        var x = $(this).parent().find('.nd');
       x.slideToggle(1000);
        
    });
});

//ngu phap
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
//ngu phap

//list top image
$( document ).ready(function() {
    for(var i = 1;i<26; i++){

        var z = $('<li class = "my-btn" id="s'+ i +'">')//tao ID tu dong
        var x = $('<a>','</a>');//tao tag voi thuoc tinh href tu dong
        
        var y =  $('<img>',{src:'list_bai/'+i+'.jpg',});
        y.appendTo(x);
        x.appendTo(z);
        // z.setAttribute("id","s"+i)
        z.appendTo('#so_bai');
        }  
});
//list top image


 //kanji 
  $( document ).ready(function() {
        
    for(var j = 0; j<17;j++){  var y =  $('<img>',{src:'kanji/b1.'+j+'.png',});
    y.css("width","100%");
    var h = $('<div>');
    y.appendTo(h);
   
    h.appendTo('#kanji');}

//du_lieu_bai_hoc
    var x = [
        {ten: "s1", tu_vung:[],ngu_phap:["4","5","6"]},
        {ten:"s2",tu_vung:[],ngu_phap:["1. これ / それ / あれ　は　N　です","5","6"]},
        {ten:"s3" ,tu_vung:[],ngu_phap:["4","5","6"]}];
        //du_lieu_bai_hoc
        var y;
        var h;
        // var count = 0;
        $('.my-btn').click(function(){
          y = $(this).attr("id");
        h = x.find(function(element) {
            return element.ten === y;
        })
                
        for(var i = 0;i<48; i++){
            for(var j = 0;j<3;j++){
                var z = "#"+i.toString()+j.toString()
                
                
                
                $(z).text(h.tu_vung[3*i + j])
            
            }
        }
    for(var i = 1;i<5;i++){
        $("p1").text();
      
   
    
    
    
    
    
    })
          
         
});




