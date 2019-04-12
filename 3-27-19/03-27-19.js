// var employees = [
//     {
//         name: "doug",
//         payRate: 40,
//         hourWorked: 4,
//         employee_type: "contractor"
//     },
//     {
//         name: "AJ",
//         payRate: 60,
//         hourWorked: 1,
//         employee_type: "full-time"
//     },
//     {
//         name: "jessica",
//         payRate: 41,
//         hourWorked: 7,
//         employee_type: "contractor"
//     },
//     {
//         name: "rachel",
//         payRate: 30,
//         hourWorked: 10,
//         employee_type: "full-time"
//     },
//     {
//         name: "andy",
//         payRate: 100,
//         hourWorked: 20,
//         employee_type: "contractor"
//     },
// ]
// // Generate a list of contractors
// var list = [];
// var totalEmployees = employees.length;
// for(var i = 0; i < totalEmployees; i++){
//     list.push(employees[i].name);
// }
// console.log(list);

// // Calculate total pay to contractors
// var totalPay = 0;
// for(var i = 0; i < totalEmployees; i++){
//     totalPay += employees[i].payRate * employees[i].hourWorked;
    
// }
// console.log('Total Pay is ' + totalPay);


// // Find contractors that earn more than $35/hr
// var highPayRate = []
// for(var i = 0; i < totalEmployees; i++){
//     if(employees[i].payRate > 35){
//         highPayRate.push(employees[i].name);
//     }
// }
// console.log(highPayRate);
    
    

// Debug the following code

var company = {
    employees: [
        {
            name: "doug"
        },
        {
            name: "AJ"
        }
    ],

    getName: function(employee){
        return employee.name
    },
    getNames: function(){
        
        return this.employees.map(this.getName)
    },
    delayedGetNames: function(){
        function names() {
            let names = this.getNames();
            return console.log(names);
        }
        setTimeout(names.bind(this),500)
    }
}
console.log(company.delayedGetNames());

