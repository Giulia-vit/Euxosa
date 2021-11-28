import Head from 'next/head';
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav';
import Categories from '../components/Categories';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';

export default function Home({ events }) {
    return (
        <div>
            <Head>
                <title>EuXOsa - Home Page</title>
            </Head>


            {/*Top of the page*/}
            <Logo/>
            <Nav/>
            <SearchBar/>
            <Categories/>

             <main>
                <div className={styles.container}>
                    {events.length === 0 ? (
                        <h2>Ops...Something went wrong</h2>
                    ) : (
                        <ul>
                            {events.map((event, i) => (
                                <PostCard post={event} key={i} />
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