import { Selectr } from '../Selectr/Selectr';
import { Gender } from '../gender/gender';
import { useState } from 'react';
import style from './Form.module.css';

function Form({ monthsData,year,gender,defult}){

    let [birthdayValid, setBirthdayValid] = useState(true)
    let [gend,setGend] = useState(true)

    let [error,setError] = useState({
        name : true,
        lastName : true,
        email : true,
        password : true,
    })

    let [format,setFormat] = useState({
        name : '',
        lastName : '',
        email : '',
        password : '',
        });

    let addError = (key,bool) => {
        setError((prev) => ({...prev,[key]: bool}))
    }
    
    let addElm = (e) => {
        let {name,value} = e.target
        setFormat({...format,[name] : value})

        if(value) addError(name,true)
        }


        let dataCheck = (arg) => {
            setBirthdayValid(arg)
        }
        let genderCheck = (arg) => {
            setGend(arg)
        }
        
    let check = (e) => {
        e.preventDefault()  
        let val = {...format}
        for (const key in format) {
            if(!format[key].trim()){
                addError(key,false)
                val[key] = ''
            }
        }
        setFormat(val)
        
    }

    
    
    return(
        <form onSubmit={check}>
            <div className={style.name}>
                <h3>Name</h3>
                <div className={style.content}>
                <input placeholder='First name' className={`${error.name === false ? style.error : ''}`} value={format.name} name='name' type="text" onChange={addElm}/>
                <input placeholder='Last name' className={`${error.lastName === false ? style.error : ''}`} value={format.lastName} name='lastName' type="text" onChange={addElm}/>
                </div>
            </div>
            <div>
                <div className={style.datatitle}>
                    <h3>Birthday</h3>
                    <span>?</span>
                </div>
                <div className={`${birthdayValid === false ? style.inputerorr : ''} ${style.data}`}>
                    <Selectr  monthsData={monthsData} year={year} defult={defult} onSelect={dataCheck}/>
                </div>
            </div>
            <div>
                <div className={style.datatitle}>
                    <h3>Gender</h3>
                    <span>?</span>
                </div>
                <div className={`${gend === false ? style.error : ''} ${style.entGend}`}>
                    <Gender gender={gender} genderCheck={genderCheck}/>
                </div>
            </div>
            <div className={style.email}>
                <h3 className={style.mob}>Mobile number or email</h3>
                <input placeholder='Mobile number or email' className={`${error.email === false ? style.error : ''}`}  name='email' value={format.email} type="text" onChange={addElm} />
            </div>
            <div className={style.agreement}>
                <p>You may receive notifications from us.<span>Learn why we ask for your contact<br/> information</span></p>
                <h3>Password</h3>
                <input placeholder='Password' className={`${error.password === false ? style.error : ''}`} name='password' value={format.password} type="password"  onChange={addElm}/>
                <p>People who use our service may have uploaded your contact information to Facebook.<span>Learn more</span></p>
                <p>By tapping Submit, you agree to create an account and to Facebook's <span>Terms,Privacy Policy</span> and <span>Cookies Policy.</span></p>
                <p>The <span>Privacy Policy</span> describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalize and improve our products, including ads.</p>
            </div>
            <button className={style.submit}>Submit</button>
            <button className={style.unsubmit}>I already have an account</button>
        </form>
    )
}

export { Form }