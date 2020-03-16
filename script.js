console.log('js');
const staff = [];

$(document).ready(eomReady); {
    console.log('Ready To Pay');
}

// test push to staff array
// salariesDue(clair)
// const clair = {
//     firstName: 'Clair',
//     lastName: 'Voyant',
//     empID: 2845,
//     jobTitle: 'Department Head',
//     salary: 90000
// };

// const ima = {
//     firstName: 'Ima',
//     lastName: 'Supervisor',
//     empID: 2322,
//     jobTitle: 'Supervisor',
//     salary: 72000
// };

// staff.push(clair, ima);
// console.log(staff);

function clearInput() {
    $('.js-input-firstName').val(''),
    $('.js-input-lastName').val(''),
    $('.js-input-eID').val(''),
    $('.js-input-title').val(''),
    $('.js-input-sal').val('')
}

function deleteStaffEntry(event) {
    // console.log('Delete ', event);
    // console.log('Delete ', this);
    const staffIndex = $(this).data('index');
    //console.log('Delete ', staffIndex);
    staff.splice(staffIndex, 1);
    updateDisplay();
}

function eomReady() {
    // event listening
    $('.js-employeesInput').on('submit', salariesDue);
    $('.js-table-body').on('click', '.js-output-delbtn', deleteStaffEntry );
}

function salariesDue(event) {
    event.preventDefault();
    console.log('We pay our valued staff in a timely manner');
    const employee = {
        firstName: $('.js-input-firstName').val(),
        lastName: $('.js-input-lastName').val(),
        empID: $('.js-input-eID').val(),
        jobTitle: $('.js-input-title').val(),
        salary: parseFloat($('.js-input-sal').val()),
    };
    validateSalary();
    staff.push(employee);
    console.log('Salary Payments Pending: ', staff);
    updateDisplay();
}

function validateSalary() {
    if (parseFloat($('.js-input-sal').val()) <= 21999) {
        alert('Warning: this number is too low, the minimum ANNUAL salary is 22000. This employee will be reviewed before payroll is issued.');
    }
}

function updateDisplay() {
    $('.js-table-body').empty();
    let monthlyTotal = 0;
    for (let i = 0; i < staff.length; i++) {
        const staffPerson = staff[i];
        monthlyTotal += Math.round((staffPerson.salary) / 12);
        $('.js-table-body').append(`
            <tr>
            <td>${staffPerson.firstName}</td>
            <td>${staffPerson.lastName}</td>
            <td>${staffPerson.empID}</td>
            <td>${staffPerson.jobTitle}</td>
            <td>$${staffPerson.salary}</td>
            <td><button class='js-output-delbtn' data-index='${i}'>Delete</button></td>
            </tr>
        `);
    clearInput();
    }
    $('.js-amountDueToStaff').text(`$${monthlyTotal.toFixed(2)}`);
    excess20K(monthlyTotal);
    function excess20K() {
        if (monthlyTotal > 20000) {
            $('.totalDue').css('background-color', 'red');
            $('.totalDue').css('color', 'white');
            $('.totalDue').css('text-align', 'center');
        }
        else {
            $('.totalDue').css('background-color', 'lavender');
            $('.totalDue').css('margin', '40px 25px 0 0');
            $('.totalDue').css('font-size', '25px');
            $('.totalDue').css('font-weight', 'bold');
            $('.totalDue').css('color', 'green');
            $('.totalDue').css('text-align', 'right');
        }
    }
}