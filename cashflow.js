//self data
var selfDATA = [
  {
    myId: 10,
    myName: "Kovachs",
    myFriends: [
      {
        friendId: 1,
        friendId: 2,
        friendId: 3,
        friendId: 4,
        friendId: 5
      }
    ],
    myGroups: [
      {
        groupId: 10011,
        groupId: 10012,
        groupId: 10013,
        groupId: 10014
      }
    ]
  }
];

//friends Expenses
var friendsLIST = [
  {
    friendId: 1,
    friendName: "Charlie",
    expenseDetails: [
      {
        expenseId: 3000,
        expenseName: "Bus Ticket",
        paidByuser: "Kovachs",
        paidAmount: 200
      },
      {
        expenseId: 4000,
        expenseName: "Train Ticket",
        paidByuser: "Charlie",
        paidAmount: 300
      }
    ]
  },
  {
    friendId: 2,
    friendName: "Alan",
    expenseDetails: [
      {
        expenseId: 3000,
        expenseName: "Movie Ticket",
        paidByuser: "Kovachs",
        paidAmount: 200
      },
      {
        expenseId: 4000,
        expenseName: "Taxi Fare",
        paidByuser: "Alan",
        paidAmount: 300
      }
    ]
  },
  {
    friendId: 3,
    friendName: "Jake",
    expenseDetails: [
      {
        expenseId: 3000,
        expenseName: "Auto Fare",
        paidByuser: "Kovachs",
        paidAmount: 200
      },
      {
        expenseId: 4000,
        expenseName: "Train Ticket",
        paidByuser: "Kovachs",
        paidAmount: 300
      }
    ]
  },
  {
    friendId: 4,
    friendName: "Kelso",
    expenseDetails: [
      {
        expenseId: 3000,
        expenseName: "Snacks",
        paidByuser: "Kovachs",
        paidAmount: 200
      },
      {
        expenseId: 4000,
        expenseName: "Flight Ticket",
        paidByuser: "Kelso",
        paidAmount: 300
      }
    ]
  }
];

//group expenses
var groupLIST = [
  {
    groupId: 10011,
    groupName: "Weekend",
    expenseDetails: [
      {
        expenseId: 20011,
        expenseName: "Food",
        paidByuser: "Charlie",
        paidAmount: 500,
        splitBetweenusers: ["Charlie", "Alan", "Jake"]
      },
      {
        expenseId: 20012,
        expenseName: "Room rent",
        paidByuser: "Alan",
        paidAmount: 700,
        splitBetweenusers: ["Alan", "Kelso"]
      }
    ],
    groupMembers: ["Charlie", "Alan", "Kelso", "Jake", "Kovachs"]
  },
  {
    groupId: 10012,
    groupName: "Road Trip",
    expenseDetails: [
      {
        expenseId: 30011,
        expenseName: "Breakfast",
        paidByuser: "Charlie",
        paidAmount: 500,
        splitBetweenusers: ["Charlie", "Alan", "Kelso"]
      },
      {
        expenseId: 30012,
        expenseName: "Bus Ticket",
        paidByuser: "Alan",
        paidAmount: 700,
        splitBetweenusers: ["Alan", "Kelso"]
      },
      {
        expenseId: 30013,
        expenseName: "Snacks",
        paidByuser: "Kelso",
        paidAmount: 300,
        splitBetweenusers: ["Alan", "Kelso", "Jake", "Kovachs"]
      }
    ],
    groupMembers: ["Alan", "Kelso", "Jake", "Kovachs"]
  },
  {
    groupId: 10013,
    groupName: "Bangalore Trip",
    expenseDetails: [
      {
        expenseId: 40011,
        expenseName: "Food",
        paidByuser: "Charlie",
        paidAmount: 500,
        splitBetweenusers: ["Charlie", "Alan", "Kelso"]
      },
      {
        expenseId: 40012,
        expenseName: "Flight ticket",
        paidByuser: "Kelso",
        paidAmount: 700,
        splitBetweenusers: ["Kelso", "Alan"]
      },
      {
        expenseId: 40013,
        expenseName: "Snacks",
        paidByuser: "Kelso",
        paidAmount: 300,
        splitBetweenusers: ["Alan", "Kelso", "Charlie", "Jake", "Kovachs"]
      }
    ],
    groupMembers: ["Charlie", "Alan", "Kelso", "Jake", "Kovachs"]
  },
  {
    groupId: 10014,
    groupName: "Chennai Trip",
    expenseDetails: [
      {
        expenseId: 50011,
        expenseName: "Snacks",
        paidByuser: "Charlie",
        paidAmount: 500,
        splitBetweenusers: ["Charlie", "Alan", "Jake"]
      },
      {
        expenseId: 50012,
        expenseName: "Room rent",
        paidByuser: "Alan",
        paidAmount: 700,
        splitBetweenusers: ["Alan", "Kelso"]
      },
      {
        expenseId: 50013,
        expenseName: "Drinks",
        paidByuser: "Kelso",
        paidAmount: 300,
        splitBetweenusers: ["Alan", "Charlie", "Jake", "Kovachs"]
      }
    ],
    groupMembers: ["Charlie", "Alan", "Jake", "Kovachs"]
  }
];

