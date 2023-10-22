import { useState } from "react";
import styles from "../styles.module.css";


export default function ErrorTest(){
    const [hasError, setHasError]=  useState(false);

    if(hasError){
        throw new Error("Error has occured")
    }
    return (
        <div>
            <button className={styles.homePage_errorBoundary_btn} onClick={()=>{setHasError(true)}}>Test Error Boundary</button>
        </div>
    )

}
