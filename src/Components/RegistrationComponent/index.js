import React from 'react';
import style from  './styles.module.css';

function RegistrationComponent() {
   const placeNames = ["First Name", "Last Name", "Title", "State", "Party", "Twitter", "FaceBook", "Instagram", "Image url"];

    return (
        <div className={style.mainContainer}>
            <h1>Reimagining Political Connectivity</h1>
            <div className={style.description}>
            <p>The https://blackbirds.io team invites you to help crowdsource information about your local elected officials. We need you as boots on the ground to let us know who is doing what in your community.</p>
            <br />
            <p>Tell us about your local official</p>
            </div>
            <div className={style.inputForm}>
            <form>
                {placeNames.map((item) =>(
                    <div>
                    <h6>{item}</h6>
                    <input type="text" placeholder={item}></input>
                    </div>
                
                ))}
        
            <h6>Additional Information</h6>
             <textarea cols="40" rows="15" ></textarea> 
              
            </form>
            </div>
        </div>
    )
}

export default RegistrationComponent;


