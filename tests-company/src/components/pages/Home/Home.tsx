
import {FC} from 'react'
import Mainblock from './MainBlock/Mainblock';
import styles from './Home.module.scss'

const Home:FC = () =>{
return(
<div className={styles.Home}>
        <Mainblock/>
</div>
)}

export default Home