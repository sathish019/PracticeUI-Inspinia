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
        expenseName: "Bus Ticket",
        paidByuser: "Myself",
        paidAmount: 200
      },
      {
        expenseId: 4000,
        expenseName: "Train Ticket",
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
        expenseName: "Bus Ticket",
        paidByuser: "Myself",
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
        expenseName: "Bus Ticket",
        paidByuser: "Myself",
        paidAmount: 200
      },
      {
        expenseId: 4000,
        expenseName: "Train Ticket",
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
        splitBetweenusers: ["Charlie", "Alan", "Kelso"]
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
        expenseName: "Food",
        paidByuser: "Charlie",
        paidAmount: 500,
        splitBetweenusers: ["Charlie", "Alan", "Kelso"]
      },
      {
        expenseId: 30012,
        expenseName: "Room rent",
        paidByuser: "Alan",
        paidAmount: 700,
        splitBetweenusers: ["Alan", "Kelso"]
      },
      {
        expenseId: 30013,
        expenseName: "Snacks",
        paidByuser: "Kelso",
        paidAmount: 300,
        splitBetweenusers: ["Alan", "Kelso", "Charlie", "Jake", "Kovachs"]
      }
    ],
    groupMembers: ["Charlie", "Alan", "Kelso", "Jake", "Kovachs"]
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
        expenseName: "Room rent",
        paidByuser: "Alan",
        paidAmount: 700,
        splitBetweenusers: ["Alan", "Kelso"]
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
        expenseName: "Food",
        paidByuser: "Charlie",
        paidAmount: 500,
        splitBetweenusers: ["Charlie", "Alan", "Kelso"]
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
        expenseName: "Snacks",
        paidByuser: "Kelso",
        paidAmount: 300,
        splitBetweenusers: ["Alan", "Kelso", "Charlie", "Jake", "Kovachs"]
      }
    ],
    groupMembers: ["Charlie", "Alan", "Kelso", "Jake", "Kovachs"]
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
function renderExpenses() {
  $("#friendsList ul").on('click',function(){
    const selectedFriend = $(this).text();  
    console.log(selectedFriend);

    $.each(friendsLIST, function(index, value) {
        if(value.friendName==selectedFriend){
            $("#renderContent").empty();
            $.each(value.expenseDetails, function(index,value){
                $("#renderContent").append(
                '<div class="mg-t-10p mg-l-40p dp-flex"><div>'+ value.paidByuser +'</div><div class="mg-l-20p">'+ value.paidAmount +'</div></div>'
                );
            });
        }
    });
  });
}
renderExpenses();
