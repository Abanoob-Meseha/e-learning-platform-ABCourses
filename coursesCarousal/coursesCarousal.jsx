import { useState } from 'react'
import { CourseCard } from '../components/courseCard/courseCard'
import {GrLinkNext} from 'react-icons/gr'
import {GrLinkPrevious} from 'react-icons/gr'
import styles from './coursesCarousal.module.scss'
import { Button } from '@nextui-org/react'

const CoursesCarousal = (props) => {
    const courses = require('../data/courses.json')
    const [carousalIndex, setCarousalIndex] = useState(0)
  return (
    <div className={styles.carousalContainer}>
        <Button auto rounded onClick={()=>setCarousalIndex(carousalIndex-1)}><GrLinkPrevious/></Button>
            {
                courses.filter((course , index)=> course.category === props.category).filter((course , index)=> (index >=carousalIndex) && (index < carousalIndex+2)).map((course , index)=>{
                    return(
                        <CourseCard
                            category = {course.category}
                            name = {course.name}
                            img = {course.img}

                        />
                    )
                })
            }
        <Button rounded auto onClick={()=>setCarousalIndex(carousalIndex+1)} ><GrLinkNext/></Button>

    </div>
  )
}

export default CoursesCarousal