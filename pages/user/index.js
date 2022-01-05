//PAGINA INIZIALE DELLO USER

import Link from 'next/link'
import fetch from 'isomorphic-unfetch' //Thanks to this import we can do http request inside a project
import styles from '../../public/Home.module.css'
import 'semantic-ui-css/semantic.min.css'

const Home = ({ events }) => {
  return (
    <div className={styles.main}>
      <p className={styles.euxosa}>EuXOsa</p>
      <div className={styles.eventsWrapper}>
        {events.map(event => {
          return (
            <div key={event._id}>
                      
                       <div className={styles.eventCard}>
                              <div className={styles.imageConteiner}>
                                                                 <Link href={`/user/${event._id}`} >
                                                                   <img src={event.image} alt={event.imgDescription} />
                                                                 </Link>
                              </div>
                               <div className={styles.eventDescription}>
                                 
                                   <p className={styles.eventTitle}>{event.title}</p>

                                   <p>{event.category}</p>

                                   <p>{event.language}</p>
                                   <p>{event.date}</p>
                                 
                             
                        
                                     <div className={styles.eventIntro}>



                                       <Link href={`/user/${event._id}`} >
                                         <a className={styles.button}>View</a>
                                       </Link>


                                      

                                       </div>
                                 </div>
                       </div>

                       

            </div>
          )
        })}
      </div>

    </div>
  )
}


Home.getInitialProps = async () =>{
  //we do the api rrequest to fetch the data that we need for the index page to then return it into the actul Home()

  const res = await fetch('http://localhost:3000/api/events');
  //desctrucuring the data

  const { data } = await res.json();

  return { events: data}
}

export default Home;