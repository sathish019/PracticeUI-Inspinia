$("#register-pg").click(function() {
  window.location.href = "Register.html";
});

$("#login-pg").click(function() {
  window.location.href = "Login.html";
});

//Login page username: "eve.holt@reqres.in" password: "cityslika"
$("#dashboardv1").click(function(){
  var emailLogin = $("#user-email").val();
  var passWord = $("#pass-word").val();
  $.post("https://reqres.in/api/login",{email:emailLogin,password:passWord}).then(function(data){
    window.location.href = "Dashboard-v-1.html";
  },function(data){
    alert(data.responseJSON.error);
  });
});

//Register page email: "eve.holt@reqres.in" password: "pistol"
$("#create-user").click(function(){
  var emailLogin = $("#register-email").val();
  var passWord = $("#register-password").val();
  $.post("https://reqres.in/api/register",{email:emailLogin,password:passWord}).then(function(data){
    alert("Registeration successful");
  },function(data){
    alert(data.responseJSON.error);
  });
});


function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

var dropdown = document.getElementsByClassName("dropdown-btn");

var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("dropdownOptions");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//chatbox
var clickCount = 0;

$("#chat-btn").click(function() {
  clickCount++;
  if (clickCount % 2 == 0) {
    $("#chat-box").hide();
  } else $("#chat-box").show();
});

var chats = {
  first: "Hello, Welcome to Inspinia+",
  second: "How may I help you ?",
  third: "Please hold on.."
};

var message = document.getElementById("chat-box-enter");
var enterKeycount = 0;
message.addEventListener("keydown", function(e) {
  var textBox = message.value;
  if (e.keyCode === 13) {
    enterKeycount++;
    console.log(enterKeycount);
    if (enterKeycount === 1) {
      $("#chat-messages").append(
        '<div class="float-l pr-green-color pd-10 border-rad-4p w-ft-content w-66">' +
          textBox +
          "</div>"
      );
      $("#chat-messages").append(
        '<div class="float-r mg-r-10p mg-t-10p bg-F3F3F4 pd-10 border-rad-4p w-ft-content">' +
          chats.first +
          "</div>"
      );
    } else if (enterKeycount === 2) {
      $("#chat-messages").append(
        '<div class="float-l mg-t-10p pr-green-color pd-10 border-rad-4p w-ft-content">' +
          textBox +
          "</div>"
      );
      $("#chat-messages").append(
        '<div class="float-r mg-r-10p mg-t-10p bg-F3F3F4 pd-10 border-rad-4p w-ft-content">' +
          chats.second +
          "</div>"
      );
    } else if (enterKeycount === 3) {
      $("#chat-messages").append(
        '<div class="float-l mg-t-10p pr-green-color pd-10 border-rad-4p w-ft-content">' +
          textBox +
          "</div>"
      );
      $("#chat-messages").append(
        '<div class="float-r mg-r-10p mg-t-10p bg-F3F3F4 pd-10 border-rad-4p w-ft-content">' +
          chats.third +
          "</div>"
      );
    }
  }
});
