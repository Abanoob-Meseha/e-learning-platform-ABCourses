import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '@nextui-org/react';
import ResponsiveNavbar from '../components/responsiveNavbar/responsiveNavbar';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ABCourses</title>
        <link rel="icon" href="/assets/LOGO.png" />
      </Head>

      <main>
        <ResponsiveNavbar/>
        <h1>Hello Abanoub</h1>
        <Button>Click me</Button>
      </main>
    </div>
  )
}
