import Link from 'next/link';
import React from 'react'

import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Loader, Form, Select } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import styles from '../../public/Form.module.css'

const NewEvent = () => {
    const [form, setForm] = useState({ title: '', shortDescription: '', longDescription:'' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createEvent();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createEvent = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/events', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
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

    const categoryOption = [
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
        
    ]

    return (
        <div className={styles.formConteiner}>
            <h1>Create Note</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />

                        : <Form onSubmit={handleSubmit}>


                            <Form.Input
                                error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                label='Title'
                                placeholder='Title'
                                name='title'
                                onChange={handleChange}
                            />

                            <Select
                                placeholder='Select category'
                                label='Category'
                                name='category'
                                options={categoryOption}
                            />
                            <Form.TextArea
                                fluid
                                label='Descriprtion'
                                placeholder='Description'
                                name='shortDescription'
                                error={errors.shortDescription ? { content: 'Please enter an introduction', pointing: 'below' } : null}
                                onChange={handleChange}
                            />                            
                            
                            <Form.TextArea
                            fluid
                            label='Descriprtion'
                            placeholder='Description'
                            name='longDescription'
                            error={errors.longDescription ? { content: 'Please enter a description', pointing: 'below' } : null}
                            onChange={handleChange}
                        />
                            <button type='submit'>Create</button>
                        </Form>
                }
            </div>
        </div>
    )
}

export default NewEvent;




