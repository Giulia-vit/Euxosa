import styles from './styles/PostCardOwner.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';



export default function PostCard({ event }) {


    return (
        <>
            <li className={styles.listItem}>
                <h3>{event.title}</h3>
                <p>{event.category}</p>
                <p>{event.smallDescription}</p>
                <p>{event.maxNumber}</p>
                <p>{event.minAge}</p>
                <p>{event.location}</p>
                <small>{new Date(event.createdAt).toLocaleDateString()}</small>
                <br />


                <Link as={`/events/${event._id}`} href="/events/[id]">
               
                   Analyze Event
                 
               </Link>
            </li>
        </>
    );
}





