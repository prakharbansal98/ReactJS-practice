import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("prakhar");
  const [email, setEmail] = useState("pb@gmail");
  const [text, setText] = useState("text");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isSecondary={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />
        <form onSubmit={onSubmitHandler}>
          <div className={styles.form_control}>
            <label>Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className={styles.form_control}>
            <label>E-mail</label>
            <input type="email" name="email"></input>
          </div>
          <div className={styles.form_control}>
            <label>Text</label>
            <textarea name="text" rows="5 " />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
            <div>{name + " " + email + " " + text}</div>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/Service 24_7-pana 1.svg" style={{ height: "80%" }} />
      </div>
    </div>
  );
};

export default ContactForm;
