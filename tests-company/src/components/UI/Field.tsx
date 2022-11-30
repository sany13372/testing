import {ChangeEvent, Dispatch, FC, SetStateAction} from 'react'
import { IField } from '../types/all.interface'
import styles from './Field.module.scss'


const Field:FC<IField> = ({onChangeValue,value,disabled = false}) =>{
    const convertValue = (e:ChangeEvent<HTMLInputElement>) => {
         {onChangeValue && onChangeValue(e.target.value)} 
    }
return(
    <input
    disabled={disabled}
    className={styles.input}
      onChange={(e) => convertValue(e)}
      value={value.toString()}
      type="number"
    />
)}

export default Field