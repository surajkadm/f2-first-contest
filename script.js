/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map((student)=>{
    if(student.marks>50){
      console.log(student);
    }
  })
  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  arr.forEach((student)=>{
    if(student.marks>50){
      console.log(student);
    }
  })
  //Write your code here , just console.log
}

function addData() {
  const newStudent={id:4,name:"susan",age:"20",marks:45}
  arr.push(newStudent);
  console.log(newStudent);
  //Write your code here, just console.log
}

function removeFailedStudent() {
 const failedStudent = arr.filter((student)=>{
    if(student.marks<50){
      return false;
    }
    else{
      return true;
    }
  })
  console.log(failedStudent);
  //Write your code here, just console.log
}

function concatenateArray() {

  let newArr = [
    { id: 5, name: "sk", age: "33", marks: 36 },
    { id: 6, name: "pk", age: "44", marks: 39 },
    { id: 7, name: "mk", age: "55", marks: 41 },
  ];

  
    newArr.forEach((student)=>{
      arr.push(student);
    }
    )
    console.log(arr);


  //Write your code here, just console.log
}
