 //        document.requestFullscreen(options);
 startLevel();
 var clicks;

 function startLevel() {
     var scene = 0;
     var clicks = 0;
     setTimeout(function () {
         $('#level0').prepend('<img id="dialogPopUpPF" src="media/SVG/talkDialog.svg" height="300"/>');
     }, 1000);
     setTimeout(function () {
         $("div.mText").html("Hello! I'm Pecunia, an investor to be!");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/happyPF.svg" height="500">');
         clicks++;
     }, 1400);
     $("#continueBTN2").click(function () {
         console.log("clicked");
         if (clicks == 1) {
             $("#pCharacter img:last-child").remove();
             $('#pCharacter').prepend('<img src="media/SVG/angryP.svg" height="500">');
             $("div.mText").html("I heard that the Moneytaur <br> this gross monster who lives in a <br> labyrinth,  ...has been tricking many <br> people about their money!");
             two();

         }
     });
 }

 function two() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/pettyP.svg" height="500">');
         $("div.mText").html("He's been fooling people who don't know <br> too much about investments! <br> So I am determined to <br> become an investment expert!");
         three();
     });
 }

 function three() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="500">');
         $("div.mText").html("Will you join me?");
         four();
     });

 }

 function four() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/determinedP.svg" height="500">');
         $("div.mText").html("Yay! Let's DO THIS! <br> $$$$$$$$");
         graphScene();
     });

 }


 function graphScene() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/calmP.svg" height="400">');
         $("div.mText").html("Firstly, it is very important to be  <br> able to read data accurately! <br> I will show you a graph  <br> and discuss key points <br> so that you know how to  <br> read data properly!");
         five();
     });
 }

 function five() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
         $("div.mText").html("Accurately reading data allows you <br>to make smarter decisions and more  <br> accurate predictions");
         six();
     });
 }

 function six() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
         $("div.mText").html("Accurately reading data allows you <br>to make smarter decisions and more  <br> accurate predictions <br> and more accuracy <br> <strong>means more money earned!</strong>");
         seven();
     });
 }

 function seven() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
         $("div.mText").html("Being a college student looking into <br> learning about investments isn't <br> always easy, but it is <br> always worth it! ");
         eight();
     });
 }

 function eight() {
     $("#continueBTN2").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('.graph1').prepend('<img src="media/graph1.png" width="800">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("This type of graph is called a <strong> Heat Map </strong>. <br> It uses SIZE to emphasize significant aspects of the data");
         nine();
     });
 }

 function nine() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("This type of graph is called a <strong> Heat Map </strong>. <br> It uses SIZE to emphasize significant aspects of the data <br> Always make sure that the graph has a title so that you know <br> WHAT data you're reading...<br> so that the MoneyTaur doesn't trick you!");
         ten();
     });
 }

 function ten() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/calmP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("This type of graph is called a <strong> Heat Map </strong>. <br> It uses SIZE to emphasize significant aspects of the data <br> Always make sure that the graph has a title so that you know <br> WHAT data you're reading...<br> so that the MoneyTaur doesn't trick you! <br> This is census data from the West South Central of the US <br> It shows how many people know very little about <br> preparing for emergencies");
         eleven();
     });
 }

 function eleven() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("Knowing the basics of preparing for <br> future emergencies is so <br> important! This is where good <br> investment skills come in -- <br> investing into future situations <br> will help you a lot in the long run.");
         twelve();
     });
 }

 function twelve() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("Now let's learn about...<br> <strong> FINANCIAL LITERACY!</strong>");
         thirteen();
     });
 }

 function thirteen() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("Being on a budget means you made a plan for your expenses <br> to be less than or equal to your income.");
         fourteen();
     });
 }

 function fourteen() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("Being on a budget means you made a plan for your expenses <br> to be less than or equal to your income. <br> You can get a free credit report once a year. <br> Hey college students, did you hear <strong> FREE </strong> ?? USE IT");
         fifteen();
     });
 }

 function fifteen() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/happyP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("What is considered an excellent credit score? <br> Well, <strong> 700 to 850 </strong>");
         sixteen();
     });
 }

 function sixteen() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("In order to improve your credit score, make sure  <br> to not just pay in cash, and get credit cards <br> that you pay back.");
         seventeen();
     });
 }

 function seventeen() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("What about <strong> investing? </strong>");
         eighteen();
     });
 }

 function eighteen() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/calmP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("What about <strong> investing? </strong> <br> Learn about Blue-Chip stocks <br> (public companies with strong reputations), <br> They demonstrate steady success, but <br> this is not always guaranteed. <br> Make sure to learn more <br>about these stocks and hedging!");
         prebossLevel();
     });
 }

 function prebossLevel() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
         $("div.mText2").html("You've learned about reading data...<br> You've learned about financial literacy...<br> <strong> LETS GO BEAT THAT MONEYTAUR </strong>");
         gobossLevel();
     });
 }

 function gobossLevel() {
     var $input = $('<a href="level1.html"> <input type="button"  id="continueBTN3" class="nextBoss" value="Go To Boss Level" /> </a>');
     $input.appendTo($("#level0"));

 }

 //     setTimeout(function () {
 //         $("moneytaurText").prepend(document.createTextNode("Hello"));
 //     }, 2000);
 //     setTimeout(function () {
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/surprisedP.svg" height="400">');
 //     }, 2400);
 //     setTimeout(function () {
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/angryP.svg" height="400">');
 //     }, 3600);
 //
 //     setTimeout(function () {
 //         $("#continueBTN").click(function () {
 //             console.log("clicked");
 //             $("div.mText").html("Aah, my my... it's just an <br> ignorant little maiden <br>... <br> what do you want?");
 //             console.log($("p").text());
 //
 //             scene2();
 //         });
 //     }, 3600);
 // }
 //
 // function scene2() {
 //     clicks = 0;
 //     $('#level1').prepend('<img id="dialogPopUpP" src="media/SVG/talkDialog.svg"  width="300"/>');
 //     $("div.pText").html("<p>I am here to take back <br> all the money <br> you've stolen from <br> investors!</p>");
 //
 //
 //     setTimeout(function () {
 //
 //         $("#continueBTN").click(function () {
 //             if (clicks == 0) {
 //                 console.log("clicked");
 //                 $("div.mText").html("They should have known better!");
 //                 console.log($("p").text());
 //                 clicks++;
 //             }
 //         });
 //     }, 300);
 //     $("#continueBTN").click(function () {
 //         if (clicks == 1) {
 //             console.log("clicked");
 //             $("div.pText").html("They were just college students! <br> I'll prove you that <br> you aren't the only <br> smart investor here!");
 //             scene3();
 //         }
 //     });
 // }
 //
 // function scene3() {
 //     $("#continueBTN").click(function () {
 //         console.log("clicked");
 //         $("div.mText").html("Hah! Is that a challenge? <br> Alright, you asked for it...<br> Here's my challenge!");
 //         console.log($("p").text());
 //         clicks++;
 //     });
 //     setTimeout(function () {
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/determinedP.svg" height="400">');
 //     }, 1400);
 //     scene4();
 // }
 //
 //function scene4(){
 //    console.log("scene 4");
 //    
 //    
 //}
