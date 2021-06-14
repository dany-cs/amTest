import React, {useEffect, useState} from 'react'
import { CardsPrint } from './Components/CardsPrint';
import styles from "./scss/Students.module.scss";

export const StudentsDead = () =>{
    
    const [studentsDead, setPersonDead] = useState([]);

    useEffect(() => {
        getStudentsDead();
    }, [])
    
    const getStudentsDead = async () => {
        const data = await fetch('http://localhost:3001/studentsDead');
        const studentsData = await data.json();
        setPersonDead(studentsData);
    }
    return (
       
        <div className={styles.dataStudents}>
            {studentsDead.map((characters) => (
                <CardsPrint characters={characters}/>
            ))}
            </div>
    )
}