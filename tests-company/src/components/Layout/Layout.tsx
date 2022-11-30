import {FC, PropsWithChildren} from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'


const Layout:FC<PropsWithChildren> = ({children}) =>{
return(
<div className={styles.wrapper}>
        <Header/>
        <main>
            {children}
        </main>
</div>
)}

export default Layout