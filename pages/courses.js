import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import Image from 'next/image'

export default function Courses() {
    const { user, error, isLoading } = useUser();
    
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
        <>
      <div className="navbar flex">
        <div className="img-container flex">
          <Image src="/profilewhite.png" height={50} width={50} alt="myimage" />
          <h3 className="img-text"> Signed in as {user.email} </h3>
        </div>

        <div className="flex">  
          <a href="/api/auth/logout">Logout</a>
          <Link href="/"><a>Back to Dashboard</a></Link>
        </div> 
      </div>

      <section className="showcase welcome">
        <div className="container">
          <h1>Your Courses, {user.given_name}!</h1>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h1>All Courses</h1>
          <div className="grid-3">
            <div> 
              <h1 className="purple">Python Djano Framework</h1>
              <p>Django is one of the most popular python frameworks. Learn how to build powerful web apps with Django.</p>
            </div>
            <div> 
              <h1 className="purple">Semantic HTML & Accessibility</h1>
              <p>Make your website accessible to screen readers. Optimize your site not just for the impaired, but search engine as well</p>
            </div>
            <div> 
            <h1 className="purple">EMCAScript - The Modern Way</h1>
              <p>Learn the new way of writing clean and optimized code.</p>
            </div>
            <div> 
            <h1 className="purple">CSS Animation and Transitions</h1>
              <p>Learn how to animate your web elements and make your site lively</p>
            </div>
            <div> 
            <h1 className="purple">Node JS Full Course</h1>
              <p>Node JS is a JavaScript server-side frameowrk. This course covers the most importance Node packages and how to use it.</p>
            </div>
            <div> 
            <h1 className="purple">React For Beginners</h1>
              <p>Learn how to build user interfaces with the React library.</p>
            </div>
          </div>
        </div>
      
      </section>
      </>
    )
  }
}

export const getServerSideProps = withPageAuthRequired()