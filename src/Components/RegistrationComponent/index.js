import React from "react";
import style from "./styles.module.css";

function RegistrationComponent() {
  const placeNames = [
    "First Name",
    "Last Name",
    "Title",
    "State",
    "Party",
    "Twitter",
    "FaceBook",
    "Instagram",
    "Image url",
  ];

  return (
    <div className={style.mainContainer}>
      <h1>Reimagining Political Connectivity</h1>
      <div className={style.description}>
        <p>
          The https://blackbirds.io team invites you to help crowdsource
          information about your local elected officials. We need you as boots
          on the ground to let us know who is doing what in your community.
        </p>
        <br />
        <p>Tell us about your local official</p>
      </div>
      <div className={style.inputForm}>
        <form>
          {placeNames.map((item) => (
            <div>
              <h6>{item}</h6>
              <input type="text" placeholder={item}></input>
            </div>
          ))}

          <h6>Additional Information</h6>
          <textarea cols="20" rows="15"></textarea>
        </form>
      </div>
      <div className={style.checkBox}>
        <input type="checkbox"></input>
        <p>
          By checking this box, you acknowlegde you are at least 18 years of
          age.
        </p>
      </div>
      <div className={style.btnContainer}>
        <button className={style.submitBtn}>SUBMIT</button>
        <button className={style.finishBtn}>FINSHED</button>
        <button className={style.listBtn}>LIST ALL</button>
      </div>
    </div>
  );
}

export default RegistrationComponent;
