import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {  //Se é già connesso bene
        return;
    }
    // se no
    const db = await mongoose.connect(process.env.MONGODB_URI, { //si definisce variabile che si connette al database con la nostra stringa in env.local
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;    //questo mostra che sei connesso 
        // se effettivamnte sei connesso te lo stampo
}


export default dbConnect;