console.log('js');
const staff = [];
$(document).ready(eomReady);

function eomReady() {
// event listening
    $('.js-input-addbtn').on('click', salariesDue);
    $('.js-output-delbtn').on('click', deleteStaffEntry );

}

// test push to staff array
const clair = {
    lastName: 'Voyant',
    firstName: 'Clair',
    empID: 2845,
    jobTitle: 'Department Head',
    salary: 90000
};

const ima = {
    lastName: 'Supervisor',
    firstName: 'Ima',
    empID: 2322,
    jobTitle: 'Supervisor',
    salary: 72000
};

staff.push(clair, ima);
console.log(staff);

function deleteStaffEntry(event) {
    console.log('Delete ', event);
    console.log('Delete ', this);
    const staffIndex = $(this).data('index');
    console.log('Delete ', staffIndex);
    staff.splice(staffIndex, 1);

    updateDisplay();
}

function salariesDue(event) {
console.log('Who needs to be paid');
const employee = {
firstName: $('.js-input-fName').val(),
lastName: $('.js-input-lName').val(),
empID: $('.js-input-eID').val(),
jobTitle: $('.js-input-title').val(),
salary: $('.js-input-sal').val(),
};

staff.push(employee);
console.log('Salaries Due: ', staff);
updateDisplay();
}

function updateDisplay() {
    $('.js-tableRows').empty();

    let monthlyTotal = 0;

    for (let i = 0; i < staff.length; i++) {

        const staffPerson = staff[i];
        monthlyTotal += (staffPerson.salary * 1);

    $('.js-tableRows').append(`
    <tr>
        <td>${staffPerson.firstName}</td>
        <td>${staffPerson.lastName}</td>
        <td>${staffPerson.empID}</td>
        <td>${staffPerson.jobTitle}</td>
        <td>${staffPerson.salary}</td>
        <td><button class='js-output-delbtn' data-index='${i}'>Delete</button></td>
    </tr>
    `);
}

$('.js-amountDueToStaff').text(`$${monthlyTotal}`);

}

// function clearInput() {

// };


// function assess20KExcess() {

// };


