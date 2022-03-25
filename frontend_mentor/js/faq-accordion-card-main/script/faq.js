var ques1 = document.getElementById('ans1');
var ques2 = document.getElementById('ans2');
var ques3 = document.getElementById('ans3');
var ques4 = document.getElementById('ans4');
var ques5 = document.getElementById('ans5');
 function answer1() {
            var a = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. ";
            ques1.style.fontWeight = 'bold';
            document.getElementById("reply1").innerHTML = a;
        }
        function myFunction1() {
            ques1.style.fontWeight = "normal";
            document.getElementById('reply1').innerHTML = "";
        }
        function answer2() {
            ques2.style.fontWeight = 'bold';
            var b = "No more than 2GB. All files in your account must fit your allotted storage space.";
            document.getElementById("reply2").innerHTML = b;
        }
        function myFunction2() {
            ques2.style.fontWeight = "normal";
            document.getElementById('reply2').innerHTML = "";
        }
        function answer3() {
            ques3.style.fontWeight = 'bold';
            var c = "Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.";
            document.getElementById("reply3").innerHTML = c;
        }
        function myFunction3() {
            ques3.style.fontWeight = "normal";
            document.getElementById('reply3').innerHTML = "";
        }
        function answer4() {
            ques4.style.fontWeight = 'bold';
            var d = " Yes! Send us a message and we’ll process your request no questions asked.";
            document.getElementById("reply4").innerHTML = d;
        }
        function myFunction4() {
            ques4.style.fontWeight = "normal";
            document.getElementById('reply4').innerHTML = "";
        }
        function answer5() {
            ques5.style.fontWeight = 'bold';
            var e = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
            document.getElementById("reply5").innerHTML = e;
        }
        function myFunction5() {
            ques5.style.fontWeight = "normal";
            document.getElementById('reply5').innerHTML = "";
        }