// PrintDeveloperbyMap function
function PrintDeveloperbyMap() {
    const employees = [
        {id:1, name:"john", age:"18", profession:"developer"},
        {id:2, name:"jack", age:"20", profession:"developer"},
        {id:3, name:"karen", age:"19", profession:"admin"}
    ];
    
    const developers = employees.filter(employee => employee.profession === "developer");
    const developerNames = developers.map(developer => developer.name);
    
    console.log(developerNames);
}

// PrintDeveloperbyForEach function
function PrintDeveloperbyForEach() {
    const employees = [
        {id:1, name:"john", age:"18", profession:"developer"},
        {id:2, name:"jack", age:"20", profession:"developer"},
        {id:3, name:"karen", age:"19", profession:"admin"}
    ];
    
    employees.forEach(employee => {
        if(employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// addData function
function addData() {
    const employees = [
        {id:1, name:"john", age:"18", profession:"developer"},
        {id:2, name:"jack", age:"20", profession:"developer"},
        {id:3, name:"karen", age:"19", profession:"admin"}
    ];
    
    const newEmployee = {id:4, name:"susan", age:"20", profession:"intern"};
    employees.push(newEmployee);
    
    console.log(employees);
}

// removeAdmin function
function removeAdmin() {
    const employees = [
        {id:1, name:"john", age:"18", profession:"developer"},
        {id:2, name:"jack", age:"20", profession:"developer"},
        {id:3, name:"karen", age:"19", profession:"admin"}
    ];
    
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    
    console.log(filteredEmployees);
}

// ConcatinateArray function
function ConcatinateArray() {
    const employees = [
        {id:1, name:"john", age:"18", profession:"developer"},
        {id:2, name:"jack", age:"20", profession:"developer"},
        {id:3, name:"karen", age:"19", profession:"admin"}
    ];

    const newArray = [
        {id:4, name:"alice", age:"22", profession:"manager"},
        {id:5, name:"bob", age:"21", profession:"developer"},
        {id:6, name:"charlie", age:"23", profession:"designer"}
    ];

    const concatenatedArray = employees.concat(newArray);
    
    console.log(concatenatedArray);
}
