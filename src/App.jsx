import { SigUp } from './componet/SigUp/SigUp'
import style from './App.module.css'

function App({ monthsData,year,gender,defult} ){
  return(
    <div className={style.screen}>
      <SigUp monthsData={monthsData} year={year} gender={gender} defult={defult} />
    </div>
  )
}
export { App }
