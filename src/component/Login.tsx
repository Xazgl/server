import { FormEvent, useState } from "react";
import admin from '/public/images/admin.png';

export function Login() {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(login);
        console.log(pass);
        fetch(`/api/hello?login=${login}&pass=${pass}`)
    }
    return (
    <>  
    <div className="background">
      <form className="form"onSubmit={submit}>
      <div className="mb-3">
            <label>
                <input className="input" placeholder="Логин" value={login} onChange={(event) => setLogin(event.target.value)} type="text"/>
            </label>
        </div>   
        <div className="mb-3">
            <label>
                <input className="input" placeholder="Пароль" value={pass} onChange={(event) => setPass(event.target.value)} type="password"/>
            </label>
        </div>   
        <div className="mb-3">
            <button className="btn" type="submit">Вход</button>
        </div>  
      </form>
    </div>

<style jsx>{`
@media(max-width: 600px) {
    .input.input {
      width: 150px;
      height: 20px;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
    }
}

.background{
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    background-position: center center;
    background-image: url('${admin.src}');
    background-repeat:no-repeat;
    background-size: contain;

}
.form {
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
}

.mb-3 {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top:30px;
}

.input {
    width: 300px;
    height: 35px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
}

.btn {
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;
    background-color: #48484d;
    width: 220px;
    height: 50px;
    font-size: 25px;
}

.btn:hover {
    background-color: #f7ff14;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);
    font-weight:bold;
} 
`}</style>

    </> )
}