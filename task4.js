// Cretae an array of student objects like given below and Complete the Following function to change the array of objets
//                         =>  var student = [
//                              { id: 1, name: "KishoreGanesh k", total: 72, gender:"Male" } ,
//                               { id: 2, name:"Sundharii L", total: 55, gender:"Male" },
//                               ]
//                               <!-- impment the following Function -->
//                               1) findStudentByid(id) - return student object for the given id if found else null
//                               2) findStudentsByGender(gender) - returns array of students for the given gender
//                               3) addStudent( id, name, total, gender ) - add new student to list of students
//                               4) deleteStudentByid(id) - delete the Student From the array using id
//                               5) PrintStudents - Print The Lsit Of Students row Each row is in Format
//                                ID 1. Name:KishoreGanesh K ( Male ), Total: 72
let student = [
    { id: 1, name: "KishoreGanesh k", total: 72, gender: "Male" },
    { id: 2, name: "Sundharii L", total: 55, gender: "Female" },
]
//------------Q3------------>
student.push({ id: 3, name: "Pavithra B", total: 75, gender: "Female" });
console.log(student);

//------------Q2----------->
let femaleStudents = findStudentsByGender("Female");
let maleStudents = findStudentsByGender("Male");

function findStudentsByGender(a) {
    let gen = '';
    for (var i = 0; i < student.length; i++) {
        if (student[i].gender === a) {
            gen += (student[i].name) + ", ";
        }
    }
    return gen;
}


console.log("Female students: ", femaleStudents);
console.log("Male students: ", maleStudents);

//------------Q1--------->

let studentObject = findStudentByid(2);

function findStudentByid(a) {
    let iD=null;
    for (var i = 0; i < student.length; i++) {
        if (student[i].id === a) {
            iD = (student[i]);
        }
    }
    return iD;
}


console.log("Object of student: ", studentObject);

//----------Q4--------->

let deletestudent = deleteStudentByid(1);

function deleteStudentByid(a) {
    for (var i = 0; i < student.length; i++) {
        if (student[i].id === a) {
            let deletestd = student.splice(i, 1);

        }
    }
    return student
}
console.log("Remaining student: ", deletestudent);

//----------Q5-------->
//ID 1. Name:KishoreGanesh K ( Male ), Total: 72
for (let i = 0; i < student.length; i++){
    console.log('ID ',student[i].id,'. Name:',student[i].name,'(',student[i].gender,')','Total: ',student[i].total)
}