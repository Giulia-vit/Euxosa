
import Link from 'next/link';
import React from 'react'

import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Loader, Form, Dropdown } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import styles from '../../../public/Form.module.css'



const EditEvent = ({event}) => {
    const [form, setForm] = useState({ title: event.title, shortDescription: event.shortDescription, longDescription:event.longDescription});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({}); 
    const [form, setForm] = useState({ title: '', category: '' });




    const router = useRouter();


    
    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateEvent();

            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])



    const updateEvent = async () => {

        try {
            const pathArray = window.location.pathname.split('/');
            const person = pathArray[1];
            const res = await fetch(`http://localhost:3000/api/events/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push(`/${person}`);
        } catch (error) {
            console.log(error);
        }
    }

    const pathArray = window.location.pathname.split('/');
    const person = pathArray[1];

    if(person == 'admin'){
        const publishButton = (
            <button type='submit'>POST EVENTS ON USER PANEL</button>)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.shortDescription) {
            err.shortDescription = 'Introduction is required';
        }
        
        if (!form.longDescription) {
            err.longDescription = 'Description is required';
        }

        return err;
    }

/*     const categoryOption = [
        { key: 'sc', value: 'sc', text: 'Science' },
        { key: 'mt', value: 'mt', text: 'Math' },
        { key: 'dp', value: 'dp', text: 'Diplomacy' },
        { key: 'lg', value: 'lg', text: 'Language' },
        { key: 'lt', value: 'lt', text: 'Latin' },
        { key: 'sp', value: 'sp', text: 'Speach' },
        { key: 'in', value: 'in', text: 'Informatic' },
        { key: 'pt', value: 'pt', text: 'Poetry' },
        { key: 'at', value: 'at', text: 'Art' },
        { key: 'ph', value: 'ph', text: 'Photography' },
        
    ] */

    return (
        
        
        <div className={styles.formConteiner}>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />

                        : <><Form onSubmit={handleSubmit}>


                                <Form.Input
                                    error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                    label='Title'
                                    placeholder='Title'
                                    name='title'
                                    value={form.title}
                                    onChange={handleChange} />

{/*                                 <Dropdown
                                    placeholder='Select category'
                                    options={categoryOption} 
                                    fluid 
                                    
                                    multiple
                                    /> */}


                                <Form.TextArea
                                    fluid
                                    label='Descriprtion'
                                    placeholder='Description'
                                    name='shortDescription'
                                    value={form.shortDescription}
                                    error={errors.shortDescription ? { content: 'Please enter an introduction', pointing: 'below' } : null}
                                    onChange={handleChange} />

                                <Form.TextArea
                                    fluid
                                    label='Main Descriprtion'
                                    placeholder='Description'
                                    name='longDescription'
                                    value={form.longDescription}
                                    error={errors.longDescription ? { content: 'Please enter a description', pointing: 'below' } : null}
                                    onChange={handleChange} />


                                <button type='submit'>Edit</button>   //deve esserci un onclick che fa edit tutto 
                                // dopo ci deve essere un'altro onclick per postare

                                {/*PER PUBBLICARE*/}
                                
                                <div>{publishButton}</div>
                            </Form>
                            </>
                }

            </div>
        </div>
        
        
    )
    
}


EditEvent.getInitialProps = async ({query : { id }}) =>{
    const res = await fetch(`http://localhost:3000/api/events/${id}`);
    const {data} = await res.json();

    return { event : data}
}

export default EditEvent;