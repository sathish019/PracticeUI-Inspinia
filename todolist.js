var todaysActivity = [
    {
        taskname: "Project discussion",
        duedate: "12/03/2020"
    },
    {
        taskname: "Team lunch",
        duedate: "11/03/2020"
    },
    {
        taskname: "Conference",
        duedate: "12/03/2020"
    },
    {
        taskname: "Team meeting",
        duedate: "13/03/2020"
    },
    {
        taskname: "Culturals",
        duedate: "13/03/2020"
    }
];

//render to-do list table rows
function renderToDoList(todaysActivity){
    $("#tasksforToday").empty();
    $.each(todaysActivity, function(index,value){
        $("#tasksforToday").append('<tr class="pr-btm-border"><td class="pd-10"><input type="checkbox" onclick="taskStatus()" id=""></td><td class="align-font-left w-70"><input type="text" class="border-rad-4p no-border-ip pd-5 w-100 bg-transprnt" name="taskName" value="' + 
        value.taskname +'"></input></td><td class="w-27"><input type="text" class="border-rad-4p no-border-ip pd-5 align-font-center bg-transprnt taskDatefilter" name="taskDue" value="' + 
        value.duedate +'"></input></td><td class="w-32"><input type="button" onclick="editTask()" class="pd-5 bg-green white-color no-border-ip border-rad-4p" value="Edit"></input><input type="button" onclick="deleteTask()" class="pd-5 mg-l-10p bg-green white-color no-border-ip border-rad-4p" value="Delete"></input></td></tr>');
    });
}
renderToDoList(todaysActivity);

//add new task
function addTask(){
    var taskToadd = $("#taskName").val();
    var taskDatetoadd = $("#taskDate").val();
    todaysActivity.push({taskname:taskToadd,duedate:taskDatetoadd});
    renderToDoList(todaysActivity);
}

//delete a task
function deleteTask(){
    $("#tasksforToday").on("click", 'input[value="Delete"]', function() {
        $(this).closest("tr").hide();
    });
}

//change the task status
function taskStatus(){
    $("#tasksforToday").on("click", 'input[type="checkbox"]', function() {
       if($(this).closest('tr input[type="checkbox"]').is(":checked")){
        $(this).parents("tr").find('input[value="Edit"]').hide();
        $(this).closest("tr").addClass('c-bg-lblue');
        $(this).closest("tr").find('input[name="taskName"]').addClass("font-st-lthrough");
       }
       else {
        $(this).parents("tr").find('input[value="Edit"]').show();   
        $(this).closest("tr").removeClass('c-bg-lblue'); 
        $(this).closest("tr").find('input[name="taskName"]').removeClass("font-st-lthrough");
       }
    });
}

//edit a task
function editTask(){
    $("#tasksforToday").on("click", 'input[value="Edit"]', function() {
        var taskNametoedit = $(this).parents("tr").find('input[name="taskName"]').val();
        $(this).parents("tr").find('.btnn-cancel').remove();
        $(this).parents("tr").find('.btnn-update').remove();
        $(this).parents("tr").find("td:eq(1)").html('<input type="text" class="border-rad-4p no-border-ip pd-5 w-100 bg-transprnt" name="taskName" value="'+ taskNametoedit +'"></input>');
        $(this).parents("tr").find("td:eq(3)").prepend('<button class="pd-5 bg-green white-color no-border-ip border-rad-4p btnn-update" onclick="updateTask()">Update</button><button class="pd-5 mg-l-10p bg-green white-color no-border-ip border-rad-4p btnn-cancel" onclick="hideEditoption()">Cancel</button>');
        $(this).hide();
    });
}

//cancelling edit option
function hideEditoption(){
    $("#tasksforToday").on("click", '.btnn-cancel', function() {
        $(this).parents("tr").find('input[value="Edit"]').show();
        $(this).parents("tr").find('.btnn-update').remove();
        $(this).parents("tr").find('.btnn-cancel').remove();
    });
}

//update task
function updateTask(){
    $("#tasksforToday").on("click", '.btnn-update', function() {
        var taskToupdate = $(this).parents("tr").find('input[name="taskName"]').val();
        $(this).parents("tr").find('input[name="taskName"]').text(taskToupdate);
        $(this).parents("tr").prop('input[name="taskName"]', taskToupdate);
        $(this).parents("tr").find('input[value="Edit"]').show();
        $(this).parents("tr").find('.btnn-cancel').remove();
        $(this).parents("tr").find('.btnn-update').remove();
    });
}

//filter tasks based on status
function filterTasks(){
    var selectedTask = $("#selectStatus").val();
    $("#tasksforToday tr").filter(function(){
        var scheduledDate = $(this).find('input[name="taskDue"]').val();
        if(selectedTask=="Due"){
            $(this).toggle(scheduledDate=="13/03/2020");
        }
        else if(selectedTask=="Completed"){
            $(this).toggle(scheduledDate=="11/03/2020");
        }
        else if(selectedTask=="In Progress"){
            $(this).toggle(scheduledDate=="12/03/2020");
        }
        else{renderToDoList(todaysActivity);}  
    });

}

//search for the task names
function searchTasks() {
    var searchText = $("#searchBytaskname").val().toLowerCase();
    $("#tasksforToday tr").filter(function(){
      var textinRow = $(this).find('input[name="taskName"]').val().toLowerCase();  
      $(this).toggle(textinRow.indexOf(searchText) > -1);
    }); 
}