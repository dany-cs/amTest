import React, { useContext } from "react";
import favoriteImage from "../Assets/favorites.png";
import styles from "./CardsPrint.module.scss";

import {MainContext} from '../context';


export const CardsPrint = (props) => {
  const mainContext = useContext(MainContext);
  const {favorites,setFavorite} = mainContext;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.pic}>
          <img src={props.characters.image} alt="person"/>
        </div>
        <div className={styles.profileData}>
          <img src={favoriteImage} alt="favorites" onClick={()=>setFavorite(props.characters)} style={(favorites.findIndex(item=>item.image===props.characters.image)>-1)?{background:"blue"}:{}}/>
          <h1>{props.characters.name}</h1>
          <div className={styles.leters}>
            <p>Cumpleaños: {props.characters.dateOfBirth}</p>
            <p>Genero: {props.characters.gender}</p>
            <p>Color de ojos: {props.characters.eyeColour}</p>
            <p>Color de pelo: {props.characters.hairColour}</p>
          </div>
        </div>
      </div>
    </>
  );
};
