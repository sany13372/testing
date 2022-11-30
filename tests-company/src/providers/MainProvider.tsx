import {FC, PropsWithChildren} from 'react'
import Layout from '../components/Layout/Layout'

const MainProvider:FC<PropsWithChildren> = ({children}) =>{
return(
<Layout>
        {children}
</Layout>
)}

export default MainProvider