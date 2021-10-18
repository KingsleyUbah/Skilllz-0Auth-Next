import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';


export default function Home() {
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
          <Link href="/courses"><a>Your Courses</a></Link>
        </div> 
      </div>

      <section className="showcase welcome">
        <div className="container">
          <h1>Welcome, {user.given_name}!</h1>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h1>Your Latest Stats</h1>
          <div className="grid-3">
            <div> 
              <h1>400</h1>
              <p>You have spent a total of 400 minutes checking out courses on Skillls</p>
            </div>
            <div> 
              <h1>45</h1>
              <p>You have saved over 45 courses to your personal gallery. You can access them here</p>
            </div>
            <div> 
            <h1>45</h1>
              <p>You have saved over 45 courses to your personal gallery. You can access them here</p>
            </div>
            <div> 
            <h1>45</h1>
              <p>You have saved over 45 courses to your personal gallery. You can access them here</p>
            </div>
            <div> 
            <h1>45</h1>
              <p>You have saved over 45 courses to your personal gallery. You can access them here</p>
            </div>
            <div> 
            <h1>45</h1>
              <p>You have saved over 45 courses to your personal gallery. You can access them here</p>
            </div>
          </div>
        </div>
      
      </section>




      </>
    );
  }

  return (
   <>
    <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Skilllz</h1>
            <nav>
              <ul>
                <li className="nav"><a className="outline" href="http://localhost:3000/api/auth/login">Log in</a></li>
                <li className="nav"><a href="" className="outline">Check courses</a></li>
              </ul>
            </nav>
        </div>
    </div>
    <section className="showcase">
      <div className="container">
          <div className="grid">
            <div className="grid-item-1">
              <div className="showcase-text">
                <h1>Learn any digital skill of your choice today</h1>
                <p className="supporting-text"> Over 30,000 students currently learn with us</p>
              </div>
              <div className="showcase-form">
                <form action="">
                  <input type="email" placeholder="Enter your email address" />
                  <input type="submit" className="btn" value="Start Learning" />
                </form>
                <p className="little-info">Try out our free courses today. No risk, no credit card required</p>
              </div>
            </div>

            <div className="grid-item-2">
              <div className="image">
                <img src="./transparent.png" alt="" />
              </div>
            </div>
           </div>

        </div>
      </section>

    <div className="lower-container container">
      <section className="stats">
        <div className="flex">
          <div className="stat">
            <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
            <h3 className="title">Over 300 available courses</h3>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="stat">
            <i className="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
            <h3 className="title">Free certificate offered on all courses</h3>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="stat">
            <i className="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>
            <h3 className="title">Book 1on1 session for as low as $5</h3>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>


    <section className="testimonials">
      <div className="container">
        <div className="testimonial grid-3">
          <div className="card">
            <div className="circle">
              <img src="./4.jpg" alt="imageofme" />
            </div>
            <h3>Aston</h3>
            <p>I have learnt web development using this platfrom and I am going to say this is the best platform for learning. Absolutely
            worth the investment!</p>
          </div>
          <div className="card">
            <div className="circle">
              <img src="./5.jpg" alt="image of me" />
            </div>
            <h3>Beth</h3>
            <p>I have learnt copywriting using this platfrom and I am going to say this is the best platform for learning. Absolutely
            worth the investment!</p>
          </div>
          <div className="card">
            <div className="circle">
              <img src="./6.jpg" alt="imageofme" />
            </div>
            <h3>Chris</h3>
            <p>I have learnt affilitate marketing using this platfrom and I am going to say this is the best platform for learning. Absolutely
            worth the investment!</p>
          </div>
        </div>
      </div>
    </section>
 </div>
 <footer>
   <div className="container grid-3">
     <div className="copyright">
       <h1>Skilllz</h1>
       <p>Copyright &copy; 2021</p>
     </div>
     <nav className="links">
       <ul>
         <li><a href="https://home.com" className="outline">Home</a></li>
         <li><a href="https://home.com" className="outline">Tutors</a></li>
         <li><a href="https://home.com" className="outline">Categories</a></li>
       </ul>
     </nav>
     <div className="profiles">
       <a href="https://home.com"><i className="fab fa-twitter fa-2x"></i></a>
       <a href="https://home.com"><i className="fab fa-instagram fa-2x"></i></a>
       <a href="https://home.com"><i className="fab fa-facebook fa-2x"></i></a>
       <a href="https://home.com"><i className="fab fa-whatsapp fa-2x"></i></a>
     </div>
   </div>
 </footer>  
 </>
 )
}
