function Gender({ gender,genderCheck }){
    
     let gen = (e) =>{
        let {name,value} = e.target
        if(value){
            genderCheck(true)
        }
    }
    return(
        <>
            <select name="gender" onChange={gen}>
                {gender.map((el,ind) => <option key={ind}>{el}</option>)}
            </select>
        </>
    )
}

export { Gender }