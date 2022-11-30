import {FC, useEffect, useState} from 'react'
import { ConvertServices } from '../../../../services/Convert.services'
import { IData } from '../../../types/all.interface'
import BlockConvert from '../BlockConvert/BlockConvert'

const Mainblock:FC = () =>{
    const [currency,setСurrency] = useState<IData>({} as IData)
    const [convertto,setConvertTo] = useState<string>('RUB')
    const [convertfrom,setConvertFrom] = useState<string>('EUR')
    const [count,setCount] = useState('0')
    const [totalConvert,setTotalConvert] = useState('0')
    const [isError,setIsError] = useState(null)
    console.log(currency);
    console.log(convertto);
    console.log(convertfrom);
    useEffect(()=>{
        //ConvertServices.Convert(convertto,convertfrom,count).then((data) => setСurrency(data)).catch((error) => setIsError(error))
        //console.log(count);
        //console.log(currency.result.toString());
        setTotalConvert(currency?.result.toString())
},[])

    useEffect(()=>{
        //ConvertServices.Convert(convertto,convertfrom,count).then((data) => setСurrency(data)).catch((error) => setIsError(error))
        //setTotalConvert(currency?.result.toString())
},[count,convertto,convertfrom])
return(
<div>
    <BlockConvert value={count} onChangeValue={setCount}  currency={convertfrom} setConvert={setConvertFrom } title='Конвертирование из валюты' />
    <BlockConvert value={totalConvert}   currency={convertto} setConvert={setConvertTo} title='Конвертирование в валюту' />
</div>
)}

export default Mainblock