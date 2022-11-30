import {FC} from 'react'
import clsx from 'clsx';
import styles from './OptionsCurrencies.module.scss'
import { IOptionsCurrencies } from '../types/all.interface';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP','NZD','DZD','SGD'];




const OptionsCurrencies:FC<IOptionsCurrencies> = ({currency,setConvert}) =>{
return(
<ul className={styles.currencies}>
{defaultCurrencies.map((cur:string) => (
        <li
          onClick={() => setConvert(cur)}
          className={clsx([styles.li],{
            [styles.active]:currency == cur 
          })}
          key={cur}>
          {cur}
        </li>
      ))}
</ul>
)}

export default OptionsCurrencies