// Slide contents => New data for report
slideContents("#slide-up1", "#slide-down1", "#slide-content1");
closeContent("#close-content1", "#new-data-for-report");

// Slide contents => Read below comments and tweets
slideContents("#slide-up2", "#slide-down2", "#comments-and-tweets");
closeContent("#close-content2", "#read-below-comments-tweets");

// Slide contents => Alpha project
slideContents("#slide-up3", "#slide-down3", "#slide-content3", "#today-schedule");
closeContent("#close-content3", "#alpha-project");

function slideContents(arrowUp, arrowDown, content1, content2){
  $(arrowUp).click(function(){
    $(content1).slideUp(function(){
      $(content2).slideUp();
      $(arrowUp).hide();
      $(arrowDown).show();
    });
  });
  $(arrowDown).click(function(){
    $(content1).slideDown(function(){
      $(content2).slideDown();
      $(arrowDown).hide();
      $(arrowUp).show();
    });
  });
}

function closeContent(closeBtn, content){
  $(closeBtn).click(function(){
    $(content).hide();
  });
}






// Comments and tweets in dashboard-v-1
var commentsAndtweets = [
  {
    username: "@Alan Marry",
    message:
      "I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    timestamp: "1 minute ago"
  },
  {
    username: "@Stock Man",
    message: "Check this stock chart.This price is crazy!",
    timestamp: "2 hours ago"
  },
  {
    username: "@kevin Smith",
    message: "Lorem ipsum unknown printer took a galley",
    timestamp: "2 minutess ago"
  },
  {
    username: "@Jonathan Febrick ",
    message: "The standard chunk of Lorem Ipsum",
    timestamp: "1 hour ago"
  },
  {
    username: "@Alan Marry",
    message:
      "I belive that. Lorem Ipsum is simply dommy text of the printing and typesetting industry.",
    timestamp: "1 minute ago"
  },
  {
    username: "@Stock Man",
    message: "Lorem ipsum unknown printer took a galley",
    timestamp: "2 hours ago"
  }
];

$.each(commentsAndtweets, function(index, value) {
  $("#comments-and-tweets").append(
    '<div class="dp-flex-c pd-20 fs-13 pr-btm-border "><div><span class="pr-fnt-green-color">' +
      value.username +
      '</span><span class="mg-l-5p">' +
      value.message +
      '</span></div><div class="mg-t-10p c4-color"><span class="fa fa-clock-o mg-r-5p"></span>' +
      value.timestamp +
      "</div></div>"
  );
});

// Daily feed in dashboard-v-1
var dailyFeed = [
  {
    username: "Monica Smith",
    message: "Posted a new blog.",
    time: "Today 5:60 pm - 12.06.2014",
    timestamp: "5m ago"
  },
  {
    username: "Monica Smith",
    message: "Posted a new blog.",
    time: "Today 5:60 pm - 12.06.2014",
    timestamp: "5m ago"
  },
  {
    username: "Monica Smith",
    message: "Posted a new blog.",
    time: "Today 5:60 pm - 12.06.2014",
    timestamp: "5m ago"
  },
  {
    username: "Monica Smith",
    message: "Posted a new blog.",
    time: "Today 5:60 pm - 12.06.2014",
    timestamp: "5m ago"
  },
  {
    username: "Monica Smith",
    message: "Posted a new blog.",
    time: "Today 5:60 pm - 12.06.2014",
    timestamp: "5m ago"
  },
  {
    username: "Monica Smith",
    message: "Posted a new blog.",
    time: "Today 5:60 pm - 12.06.2014",
    timestamp: "5m ago"
  },
  {
    username: "Monica Smith",
    message: "Posted a new blog.",
    time: "Today 5:60 pm - 12.06.2014",
    timestamp: "5m ago"
  }
];

$.each(dailyFeed, function(index, value) {
  $("#daily-feed").append(
    '<div class="dp-flex pd-20 fs-13 pr-btm-border"><div class="circle-34 d9-bg-color"></div><div class="dp-flex-sp-bw w-100"><div class="mg-l-10p"><div><span><b>' +
      value.username +
      "</b></span><span class='mg-l-5p'>" +
      value.message +
      '</span></div><div class="c4-color">' +
      value.time +
      '</div></div><div class="c4-color">' +
      value.timestamp +
      "</div></div></div>"
  );
});

var todaySchedule = [
  {
    scheduledTime: "6 am",
    requestedTime: "2 hours ago",
    taskName: "Meeting",
    content:
      "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale."
  },
  {
    scheduledTime: "6 am",
    requestedTime: "2 hours ago",
    taskName: "Meeting",
    content:
      "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale."
  },
  {
    scheduledTime: "6 am",
    requestedTime: "2 hours ago",
    taskName: "Meeting",
    content:
      "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale."
  },
  {
    scheduledTime: "6 am",
    requestedTime: "2 hours ago",
    taskName: "Meeting",
    content:
      "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale."
  },
  {
    scheduledTime: "6 am",
    requestedTime: "2 hours ago",
    taskName: "Meeting",
    content:
      "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale."
  },
  {
    scheduledTime: "6 am",
    requestedTime: "2 hours ago",
    taskName: "Meeting",
    content:
      "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale."
  }
];

$.each(todaySchedule, function(index, value) {
  $("#today-schedule").append(
    '<div class="pd-20 dp-flex fs-13"><div class="dp-flex-c mg-r-10p c-right-border pl-10"><div class="pd-10 bg-F3F3F4 mg-l-50p"><span class="fa fa-suitcase border-rad-4p"></span></div><div class="dp-flex-r-rev mg-r-10p mg-t-5p">' +
      value.scheduledTime +
      '</div><div class="dp-flex-r-rev mg-r-10p mg-t-5p pr-fnt-green-color">' +
      value.requestedTime +
      '</div></div><div class="dp-flex-c"><div><b>' +
      value.taskName +
      '</b></div><div class="mg-t-10p">' +
      value.content +
      "</div></div></div>"
  );
});
