//Logica del documento:
//prendo tutto l'array
//prendo l'id del documento scelto
//se l'id dell'array é uguale a quello preso allora gli prendo tutte le info 
//il che significa prendere il titolo e description
//restituisco quello che ho appena preso 





import connectToDatabase from '../../lib/mongodb'
import Event from '../../utils/getThatEvent';

export default function refID({event}){
return(
    <>
    <p>{event._id}</p>
    <p>{event.title}</p>
    </>
);
}

export async function getServerSideProps(ctx) {
    const { userID } = ctx.query;
    await connectToDatabase()
    const user = await Event.findOne({userID}).lean() 
    user._id = user._id.toString()
  
    return { props: { user } }
  }