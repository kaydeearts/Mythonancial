 //        document.requestFullscreen(options);
 startLevel();
 var clicks;

 function startLevel() {
     var scene = 0;
     setTimeout(function () {
         $('#level1').prepend('<img id="dialogPopUp" src="media/SVG/talkDialog.svg" height="600" width="500"/>');
     }, 2000);

     setTimeout(function () {
         $("moneytaurText").prepend(document.createTextNode("Hello"));
     }, 2000);
     setTimeout(function () {
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/surprisedP.svg" height="400">');
     }, 2400);
     setTimeout(function () {
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/angryP.svg" height="400">');
     }, 3600);

     setTimeout(function () {
         $("#continueBTN").click(function () {
             console.log("clicked");
             $("div.mText").html("Aah, my my... it's just an <br> ignorant little maiden <br>... <br> what do you want?");
             console.log($("p").text());

             scene2();
         });
     }, 3600);
 }

 function scene2() {
     clicks = 0;
     $('#level1').prepend('<img id="dialogPopUpP" src="media/SVG/talkDialog.svg"  width="300"/>');
     $("div.pText").html("<p>I am here to take back <br> all the money <br> you've stolen from <br> investors!</p>");


     setTimeout(function () {

         $("#continueBTN").click(function () {
             if (clicks == 0) {
                 console.log("clicked");
                 $("div.mText").html("They should have known better!");
                 console.log($("p").text());
                 clicks++;
             }
         });
     }, 300);
     $("#continueBTN").click(function () {
         if (clicks == 1) {
             console.log("clicked");
             $("div.pText").html("They were just college students! <br> I'll prove you that <br> you aren't the only <br> smart investor here!");
             scene3();
         }
     });
 }

 function scene3() {
     $("#continueBTN").click(function () {
         console.log("clicked");
         $("div.mText").html("Hah! Is that a challenge? <br> Alright, you asked for it...<br> Here's my challenge!");
         console.log($("p").text());
         clicks++;
     });
     setTimeout(function () {
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/determinedP.svg" height="400">');
           scene4();
     }, 1800);

 }

 function scene4() {
     console.log("scene 4");
     setTimeout(function () {
         $("div.mText").html("Which of the following is a good credit score?");
         console.log($("p").text());
         var $input = $('<input type="button" id="option1" value="640" />');
         $input.appendTo($("#level1"));
         var $input = $('<input type="button" id="option2" value="750" />');
         $input.appendTo($("#level1"));
          scene5();
     }, 3000);
 
        
     
 }

 function scene5() {
     console.log("scene 4");
     $("div.mText").html("The answer is 750!");
     console.log($("p").text());
     $("#option2").click(function () {
         console.log("clicked");
         $("div.mText").html("You were right! I guess I can't fool you...");
         console.log($("p").text());
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/pettyP.svg" height="400">');
         clicks++;
     });
     $("#option1").click(function () {
         console.log("clicked");
         $("div.mText").html("Hahaha! I guess you have more reading to do!");
         console.log($("p").text());
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/angryP.svg" height="400">');
         clicks++;
     });

 }
