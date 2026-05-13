import { useState } from 'react';
import './Form.css';

function Form({ monthsData,year,gender }){
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
            <div>
                <h3>Name</h3>
                <input className={`${error.name === false ? 'error' : ''}`} value={format.name} name='name' type="text" onChange={addElm}/>
                <input className={`${error.lastName === false ? 'error' : ''}`} value={format.lastName} name='lastName' type="text" onChange={addElm}/>
            </div>
            <div>
                <div>
                    <h3>Birthday</h3>
                    <span>?</span>
                </div>
                <div>
                    <select>
                        {monthsData.map((el,ind) => <option key={ind}>{el.month}</option>)}
                    </select>
                    <select>
                        {monthsData.map((el,ind)=> <option key={ind}>{el.days}</option>)}
                    </select>
                    <select>
                        {year.map((el,ind) => <option key={ind}>{el}</option>)}
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <h3>Gender</h3>
                    <span>?</span>
                </div>
                <div>
                    <select>
                        {gender.map((el,ind) => <option key={ind}>{el}</option>)}
                    </select>
                </div>
            </div>
            <div>
                <h3>Mobile number or email</h3>
                <input className={`${error.email === false ? 'error' : ''}`}  name='email' value={format.email} type="text" onChange={addElm} />
            </div>
            <p>You may receive notifications from us.<span>Learn why we ask for your contact information</span></p>
            <h3>Password</h3>
            <input className={`${error.password === false ? 'error' : ''}`} name='password' value={format.password} type="password"  onChange={addElm}/>
            <button>sss</button>
        </form>
    )
}

export { Form }