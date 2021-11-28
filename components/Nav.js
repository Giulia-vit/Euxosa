import Link from 'next/link';

import styles from './styles/Nav.module.css';

export default function Nav() {
    return (
        <>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                
                <li className={styles.item}>
                    <Link href='/signIn'>
                    Sign In 
                    </Link>
                </li>

                <li className={styles.item}>
                    <Link href='/login'>
                    Login 
                    </Link>
                </li>

            </ul>
        </nav>


        </>


    );
}