import { students } from "@/data/students";

export default function handler(req,res){
    if(req.method === 'GET'){
        console.log(req)

        res.status(200).json(students)

    }
    /*else if(req.method === 'GET' && req.params){
        
        console.log(req)
     }*/else if(req.method === 'POST'){
        const newStudent ={
            id:Date.now(),
          ...req.body
        }
        students.push(newStudent);
        res.status(200).json(newStudent)
    }
}