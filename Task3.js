let obj = [];
let choice;
while(true) {
    choice = prompt(`Choose an option: \n 1. Add a student \n 2. Remove a student \n 3. Display all \n 0. Quit`);
    
    if (choice == '1') {
        let name = prompt(`Enter the name of Student to add`);
        let email = prompt(`Enter the Email of Student to add`);
        
       
        let exists = obj.find(student => student.name === name && student.email === email);
        
        if (exists) {
            alert(`${name} with Email ${email} is already in the list.`);
        } else {
            obj.push({ name, email });
            alert(`${name} with Email ${email} has been added to the list.`);
        }
    } 
    
    else if (choice == '2') {
        let name = prompt(`Enter the name of Student to remove`);
        let email = prompt(`Enter the Email of Student to remove`);
        
      
        let index = obj.findIndex(student => student.name === name && student.email === email);
        
        if (index !== -1) {
            obj.splice(index, 1);
            alert(`${name} with Email ${email} has been removed from the list.`);
        } else {
            alert(`${name} with Email ${email} is not in the list.`);
        }
    }
    
    else if (choice == '3') {
        if (obj.length === 0) {
            alert("No students in the list.");
        } else {
            let studentList = obj.map(student => `${student.name} - ${student.email}`).join("\n");
            alert(`All students in the list: \n${studentList}`);
        }
    }
    
    else if (choice === '0') {
        alert(`Exit Program`);
        break;
    } 
    
    else {
        alert(`Please enter a valid choice`);
    }
};
 
