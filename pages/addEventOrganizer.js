import { useState } from 'react';

import styles from '../styles/Home.module.css';

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [mainDescription, setMainDescription] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('');
    const [smallDescription, setSmallDescription] = useState('');
    const [maxNumber, setMaxNumber] = useState('');
    const [minAge, setMinAge] = useState('');
    const [requirements, setRequirements] = useState('');
    const [language, setLanguage] = useState('');
    const [location, setLocation] = useState('');
    const [importantDates, setImportantDates] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!title || !smallDescription || !category || !mainDescription || !language || !location || !importantDates) return setError('All fields are required');

        // post structure
        let event = {
            title,
            category,
            smallDescription,
            mainDescription,
            maxNumber,
            minAge,
            requirements,
            language,
            location,
            importantDates,
            published: false,
            createdAt: new Date().toISOString(),
        };
        // save the post
        let response = await fetch('/api/events', {
            method: 'POST',
            body: JSON.stringify(event),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setTitle('');
            setMainDescription('');
            setCategory('');
            setSmallDescription('');
            setMaxNumber('');
            setMinAge('');
            setRequirements('');
            setLanguage('');
            setLocation('');
            setImportantDates('');
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
    };

    return (
        <div className={styles.main}>
            <h2>Event Organizer Form</h2>
            <div className={styles.containerForm}>
                <form onSubmit={handlePost} className={styles.form}>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}

                    <div className={styles.formItem}>
                        
                        <input
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="Event's Name"
                        />
                    </div>

                    <div className={styles.formItem}>
                        
                        <input
                            type="text"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            placeholder="Category"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <textarea
                            name="smallDescription"
                            onChange={(e) => setSmallDescription(e.target.value)}
                            value={smallDescription}
                            placeholder="Short Description"
                        />
                    </div>


                    <div className={styles.formItem}>
                        <textarea
                            name="mainDescription"
                            onChange={(e) => setMainDescription(e.target.value)}
                            value={mainDescription}
                            placeholder="Complete Description"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <input
                        type='number'
                        name='maxNumber'
                        onChange = {(e) => setMaxNumber(e.target.value)}
                        value={maxNumber}
                        placeholder='Maximum Number of Participants'
                        />
                    </div>

                    <div className={styles.formItem}>
                        <input
                        type='number'
                        name='minAge'
                        onChange = {(e) => setMinAge(e.target.value)}
                        value={minAge}
                        placeholder='Minimum Age for Partecipying'
                        />
                    </div>   
                    
                    
                    <div className={styles.formItem}>
                        <input
                        type='text'
                        name='requirements'
                        onChange = {(e) => setRequirements(e.target.value)}
                        value={requirements}
                        placeholder='Requirements for particying'
                        />
                    </div>   

                    <div className={styles.formItem}>
                        <input
                        type='text'
                        name='language'
                        onChange = {(e) => setLanguage(e.target.value)}
                        value={language}
                        placeholder='Event Language'
                        />
                    </div> 
                    
                    <div className={styles.formItem}>
                        <input
                        type='text'
                        name='location'
                        onChange = {(e) => setLocation(e.target.value)}
                        value={location}
                        placeholder='Event Location'
                        />
                    </div>
                    
                    
                    <div className={styles.formItem}>
                        <input
                        type='text'
                        name='importantDates'
                        onChange = {(e) => setImportantDates(e.target.value)}
                        value={importantDates}
                        placeholder='Important Dates'
                        />
                    </div>






                    <div className={styles.formItem}>
                        <button type="submit">Add post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}