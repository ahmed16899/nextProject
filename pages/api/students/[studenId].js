import { students } from "@/data/students";
export default function handler(req, res) {
  const  studentId  = req.query.studenId;
 // console.log(studentId , 'iddddddddddddddddddddddd')
  if(req.method === 'GET')
  {
    const Student = students.find(
        ( student) =>  student.id === parseInt( studentId)
      );
      res.status(200).json(Student);
  }
  else if(req.method === 'PUT')
  { 
    
    const index = students.findIndex(
        ( student) =>  student.id === parseInt(studentId)
      );
      students.splice(index, 1 , req.body);
      //console.log(students[index] , 'udated')
      res.status(200).json(students[index]);

  } 
  else if(req.method === 'DELETE')
  {
    const deletedStudent = students.find(
        ( student) =>  student.id === parseInt( studentId)
      );
      const index = students.findIndex(
        ( student) =>  student.id === parseInt(studentId)
      );
      students.splice(index, 1);
      res.status(200).json(deletedStudent);
  } 

 
}


