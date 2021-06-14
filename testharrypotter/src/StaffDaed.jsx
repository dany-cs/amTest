import React, {useEffect, useState} from 'react'
import styles from "./scss/Staff.module.scss";
import { CardsPrint } from './Components/CardsPrint';

export const StaffDead = () =>{
    
    const [staffDead, setPersonDead] = useState([]);

    useEffect(() => {
        getStaff();
    }, [])
    
    const getStaff = async () => {
        const data = await fetch('http://localhost:3001/staffDead');
        const staffData = await data.json();
        setPersonDead(staffData);
    }
    return (
       
        <div className={styles.dataStaff}>
            
            {staffDead.map((characters) => (
                <CardsPrint characters={characters}/>
            ))}
            </div>
    )
}