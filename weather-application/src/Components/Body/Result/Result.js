import React, { Component } from 'react';
import styles from './Result.module.css'

const Result=({apiData})=>{
    return(
        <div className={styles.container}>
            <p className={styles.a} >{apiData.city_name}</p>
            <div>
            <span className={styles.a}>{apiData.description}</span>
             <img src={`http://openweathermap.org/img/w/${apiData.icon}.png`} alt="icon" />

            </div>
            <p className={styles.b}>fellslike: { apiData.Feels_like}</p>
            <p className={styles.b}>wind: {apiData.wind}</p>
            <p className={styles.b}>temprature:{apiData.temprature}</p>
            <p className={styles.b}>pressure:{apiData.pressure}</p>

           
            
        </div>
    )
}

export default Result