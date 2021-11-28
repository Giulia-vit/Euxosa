import styles from './styles/Categories.module.css';

export default function Categories(){
    return(
        <>
        <div className={styles.containerCategories}>

            <button type='button' value='category1'className={styles.categories} id={styles.category1}>Category1</button> {/*NON BISOGNA TOCCARLO PERCH2 SE NO GLI ALTRI VENGONO TAGLIATI*/}
            <button type='button' value='category2'className={styles.categories} id={styles.category2}>Category2</button>
            <button type='button' value='category3'className={styles.categories} id={styles.category3}>Category3</button>
            <button type='button' value='category4'className={styles.categories} id={styles.category4}>Category4</button>
            <button type='button' value='category5'className={styles.categories} id={styles.category5}>Category5</button>

        </div>


        </>
    )
}