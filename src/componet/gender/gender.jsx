import style from './gender.module.css'

function Gender({ gender,genderCheck,hasError}){
    
     let gen = (e) =>{
        let {name,value} = e.target
        if(value){
            genderCheck(true)
        }
    }
    return(
        <>
            <select className={`${style.defulte} ${hasError ? style.error : ''}`} name="gender" onChange={gen}>
                <option value="" selected disabled hidden>Select your gender</option>
                {gender.map((el,ind) => <option key={ind}>{el}</option>)}
            </select>
        </>
    )
}

export { Gender }