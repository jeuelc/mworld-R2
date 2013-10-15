// i-C-a

var resourceLoc = "http://ec2-54-252-221-24.ap-southeast-2.compute.amazonaws.com/ghost/";

function mworldLogin(username, password){
  var result = 0;
  $.ajax({
    type:"POST",
    url:resourceLoc+"login.php",
    async: false,
    data: {usr:username, psw:password}
  }).done(function(kidid) {
    if(kidid > 0) { result = kidid; }  
  });
  
  return result;
}

function mworldSaveCoach(kidid, coachStatus) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"loadcoach.php",
    async: false,
    data: {kidid:kidid, coach:coachStatus}
  }).done();
}

function mworldPageVisit(kidid, pageid) {
  //alert("mao ni kidid: "+kidid+"; mao ni page: "+pageid);
  $.ajax({
    type:"POST",
    url:resourceLoc+"pagevisit.php",
    async: false,
    data: {kidid:kidid, pagename:pageid}
  }).done(function(coachaction) {
    if(coachaction > 0) {
      //alert("na-preserve ang kidid: "+kidid);
      
      //alert("This is coach action: "+coachaction);
      switch (coachaction) {
        case "1":
          setTimeout(function() {
              $('.coachcontainer').html('<div id="avatarbody" style="background-attachment: scroll; background-color: transparent; width: 200px; height: 320px; top: 6px; position: relative; background-position: 0px 50%; background-repeat: no-repeat no-repeat; "><div id="avatarhair" style="background-image: none; width: 198px; height: 122px; top: 29px; left: 12px; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; " ></div><div id="avatarhair-joe" style="width: 192px; height: 188px; position: relative; left: 21px; top: -6px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarhair-jane" style="width: 192px; height: 122px; position: relative; left: 13px; top: 65px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes" style="width: 192px; height: 122px; left: 18px; top: -52px; background-image: none; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-joe" style="width: 192px; height: 122px; position: relative; left: 9px; top: -137px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-jane" style="width: 192px; height: 122px; position: relative; left: 10px; top: -49px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-albert" style="width: 192px; height: 122px; position: relative; left: 3px; top: 66px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-may" style="width: 192px; height: 122px; position: relative; left: 8px; top: 74px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-mary" style="width: 192px; height: 122px; position: relative; left: 8px; top: 74px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarfh" style="background-image: none; top: -146px; left: 13px; width: 198px; height: 122px; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; " ></div><div id="avatargadget-jane" style="width: 192px; height: 122px; position: relative; left: 33px; top: -113px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarcoat" style="width: 198px; height: 122px; left: 22px; top: -231px; background-image: none; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarclothes-mary" style="width: 198px; height: 122px; position: relative; background-image: none; left: 17px; top: 37px; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avataracc-jane" style="width: 192px; height: 122px; position: relative; left: 11px; top: -222px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div></div>');
              $('.coachcontainer').css('z-index',10);
              loadCoachAccessories(kidid);
              $('.coachcontainer').animate({'left':'750px'}, 1500);
              navigator.notification.alert('the coach says hi', function(){}, 'Coach', 'ok');
            }, 2000);
          $('.coachcontainer').on('tap', function() {
            $('.coachcontainer').animate({'left':'-225px'}, 1500);
          });
          break;
        case "2":
            
            $('.coachcontainer').css({'top':'300px'});
            setTimeout(function() {
                $('.coachcontainer').html('<div id="avatarbody" style="background-attachment: scroll; background-color: transparent; width: 200px; height: 320px; top: 6px; position: relative; background-position: 0px 50%; background-repeat: no-repeat no-repeat; "><div id="avatarhair" style="background-image: none; width: 198px; height: 122px; top: 29px; left: 12px; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; " ></div><div id="avatarhair-joe" style="width: 192px; height: 188px; position: relative; left: 21px; top: -6px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarhair-jane" style="width: 192px; height: 122px; position: relative; left: 13px; top: 65px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes" style="width: 192px; height: 122px; left: 18px; top: -52px; background-image: none; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-joe" style="width: 192px; height: 122px; position: relative; left: 9px; top: -137px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-jane" style="width: 192px; height: 122px; position: relative; left: 10px; top: -49px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-albert" style="width: 192px; height: 122px; position: relative; left: 3px; top: 66px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-may" style="width: 192px; height: 122px; position: relative; left: 8px; top: 74px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-mary" style="width: 192px; height: 122px; position: relative; left: 8px; top: 74px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarfh" style="background-image: none; top: -146px; left: 13px; width: 198px; height: 122px; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; " ></div><div id="avatargadget-jane" style="width: 192px; height: 122px; position: relative; left: 33px; top: -113px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarcoat" style="width: 198px; height: 122px; left: 22px; top: -231px; background-image: none; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarclothes-mary" style="width: 198px; height: 122px; position: relative; background-image: none; left: 17px; top: 37px; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avataracc-jane" style="width: 192px; height: 122px; position: relative; left: 11px; top: -222px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div></div>');
                $('.coachcontainer').css('z-index',10);
                loadCoachAccessories(kidid);
                $('.coachcontainer').animate({'left':'200px'}, 800);
                navigator.notification.alert('try this game', function(){}, 'Coach', 'ok');
              }, 2);
          
          $('.coachcontainer').on('tap', function() {
            //$.mobile.changePage("game-bh1.html", {transition: "flip"});
            navigator.notification.alert('im here', function(){}, 'Coach', 'ok');
          });
          break;
        case "3":
          alert("You are now a master of this page. You are the best");
          break;
          
      }
    }
  });
}

function mworldPlayAudio(kidid, audioId) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"narrations.php",
    async: false,
    data: {kidid:kidid, audioid:audioId}
  }).done();
}

function mworldViewMedia(kidid, mediaId) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"mediaviews.php",
    async: false,
    data: {kidid:kidid, medianame:mediaId}
  }).done();
}

function mworldMpoints(kidid, subject) {
  if(typeof(subject)==='undefined') subject = '';
  points = 0;
  $.ajax({
    type:"POST",
    url:resourceLoc+"getmpoints.php",
    async:false,
    data: {kidid:kidid, subject:subject}
  }).done(function(mpoints) {
    if(mpoints > 0) { points = mpoints;}
  });
  return points;
}

function mworldMpointsUsed(kidid, subject) {
  if(typeof(subject)==='undefined') subject = '';
  usedpoints = 0;
  $.ajax({
    type:"POST",
    url:resourceLoc+"getusedmpoints.php",
    async:false,
    data: {kidid:kidid, subject:subject}
  }).done(function(usedmpoints) {
    if(mpoints > 0) { usedpoints = usedmpoints;}
  });
  return usedpoints;
}

function mworldSaveQuiz(kidid, correct, quizid) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"savequiz.php",
    async:false,
    data: {kidid:kidid, correct:correct, quizid:quizid}
  }).done();
}