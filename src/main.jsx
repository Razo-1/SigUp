import { monthsData,year,gender } from './helper/help.js'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App monthsData={monthsData} year={year} gender={gender}/>
)
