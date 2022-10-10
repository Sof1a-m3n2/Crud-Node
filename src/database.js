

import { connect } from "mongoose";

import { base } from './config';


(async()=> {

    try{
        const db = await connect(base);

        console.log('La base se es:',db.connection.name);
    }
    catch(error){
        console.error(error);

    }

})();
