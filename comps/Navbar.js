import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/logo.png" width="120" height="37"/>
      </div>
      <div className="links">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/jobs"><a>Job Listing</a></Link>
      </div>
    </nav>
   );
}
 
export default Navbar;