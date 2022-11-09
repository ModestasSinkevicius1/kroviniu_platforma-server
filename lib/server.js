import express from 'express';
import cors from 'cors';
import { openDBConnection, getCon } from './dbConnection.js';
import { authorization } from './auth.js';

import { clothesAPI } from '../APIs/clothes.js';
import { orderAPI } from '../APIs/order.js';
import { userValidationAPI } from '../APIs/userValidation.js';
import { containersAPI } from '../APIs/containers.js';

import { uuid } from '../utilities/unique.js';
import { boxesAPI } from '../APIs/boxes.js';

const server = {};

server.start = () =>{

    const app = express();
    const port = 3007;

    app.use(express.json({ limit: "50mb" })); //use if storing images

    app.use(cors());

    app.use(
    express.urlencoded({
        extended: true,
    })
    );
    app.use(express.json());

    //DB here
    openDBConnection();
    const con = getCon();

    //Auth here
    authorization(app, con);

    //APIs here
    containersAPI(app, con, uuid);
    boxesAPI(app, con);
    clothesAPI(app, con);
    orderAPI(app, con);
    userValidationAPI(app, con);
    
    app.listen(port, () => {
    console.log(`Port info ${port}`);
    });
}

export { server };
