import { Dispatch, FC, SetStateAction} from 'react'
import { IBlockConvert } from '../../../types/all.interface';
import Field from '../../../UI/Field'
import OptionsCurrencies from '../../../UI/OptionsCurrencies'

const BlockConvert:FC<IBlockConvert> = ({value, currency, onChangeValue, setConvert,title,disabled}) =>{
    return(
    <div>
        <h3>{title}</h3>
        <OptionsCurrencies currency={currency} setConvert={setConvert} />
        <Field value={value} onChangeValue={onChangeValue} disabled={disabled}/>
  </div>
)}

export default BlockConvert