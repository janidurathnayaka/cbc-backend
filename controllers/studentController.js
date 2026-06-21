 import Student from "../models/student.js"; 

 export function getStudents (req,res){
    Student.find().then (
        (studentList)=>{
            res.json ({
                list : studentList
            })
        }
    )
 }




 export function createStudent(req,res){

    const newStudent = new Student (req,body)



      newStudent.save()
        .then(() => {
            res.json({ message: "Student created" });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
 }


 export function deleteStudent(req, res) {
    const id = req.params.id;

    Student.findByIdAndDelete(id)
        .then(() => {
            res.json({ message: "Student deleted" });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
}