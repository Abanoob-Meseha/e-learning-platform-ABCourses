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
            <div>
              <div className={styles.contentTitle}>
                <h2>My cousres</h2>
                <Text>See All <HiArrowNarrowRight/></Text>
              </div>
              
              <div className={styles.myCourses}>
                <CourseCard enrolled={true} />
                <CourseCard enrolled={true}/>
              </div>
                 
            </div>
            <div >
              <div className={styles.contentTitle}>
                <h2>My Assignment</h2>
                <Text>See All <HiArrowNarrowRight/></Text>
              </div>
              <div className={styles.myAssignments}>
                <div className={styles.AssignmentNotify}>
                  <h3>Assignment Title</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Assignment Title</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Assignment Title</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Assignment Title</h3>
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
                <Text>See All <HiArrowNarrowRight/></Text>
              </div>
              <div>
                <div className={styles.AssignmentNotify}>
                  <h3>Assignment Title</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Assignment Title</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                <div className={styles.AssignmentNotify}>
                  <h3>Assignment Title</h3>
                  <h3>Grade 90/100</h3>
                  <Button color='success' size={'xs'}> Completed</Button>
                </div>
                
              </div>
            </div>
            {/* Calendar */}
            <div>
              <h2>Calendar</h2>
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
            
        </div>
    </main>
  )
}

export default Dashboard