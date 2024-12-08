let studentName = [ "Mario", "Khan", "Fakher", "Ahmad"];

while (true){

  let choice = prompt(
    "Choose an option \n1. Add a student\n2. Remove a student\n3. Display all students \n0. To quit.");

  if ( choice == "1"){

    let addstudent = prompt("Enter the name of the student to add");

    if(studentName.includes(addstudent)){
      alert(` ${addstudent} is already in the list.`)
    }else{
      studentName.push(addstudent);
      alert(`${addstudent} is added to list.`)
    }
  
  } else if(choice =="2"){
        let nameToRemove= prompt(`Enter the name of the student to remove`)
    if(studentName.includes(nameToRemove)){
        studentName = studentName.filter(name => name!= nameToRemove);
        alert(`${nameToRemove} has been removed`);
    }
    else{
        alert(`${nameToRemove} is not present in the list`)
    }
    }else if ( choice == "3"){
    alert(`All students in the list : \n${studentName.join("\n")}`)
  }else if ( choice === "0"){
    alert("Exit the program" )
    break;
  }else{
    alert("Please enter a valid choice")
  }
 
}