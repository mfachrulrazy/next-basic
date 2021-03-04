export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(job => {
    return {
      params: {id: job.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { job: data }
  }
}

const Details = ({ job }) => {
  return ( 
    <div>
      <h1>{ job.name }</h1>
      <p>{ job.email }</p>
      <p>{ job.website }</p>
      <p>{ job.address.city }</p>
    </div>
   );
}
 
export default Details;