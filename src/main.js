console.log("ok");
 

$(function() {
  var $user_name_input = $('#user_name_input');
  var $user_name_generate = $('#user_name_generate');
  $user_name_input.on('input', function(event) {
    var value = $user_name_input.val();
    $user_name_generate.text(value);
  });

  var $value_input = $('#value_input');
  var $value_generate = $('#value_generate');
  $value_input.on('input', function(event) {
    var value = '¥' + $value_input.val();
    $value_generate.text(value);
  });

  var $sentent_input = $('#sentent_input');
  var $sentent_generate = $('#sentent_generate');
  $sentent_input.on('input', function(event) {
    var value = $sentent_input.val();
    $sentent_generate.text(value);
  });
});

$(document).on('change', 'input[type="file"]', function() {
  var $fr = new FileReader();
	$fr.onload = function(){
		$('#user_img_generate').attr('src', $fr.result);
	}
	$fr.readAsDataURL(this.files[0]);

});


// 色変更
$('#pink').on('click', function(){
  $('.superchat_header').css('background-color','#C2315C');
  $('.superchat_sentents').css('background-color','#EA3C64');

  $('.superchat_header').css('color','#f6f7f8');
  $('.superchat_sentents').css('color','#fff');
});
$('#red').on('click', function(){
  $('.superchat_header').css('background-color','#D1302B');
  $('.superchat_sentents').css('background-color','#E63631');

  $('.superchat_header').css('color','#f6f7f8');
  $('.superchat_sentents').css('color','#fff');
});
$('#orange').on('click', function(){
  $('.superchat_header').css('background-color','#E65333');
  $('.superchat_sentents').css('background-color','#F07C3A');

  $('.superchat_header').css('color','#f6f7f8');
  $('.superchat_sentents').css('color','#fff');
});
$('#yellow').on('click', function(){
  $('.superchat_header').css('background-color','#F6B343');
  $('.superchat_sentents').css('background-color','#F9CA47');

  $('.superchat_header').css('color','#060708');
  $('.superchat_sentents').css('color','#060708');

});
$('#green').on('click', function(){
  $('.superchat_header').css('background-color','#54C0A6');
  $('.superchat_sentents').css('background-color','#69E9B7');
  
  $('.superchat_header').css('color','#060708');
  $('.superchat_sentents').css('color','#060708');
});
$('#lightblue').on('click', function(){
  $('.superchat_header').css('background-color','#4CB9D4');
  $('.superchat_sentents').css('background-color','#61E5FA');

  $('.superchat_header').css('color','#060708');
  $('.superchat_sentents').css('color','#060708');
  
});

// 画像として保存
var btn = document.getElementById("download-btn");
btn.addEventListener("click",() => {
  html2canvas(document.querySelector("#superchat_container_generate")).then(canvas => { 
      let downloadEle = document.createElement("a");
      downloadEle.href = canvas.toDataURL("image/png");
      downloadEle.download = "canvas.png";
      downloadEle.click();
  });
})