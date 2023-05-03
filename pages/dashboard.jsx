import { CourseCard } from '../components/courseCard/courseCard'
import Sidenav from '../components/sidenav/sidenav'
import styles from '../styles/Dashboard.module.scss'
import {Text , Button} from'@nextui-org/react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react'



const Dashboard = () => {
  const courses = require('../data/courses.json')
  const [value, onChange] = useState(new Date());

  return (
    <main className={styles.mainContainer}>
        {/* sidenav */}
        <Sidenav/>
        {/* page content */}
        <div className={styles.pageContent}>
          <div className={styles.middleContent}>
            <h1>Welcome Abanoub 🙌</h1>
            <div>
              <div className={styles.contentTitle}>
                <h2>My cousres</h2>
                <Text css={{color:'inherit'}}>See All <HiArrowNarrowRight/></Text>
              </div>
              
              <div className={styles.myCourses}>
                <CourseCard enrolled={true} category={courses[0].category} name={courses[0].name} img={courses[0].img}/>
                <CourseCard enrolled={true} category={courses[1].category} name={courses[1].name} img={courses[1].img}/>
              </div>
                 
            </div>
            <div >
              <div className={styles.contentTitle}>
                <h2>My Assignment</h2>
                <Text css={{color:'inherit'}}>See All <HiArrowNarrowRight/></Text>
              </div>
              <div className={styles.myAssignments}>
                <div className={styles.AssignmentNotify}>
                  <h3>JS Basics</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Backend </h3>
                  <h3>Grade 95/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>React JS</h3>
                  <h3>Grade 92/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Node JS</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContent}>
            {/* Upcoming section */}
            <div>
              <div className={styles.contentTitle}>
                <h2>Upcoming</h2>
                <Text css={{color:'inherit'}}>See All <HiArrowNarrowRight/></Text>
              </div>
              <div>
                <div className={styles.AssignmentNotify}>
                  <h3>React Components Assignment</h3>
                  <h3>Grade -/100</h3>
                  <Button color='warning' size={'xs'}>upcoming</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Node JS Assignment</h3>
                  <h3>Grade -/100</h3>
                  <Button color='warning' size={'xs'}>upcoming</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>TODO LIST Task</h3>
                  <h3>Grade -/100</h3>
                  <Button color='warning' size={'xs'}>upcoming</Button>
                </div>
                
              </div>
            </div>
            {/* Calendar */}
            <div>
              <div className={styles.contentTitle}>
                <h2>Calendar</h2>
              </div>
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
            
        </div>
    </main>
  )
}

export default Dashboard