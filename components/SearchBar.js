import styles from './styles/SearchBar.module.css'


export default function SearchBar(){
    return(
        <form action='/' method='get' className={styles.form}>

            <input 
            type='text'
            id='searchBar'
            placeholder='Search'
            name='search'
            className={styles.seachBar}
            >
            </input>
            <button type='submit' className={styles.button}>Search</button>




        </form>
    )
}