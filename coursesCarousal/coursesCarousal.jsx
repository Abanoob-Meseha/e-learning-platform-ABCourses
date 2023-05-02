import { useState ,useEffect} from 'react'
import { CourseCard } from '../components/courseCard/courseCard'
import {GrLinkNext} from 'react-icons/gr'
import {GrLinkPrevious} from 'react-icons/gr'
import styles from './coursesCarousal.module.scss'
import { Button } from '@nextui-org/react'

const CoursesCarousal = (props) => {
    const courses = require('../data/courses.json')
    const [carousalIndex, setCarousalIndex] = useState(0)
    const [CoursePerCarousal, setCoursePerCarousal] = useState(2);

  useEffect(() => {
    function handleResize() {
        if(window.innerWidth < 500 ){
            setCoursePerCarousal(1);
        }
        else{
            setCoursePerCarousal(2);
        }
        
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [CoursePerCarousal]);

  return (
    <div className={styles.carousalContainer}>
        <Button auto rounded onClick={()=>{
            if(carousalIndex <=0){
                setCarousalIndex(0)
            }
            else{
                setCarousalIndex(carousalIndex-1)
            }
            }}
            ><GrLinkPrevious/></Button>
            {
                courses.filter((course , index)=> course.category === props.category.name)
                .filter((course , index)=> (index >=carousalIndex) && (index < carousalIndex+CoursePerCarousal))
                .map((course , index)=>{
                    return(
                        <CourseCard
                            category = {course.category}
                            name = {course.name}
                            img = {course.img}

                        />
                    )
                })
            }
        <Button rounded auto onClick={()=>{
            if(carousalIndex >= props.category.number_courses-1){
                setCarousalIndex(props.category.number_courses-1)
            }
            else{
                setCarousalIndex(carousalIndex+1)
            }
            }} 
            ><GrLinkNext/></Button>

    </div>
  )
}

export default CoursesCarousal