import { SigUp } from './componet/SigUp/SigUp'
import './App.module.css'

function App({ monthsData,year,gender } ){
  return(
    <>
      <SigUp monthsData={monthsData} year={year} gender={gender} />
    </>
  )
}
export { App }
