import Link from 'next/link';
import styles from './styles/Logo.module.css';

export default function Logo() {
    return(
        <>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href='/'>
                        e
                    </Link>
                </li>
            </ul>
        </nav>

        </>
    )

}