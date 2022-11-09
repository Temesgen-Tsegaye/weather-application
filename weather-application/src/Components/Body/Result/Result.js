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
            <p className={styles.b}>fellslike: { apiData.Feels_like}°C</p>
            <p className={styles.b}>wind: {apiData.wind}m/s</p>
            <p className={styles.b}>temprature:{apiData.Temprature}°C</p>
            <p className={styles.b}>pressure:{apiData.pressure}hPa</p>

           
            
        </div>
    )
}

export default Result