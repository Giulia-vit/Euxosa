import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../public/Card.module.css'
import {Loader, Confirm } from 'semantic-ui-react';
import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'

const Event = ({ event }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteEvent();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteEvent = async () => {
        const id = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/events/${id}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (

        <div className={styles.eventPage}>


            {isDeleting
                ? <Loader active />
                :

                <>
                <div className={styles.eventHeader}>

                    <h1>{event.title}</h1>
                    <small>{event.category}</small>

                </div>

                <div className={styles.eventMain}>
                    <i>{event.introduction}</i>
                    <hr></hr>
                    Detailed Information:

                    <ul className={styles.listInformation}>
                        <li>{event.maxPeople}</li>
                        <li>{event.minAge}</li>
                        <li>{event.language}</li>
                        <li>
                            <b>{event.location}</b>
                        </li>

                        <li>{event.cost}</li>
                    </ul>

                    <hr></hr>

                    <h4>Main Description</h4>
                    <p>{event.longDescription}</p>

                    <h4>Requirements</h4>
                    <p>{event.requirements}</p>


                    <h4>Past Editions</h4>
                    <p>{event.pastEditions}</p>

                </div>

                <div className={styles.eventPhotos}>
                    <img src={event.image} alt={event.imageAlt}></img>
                </div>

                </>


            }



{/* Qui al posto del pulsante delete voglio mettereci edit perché siamo nella parte organizer-owner */}

<button  onClick={open}>Delete</button> 

<Link href={`/${event._id}/FormEdit`}>
<a>
    Edit Event
</a>
</Link>




<Confirm open={confirm}
                onCancel={close}
                onConfirm={handleDelete}/>
        </div>











    )
}

Event.getInitialProps = async function ({ query: { id } }) {
    const res = await fetch(`http://localhost:3000/api/events/${id}`);
    const { data } = await res.json();

    return { event: data };
}

export default Event;