import {FC, useEffect, useState} from 'react'
import { ConvertServices } from '../../../../services/Convert.services'
import { IData } from '../../../types/all.interface'
import BlockConvert from '../BlockConvert/BlockConvert'

const Mainblock:FC = () =>{
    const [convertto,setConvertTo] = useState<string>('RUB')
    const [convertfrom,setConvertFrom] = useState<string>('EUR')
    const [count,setCount] = useState<string>('0')
    const [totalConvert,setTotalConvert] = useState<string>('0')
    useEffect(()=>{
        ConvertServices.Convert(convertto,convertfrom,count)
        .then((data:IData) => setTotalConvert(data.result.toString()))
},[])

    useEffect(()=>{
        ConvertServices.Convert(convertto,convertfrom,count)
        .then((data:IData) => setTotalConvert(data.result.toString()))
},[count,convertto,convertfrom])
return(
<div>
    <BlockConvert value={count} onChangeValue={setCount}  currency={convertfrom} setConvert={setConvertFrom} title='Конвертирование из валюты' />
    <BlockConvert value={totalConvert} disabled={true}   currency={convertto} setConvert={setConvertTo} title='Конвертирование в валюту' />
</div>
)}

export default Mainblock