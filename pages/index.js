import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Job List | Home</title>
        <meta name="keywords" content="jobs"/>
      </Head>
      <div>
        <h1 className={styles.title} >Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus placeat nemo quasi ratione esse, illo distinctio tempora consectetur explicabo ex facere fugiat voluptas ut numquam aut necessitatibus reprehenderit vero ullam!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus placeat nemo quasi ratione esse, illo distinctio tempora consectetur explicabo ex facere fugiat voluptas ut numquam aut necessitatibus reprehenderit vero ullam!</p>
        <Link href="/jobs">
          <a className={styles.btn}>Lihat Pekerjaan</a>
        </Link>
      </div>
    </>
  )
}
