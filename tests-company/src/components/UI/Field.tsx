import {ChangeEvent, Dispatch, FC, SetStateAction} from 'react'
import styles from './Field.module.scss'


interface IField{
    value:string
    onChangeValue?:Dispatch<SetStateAction<string>>
    disabled?:boolean
}   

const Field:FC<IField> = ({onChangeValue,value,disabled = false}) =>{
    const convertValue = (e:ChangeEvent<HTMLInputElement>) => {
         {onChangeValue && onChangeValue(e.target.value)} 
    }
return(
    <input
    disabled={disabled}
    className={styles.input}
      onChange={(e) => convertValue(e)}
      value={value}
      type="number"
    />
)}

export default Field