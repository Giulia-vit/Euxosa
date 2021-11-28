import Head from 'next/head';


import PostCard from '../components/PostCardOwner';
import styles from '../styles/Home.module.css';

export default function Home({ events }) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>


            <main>
                <div className={styles.container}>
                    {events.length === 0 ? (
                        <h2>No added events</h2>
                    ) : (
                        <ul>
                            {events.map((event, i) => (
                                 //DON'T CHANGE event={event} ITS VITAL
                                <PostCard event={event} key={i} /> 
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/events`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            events: data['message'],
        },
    };
}