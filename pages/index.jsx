import styles from '../styles/Home.module.scss';
import { Button, Link } from '@nextui-org/react';
import {BsFillPlayCircleFill } from 'react-icons/bs';
import CategoryCard from '../components/categoryCard/categoryCard';
import MentorCard from '../components/mentorCard/mentorCard';



export default function Home() {
  const categories = require('../data/categories.json')
  
  return (
    <div >
      <main  className={styles.container}>
        {/* banner */}
        <div className={styles.banner}>
            <div className={styles.banner_text}>
              <h1> <span>Learn</span> on your schedule anytime, anywhere from any device.</h1>
              <p>Build your skill from world class companies and mentors you can learn online and get your certificates and degrees to enhance your career.</p>
              <div className={styles.button_group}>
                <Button as={Link} color="primary" href='/courses' size={'lg'}>Explore</Button>
                <Button bordered color="primary" icon={<BsFillPlayCircleFill />} size={'lg'}>
                  Watch 
                </Button>
              </div>
            </div>
            <div className={styles.banner_img}>
              <img src="/assets/banner_img.avif" alt="banner-img" />
            </div>
        </div>     
        {/* Courses Categories */}
        <div className={styles.courses_categories} id='courses'>
          <h1>Explore all Categories</h1>
          <div className={styles.cardsContainer}>
              {
                categories.map((category , index)=>{
                  return(
                    <CategoryCard category={category} />
                  )
                })
              }
          </div>
        </div>
        {/* Mentors section */}
        <div className={styles.mentors_section} id='mentors_section'>
          <h1> Meet our Mentors</h1>
          <div className={styles.mentorsContainer}>
            <MentorCard img={'https://www.pngarts.com/files/3/Smiling-Man-PNG-High-Quality-Image.png'}/>
            <MentorCard img={'https://foxvalleysurgical.com/wp-content/uploads/2021/01/smiling-man.png'}/>
            <MentorCard img={'https://www.thewhitetusk.com/wp-content/uploads/2023/03/treatement-girl.webp'}/>
            <MentorCard img={'https://media.learningforce.ie/wp-content/uploads/2021/10/19150449/smiling-spec-girl-1.png'}/>
          </div>
        </div>
        {/* partner section */}
        <div className={styles.partner_section} id='partner_section'>
            <h1>Our Partner</h1>
            <div className={styles.partner_container}>
              <img src="https://res.cloudinary.com/social-engine/image/upload/v1614254202/courses/Website_Logos_250_x_100_24.02.2021_PNG-09_rdkr9u.png" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" alt="" />  
              <img src="https://zeevector.com/wp-content/uploads/Cisco-Logo-PNG@ZEEVECTOR.COM_.png" alt="" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" />
            </div>
        </div>
      </main>
    </div>
  )
}
