import { useState } from "react";
import Inputs from "./Inputs";
import Sucsess from "./Sucsess";

const Form = () => {

    
    let [sucsession, setSucsession] = useState(false)
    let [firstName, setFirstName] = useState("");
    let [secondName, setSecondName] = useState("");
    let [email, setEmail] = useState("");
    let [userList, setUserList] = useState([])

    let newUser = {
        firstName: firstName,
        secondName: secondName,
        email: email,
    }

    function userListHandler() {
        let busy
        userList.forEach(function(elem) {
            if (elem.email == newUser.email) {
                return busy = elem.email
            }
        })

        let permission = true
        
        if (newUser.email == '' || newUser.firstName == '' || newUser.secondName == '') {
            permission = false
        }

        
        if(permission==false) {
            alert('Одно или несколько полей незаполненны')
        }
        
        if(busy != newUser.email && permission == true) {
            console.log('Свободно')
            setUserList([...userList, newUser])
            setSucsession(true)

        }
        if(busy == newUser.email && permission ){
            console.log('Занято')
            alert('Ошибка регистрации, этот email занят.')
            setSucsession(false)
        }

        
    }
    

  return (
    <>
      <form>
        <Inputs firstName={firstName} setFirstName={setFirstName} secondName={secondName} setSecondName={setSecondName} email={email} setEmail={setEmail}></Inputs>
        <button type='button' onClick={userListHandler}>Register</button>
        <Sucsess sucsession={sucsession}></Sucsess>
      </form>
    </>
  );
};

export default Form;
