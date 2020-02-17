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

function deleteTablerow() {
  $("table").on("click", 'input[value="Delete"]', function() {
    $(this)
      .closest("tr")
      .remove();
  });
}

function selectAll() {
  $("table").on("click", "#select-all", function() {
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

function deleteSelectedrows() {
  $("table tbody tr")
    .find('input[type="checkbox"]:checked')
    .closest("tr")
    .remove();
}

function changeRole() {
  var roleTochange = $("#select-role").val();
  if ($("table tbody tr input[type='checkbox']").is(":checked")) {
    $("table tbody tr input[type='checkbox']:checked")
      .closest("tr")
      .find("#roles")
      .val(roleTochange);
  } else {
    $("table tbody tr")
      .find("#roles")
      .val(roleTochange);
  }
}

function filterRows() {
    console.log($("#filter-rows").val());
    var searchText = $("#filter-rows").val().toLowerCase();
    
}


