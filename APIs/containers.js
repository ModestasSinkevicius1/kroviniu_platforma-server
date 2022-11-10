
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

    app.get('/containers/free', (req, res) => {
        const sql = `
        SELECT * FROM containers
        WHERE ('S' = sizeType AND size < 2) OR
        ('M' = sizeType AND size < 4) OR
        ('L' = sizeType AND size < 6)
        `;
        con.query(sql, (err, result) => {
          if(err) throw err;
          res.send(result);
        });
    })

    app.post('/containers', (req, res) => {
        const sql = `
        INSERT INTO containers (id, sizeType, size)
        VALUES (?, ?, ?)
        `;
        con.query(sql, [uuid(8), req.body.sizeType, req.body.size], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })

    app.put('/containers/sum/:id', (req, res) => {
        const sql = `
        UPDATE containers SET size = size + 1 WHERE id = ?
        `;
        con.query(sql, [req.params.id], (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    })

    app.put('/containers/sub/:id', (req, res) => {
        const sql = `
        UPDATE containers SET size = size - 1 WHERE id = ?
        `;
        con.query(sql, [req.params.id], (err, result) => {
            if(err) throw err;
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