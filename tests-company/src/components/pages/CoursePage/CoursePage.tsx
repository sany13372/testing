import {FC, useEffect, useState} from 'react'
import { ConvertServices } from '../../../services/Convert.services'
import { ICourses, IDataCourses } from '../../types/all.interface'
import CourseBlock from './CourseBlock/CourseBlock'
import SearchCourse from './SearchCourse/SearchCourse'
import styles from './CoursePage.module.scss'

const CoursePage:FC = () =>{
    const [course,setCourse] = useState<string>('USD')
    const [courses,setCourses] = useState<[string, number][]>([])
    const [isLoading,setIsloading] = useState(true)
    useEffect(() =>{
        ConvertServices.getCourses(course)
        .then((data:IDataCourses) => setCourses(Object.entries(data.quotes)))
        .finally(() => setIsloading(false))
    } ,[])
    useEffect(() =>{
        ConvertServices.getCourses(course)
        .then((data:IDataCourses) => setCourses(Object.entries(data.quotes)))
        .finally(() => setIsloading(false))
    } ,[course])
return(
<div className={styles.page}>   
    <SearchCourse setCourse={setCourse} value={course}/>
    <CourseBlock courseDefault={course} courses={courses} isLoading={isLoading}/>
</div>
)}

export default CoursePage