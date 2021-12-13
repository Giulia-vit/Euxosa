// this one should modify the event with the specific ID not create another

import {useRouter} from 'next/router'
import useSWR from 'swr'
import Form from '../../util/form/Form'

const fetcher = (url) =>
    fetch(url)
    .then((res)  => res.json())
    .then((json) => json.data)


const EditEvent =() =>{
    const router = useRouter();
    const {id} = router.query
    const { data: event, error} = useSWR(id ? `/api/events/${id}`: null , fetcher)


    if(error) return 'Fail to load'
    if(!event) return 'Loading'


    const EventForm = {
        title: event.title,
        category: event.category,
        description: event.description
    }

    return <Form EventForm = {EventForm} forNewEvent={false}></Form>

}

export default EditEvent



