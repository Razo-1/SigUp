import { Form } from "../Form/Form"
import style from  './SigUp.module.css'

function SigUp({ monthsData,year,gender,defult}){
    
    return(
        <div className={style.sigup}>
            <div className={style.logo}>
                <i className="fa-brands fa-meta"></i>
                <h3>Meta</h3>
            </div>
            <h1>Get started on Facebook</h1>
            <p>Create an account to connect with friends, family and communities of people<br/>
             who share your interests.</p>
             <Form monthsData={monthsData} year={year} gender={gender} defult={defult}/>
        </div>
    )
}

export { SigUp }