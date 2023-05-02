import styles from './sidenav.module.scss'
import {Text} from '@nextui-org/react'
import {HiHome} from 'react-icons/hi'
import {SiCoursera} from 'react-icons/si'
import {MdOutlineAssignmentTurnedIn} from 'react-icons/md'
import {ImFolderPlus} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import { useEffect ,useState} from 'react'

const Sidenav = () => {
    const [SmallFlag, setSmallFlag] = useState(false)

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 500){
                setSmallFlag(true);
            }
            else{
                setSmallFlag(false);
            }
            
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, [SmallFlag])
    
  return (
    <div className={styles.sidebar} >
        <div hidden={SmallFlag}>
            <Text size={30} className={`${styles.sidenav_item} ${styles.active}`} ><HiHome/> Dashboard</Text>
            <Text size={30} className={styles.sidenav_item}><SiCoursera/> Courses</Text>
            <Text size={30} className={styles.sidenav_item}><MdOutlineAssignmentTurnedIn/> Assignments</Text>
            <Text size={30} className={styles.sidenav_item}><ImFolderPlus/> Add Course</Text>
            <hr />
            <Text size={30} className={styles.sidenav_item}><FiLogOut/> Logout</Text>
        </div>
            
        <div hidden={!SmallFlag}>
            <Text size={30} className={`${styles.sidenav_item} ${styles.active}`}><HiHome/></Text>
            <Text size={30} className={styles.sidenav_item} ><SiCoursera/></Text>
            <Text size={30} className={styles.sidenav_item} ><MdOutlineAssignmentTurnedIn/></Text>
            <Text size={30} className={styles.sidenav_item} ><ImFolderPlus/></Text>
            <hr />
            <Text size={30} className={styles.sidenav_item} ><FiLogOut/></Text>
        </div>
        
        

    </div>
  )
}

export default Sidenav