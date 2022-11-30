import {FC} from 'react'
import CourseItem from './CourseItem/CourseItem'
import styles from './CourseBlock.module.scss'
import { ICourseBlock } from '../../../types/all.interface'

const CourseBlock:FC<ICourseBlock> = ({courses,isLoading,courseDefault}) =>{
return(
<div className={styles.block}>   
    {isLoading ? <h3>Загрузка..</h3>  : courses.length > 0 ? courses.map((course) => <CourseItem courseDefault={courseDefault} course={course} key={course[0]}/>) : <h3>Курсов Не найдено</h3>}
</div>
)}

export default CourseBlock