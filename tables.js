var employeeTable = [
  {
    name: "Sam",
    role: { engineer: "Engineer", ba: "BA", designer: "Designer" },
    department: "HR"
  },
  {
    name: "John",
    role: { engineer: "Engineer", ba: "BA", designer: "Designer" },
    department: "Developer"
  },
  {
    name: "David",
    role: { engineer: "Engineer", ba: "BA", designer: "Designer" },
    department: "Security"
  },
  {
    name: "Simon",
    role: { engineer: "Engineer", ba: "BA", designer: "Designer" },
    department: "Stationary"
  }
];

$.each(employeeTable, function(index, value) {
  $("#employee-table").append(
    '<tr id="employeeDetails" class="pr-btm-border fs-13"><td><input type="checkbox" name="selectRow" id="select-row"></td><td class="pd-10">' +
      value.name +
      '</td><td><select id="roles" class="pd-5 bg-green white-color no-border-ip border-rad-4p"><option value="Engineer">' +
      value.role.engineer +
      '</option><option value="BA">' +
      value.role.ba +
      '</option> <option value="Designer">' +
      value.role.designer +
      "</option></select> </td> <td>" +
      value.department +
      '</td><td><input id="delete-btn" onclick="deleteTablerow()" type="button" class="fa fa-trash-alt bg-green white-color no-border-ip border-rad-4p pd-5" value="Delete"></input> </td></tr>'
  );
});

// delete a row on clicking delete button
function deleteTablerow() {
  $("#employee-details").on("click", 'input[value="Delete"]', function() {
    $(this)
      .closest("tr")
      .remove();
  });
}

//select all the rows
function selectAll() {
  $("#employee-details").on("click", "#select-all", function() {
    if ($("#select-all").is(":checked")) {
      $("tr")
        .find('input[type="checkbox"]')
        .prop("checked", true);
    } else {
      $("tr")
        .find('input[type="checkbox"]')
        .prop("checked", false);
    }
  });
}

//delete selected rows
function deleteSelectedrows() {
  $("#employee-details tbody tr")
    .find('input[type="checkbox"]:checked')
    .closest("tr")
    .remove();
}

//change the role for all or selected rows
function changeRole() {
  var roleTochange = $("#select-role").val();
  if ($("#employee-details tbody tr input[type='checkbox']").is(":checked")) {
    $("#employee-details tbody tr input[type='checkbox']:checked")
      .closest("tr")
      .find("#roles")
      .val(roleTochange);
  } else {
    $("#employee-details tbody tr")
      .find("#roles")
      .val(roleTochange);
  }
}

//search for the text across all rows
function filterRows() {
    var searchText = $("#filter-rows").val().toLowerCase();
    $("#employee-details tbody tr").filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
    }); 
}

//tab component
switchTab();
function switchTab(){
  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('active-tab');
		$('.tab-content').removeClass('active-tab');
		$(this).addClass('active-tab');
		$("#"+tab_id).addClass('active-tab');
	})
}





