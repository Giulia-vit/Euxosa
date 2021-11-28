// User come Event dove prendiamo tutti gli eventi

const { connectToDatabase } = require('../lib/mongodb');


export default function Event(req, res){
    try {
        let { db } =  connectToDatabase();
        let events =  db
            .collection('events')
            .find({})
            .sort({ published: -1 })
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(events)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


///Questo é un commento per aggiornarmi: allora sei al punto che cerchi sempre di accedere al database con una funzione domani cerca di fare lo strsso ma con l'api ci sono più tutorialq

