import {FC} from 'react'
import { ICourse } from '../../../../types/all.interface'

const CourseItem:FC<ICourse> = ({course,courseDefault}) =>{
return(
<div>
    {courseDefault != '' && courseDefault.length >=3 ?  <h3> 1 {courseDefault.toUpperCase()}:</h3> : <h3>1 USD:</h3>}
    <div>
        <h3>{course[1].toFixed(3)}</h3>
        <h3>{course[0].slice(3)}</h3>
    </div>
</div>
)}

export default CourseItem