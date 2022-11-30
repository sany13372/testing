import {FC} from 'react'
import clsx from 'clsx';
import styles from './OptionsCurrencies.module.scss'
import { IOptionsCurrencies } from '../types/all.interface';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];




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
      <li>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
</ul>
)}

export default OptionsCurrencies