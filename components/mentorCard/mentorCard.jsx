import styles from './mentorCard.module.scss'

const MentorCard = (props) => {
  return (
    <div className={styles.mentorCard_container}>
        <img src={props.img || "/assets/LOGO.png"} alt="mentor-img" />
        <h3>{props.name || "Mentor Name"}</h3>
    </div>
  )
}

export default MentorCard