import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader, Dropdown } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const NewNote = () => {
    const [form, setForm] = useState({ title: '', category: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createNote = async () => {
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

        if(!form.category){
            err.category = 'Category required'
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
        <div className="form-container">
            <h1>Create Note</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                label='Title'
                                placeholder='Title'
                                name='title'
                                onChange={handleChange}
                            />
                            <Dropdown
                                onChange={handleChange}
                                name='category'
                                placeholder='Select category'
                                options={categoryOption} 
                                fluid 
                                multiple
                            />

                            <Button type='submit'>Create</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

export default NewNote;