//render list of groups
function renderGroupslist(groupLIST) {
  $("#groupsList").empty();
  $.each(groupLIST, function(index, value) {
    $("#groupsList").append(
      '<ul class="fs-14 pd-2">' + value.groupName + "</ul>"
    );
  });
}
renderGroupslist(groupLIST);

//render list of friends
function renderFriendslist(friendsLIST) {
  $("#friendsList").empty();
  $.each(friendsLIST, function(index, value) {
    $("#friendsList").append(
      '<ul class="fs-14 pd-2">' + value.friendName + "</ul>"
    );
  });
}
renderFriendslist(friendsLIST);

//add new group
function createGroup() {
  const newGroupname = $("#addGroup").val();
  groupLIST.push({ groupName: newGroupname });
  renderGroupslist(groupLIST);
}

//add new friend
function createFriend() {
  const newFriendname = $("#addFriend").val();
  friendsLIST.push({ friendName: newFriendname });
  renderFriendslist(friendsLIST);
}

//render expenses between a friend
function renderExpensesbetweenfriends() {
  $("#friendsList ul").on("click", function() {
    const selectedFriend = $(this).text();
    $.each(friendsLIST, function(index, value) {
      if (value.friendName == selectedFriend) {
        $("#renderContent").empty();
        $.each(value.expenseDetails, function(index, value) {
          if (value.paidByuser == selectedFriend) {
            $("#renderContent").append(
                '<div class="mg-t-10p mg-l-40p dp-flex"><div class="w-18"><b>'+
                value.expenseName +'</b></div><div class="mg-l-10p dp-flex-c"><div>&nbspyou barrowed&nbsp<i class="fa fa-inr mg-r-5p"></i>' +
                (value.paidAmount)/2 +'</div><div class="mg-t-5p mg-l-10p fs-13 pr-font-color">' +
                value.paidByuser +'&nbsppaid&nbsp'+ 
                value.paidAmount +'</div></div></div>'
            );
          } else {
            $("#renderContent").append(
                '<div class="mg-t-10p mg-l-40p dp-flex"><div class="w-18"><b>'+
                value.expenseName +'</b></div><div class="mg-l-10p dp-flex-c"><div>&nbspyou lent&nbsp<i class="fa fa-inr mg-r-5p"></i>' +
                (value.paidAmount)/2 +'</div><div class="mg-t-5p mg-l-10p fs-13 pr-font-color">&nbspyou paid&nbsp'+ 
                value.paidAmount +'</div></div></div>'
            );
          }
        });
      }
    });
  });
}
renderExpensesbetweenfriends();

//render group expenses
function renderExpensesbetweengroups() {
  $("#groupsList ul").on("click", function() {
    const selectedGroup = $(this).text();
    $.each(groupLIST, function(index, value) {
      const { groupName, groupMembers, expenseDetails } = value;
      if (groupName == selectedGroup) {
        $("#renderContent").empty();

        $("#renderContent")
          .append(`<div class="w-100 align-font-center mg-t-20p pr-fnt-green-color"><b>
                ${groupName} </b></div><div class="dp-flex mg-l-40p mg-t-10p"><div class="groupmembr dp-flex-c"><span><b>Group Members</b></span></div><div class="dp-flex-c mg-l-40p"><span><b>Expenses</b></span><div class="expenselst dp-flex-c"></div></div></div>`);
        $.each(groupMembers, function(index, value) {
          $(".groupmembr").append(
            '<div class="fs-14 pd-2">' + value + "</div>"
          );
        });
        $.each(expenseDetails, function(index, value) {
          const { expenseId, expenseName, paidByuser, paidAmount } = value;  
          $(".expenselst").append(
            '<div class="fs-14 pd-2 dp-flex"><span class="pr-fnt-green-color">' +
              expenseName +
              ' - </span><div class="dp-flex-c"><div class="dp-flex">&nbsp' +
              paidByuser +
              '&nbsppaid&nbsp<i class="fa fa-inr"></i>' +
              paidAmount +
              "</div><div id=" +
              expenseId +
              ' class="expensediscriptn pr-font-color">' +
              paidByuser +
              "&nbspowed</div></div></div>"
          );

          $.each(value.splitBetweenusers, function(index, usernames) {
            $("#" + value.expenseId).append(`<span> ${usernames} </span>`);
          });
        });
      }
    });
  });
}
renderExpensesbetweengroups();