
const containersAPI = (app, con, uuid) =>{

    app.get('/containers', (req, res) => {
        const sql = `
        SELECT * FROM containers
        `;
        con.query(sql, (err, result) => {
          if(err) throw err;
          res.send(result);
        });
    })

    app.post('/containers', (req, res) => {
        const sql = `
        INSERT INTO containers (id, sizeType)
        VALUES (?, ?)
        `;
        con.query(sql, [uuid(8), req.body.sizeType], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })

    app.delete('/containers/:id', (req, res) => {
        const sql = `
            DELETE FROM containers
            WHERE id = ?
            `;
            con.query(sql, [req.params.id], (err, result) => {
                if (err) throw err;
                res.send(result);
            });
    })

}

export { containersAPI };