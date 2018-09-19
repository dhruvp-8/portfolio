function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

function SendEmail(){
  var email = document.getElementById('email').value.toString();
  var name = document.getElementById('name').value;
  var comments = document.getElementById('comments').value;
  if(!email || !comments || !name){
    document.getElementById('errorMsg').hidden = false;
    document.getElementById('successMsg').hidden = true;
    document.getElementById('errorMail').hidden = true;
  }
  else{
    msg = '<p><b>Name: </b></p>' + name + '<p><b>Email: </b></p>' + email + '<p><b>Message: </b></p>' + comments;
    document.getElementById('errorMsg').hidden = true;
    var service_id = 'gmail';
    var template_id = 'feedback';
    var user_id = 'user_sIYId73ReD5KieiK2TQxR'
    var template_params = {
      from_name: 'Portfolio',
      reply_to: 'portfolio.dhruvrp@gmail.com',
      to_email: 'dhruvpatel5738@gmail.com',
      sender_email: email,
      message_html: msg 
    };

    emailjs.send(service_id,template_id,template_params, user_id).then(function(response) {
       document.getElementById('successMsg').hidden = false; 
       document.getElementById('errorMsg').hidden = true;
       document.getElementById('errorMail').hidden = true;
    }, function(error) {
       document.getElementById('errorMail').hidden = false;
    });;
    
  }
}

// Start from here
$(document).ready(function() {
    var count1 = parseInt(0);
    var tem = setInterval(function(){
    var u = document.getElementById("progressb").style.width;
    var percen = u.split("%");
    var percentage = parseInt(percen[0]);
    count1++;
    hs = (count1 * 100) / 3;
    var sm = hs.toFixed(2);
    var ss = sm.concat("%");
    var tk = hs.toString();
    var ans = tk.concat("%");
    document.getElementById("progressb").style.width = ans;
    if(hs === 100){
      clearInterval(tem)
      document.getElementById('loader').hidden = true;
      document.getElementById('now-loading').hidden = true;
      document.getElementById('main-content').hidden = false;
      autoType(".type-js",100);
    }
  },1000)
 });







