import {ChangeEvent, Dispatch, FC, SetStateAction} from 'react'
import { ISearchCourse } from '../../../types/all.interface'
import styles from './SearchCourse.module.scss'

const SearchCourse:FC<ISearchCourse> = ({setCourse,value}) =>{
    const searchCours = (e:ChangeEvent<HTMLInputElement>) => {
        setCourse(e.target.value)
    }
return(
<div>
    <h3>Поиск Курса по валюте:</h3>
    <input className={styles.input} value={value} onChange={(e) => searchCours(e)}/>
</div>
)}

export default SearchCourse