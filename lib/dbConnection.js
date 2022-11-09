import mysql from 'mysql';

let con;

const openDBConnection = () =>{
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "krovinys",
    });
}

const getCon = () =>{
    return con;
}

export { openDBConnection, getCon };
