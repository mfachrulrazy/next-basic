import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { jobs: data }
  }
}

const Jobs = ({ jobs }) => {
  return ( 
    <div>
      <h1>All Jobs</h1>
      {jobs.map(job => (
        <Link href={'/jobs/' + job.id} key={job.id}>
          <a className={styles.single}>
            <h3>{ job.name }</h3>
          </a>
        </Link>
      ))}
    </div>
   );
}
 
export default Jobs;