import styles from "./Header.module.css";
import { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import React, { Component } from 'react';


const Header = ({ handleInput, FetchData }) => {
    
  // useEffect(() => {
  //   const keyhandler = (e) => {
  //   console.log(e)
  //     if (e.keyCode==13) {
  //       FetchData();
  //     }
  //     console.log(e.key)

      
  //   };
  //   document.addEventListener("keydown", (e)=>keyhandler(e));
    
  //     return () => {
  //       document.removeEventListener("keydown", (e)=>keyhandler(e));
  //     };
  // }, []);

  return (
    <div className={styles.Header}>
      <p>Weather App</p>
      <div>
        <input onKeyDown={(e)=>{
          if(e.key=='Enter'){
          
            FetchData()}}}
         
          onChange={(e) => {
            handleInput(e);
          }}
          type="text"
        />
        <FaSearch
          className={styles.icons}
          onClick={() => FetchData()}
        />
      </div>
    </div>
  );
};
export default Header;