import {FC} from 'react'
import { Link } from 'react-router-dom'

const Header:FC = () =>{
return(
<header>
    <Link to={'/'}>
        Страница конвертирования валюты
    </Link>
    <Link to={'/course'}>
        Страница курса валют
    </Link>
</header>
)}

export default Header