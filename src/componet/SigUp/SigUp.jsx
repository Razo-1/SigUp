import { Form } from "../Form/Form"
import './SigUp.module.css'

function SigUp(){
    return(
        <div>
            <div>
                <i className="fa-brands fa-meta"></i>
                <h3>Meta</h3>
            </div>
            <h1>Get started on Facebook</h1>
            <p>Create an account to connect with friends, family and communities of people<br/>
             who share your interests.</p>
             <Form/>
        </div>
    )
}

export { SigUp }