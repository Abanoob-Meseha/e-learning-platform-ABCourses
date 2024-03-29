
import SearchFilter from '../components/searchFilter/searchFilter'
import CoursesCarousal from '../coursesCarousal/coursesCarousal'
import styles from '../styles/Courses.module.scss'


const Courses = () => {
    const categories = require('../data/categories.json')
  return (
    <main className={styles.container}>
        <h1> Explore Courses from different Categories</h1>
        <div className={styles.filter_section}>
            <SearchFilter/>
        </div>
        <div className={styles.coursesContainer}>
            {
                categories.map((category , index)=> {
                    return(
                        <div className={styles.category_section}>
                            <div className={styles.categoryTitle}>
                                <h2>{category.name}</h2>
                                <h4>{category.number_courses} courses</h4>
                            </div>
                            <CoursesCarousal category={category}/>
                        </div>
                    )
                })
            }
            
            
            
        </div>
    </main>
  )
}

export default Courses