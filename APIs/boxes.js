const boxesAPI = (app, con) =>{

    app.get('/boxes', (req, res) => {
        const sql = `
        SELECT * FROM boxes
        `;
        con.query(sql, (err, result) => {
          if(err) throw err;
          res.send(result);
        });
    })

    app.post('/boxes', (req, res) => {
        const sql = `
        INSERT INTO boxes (weight, title, image, flamable, degradable, container_id)
        VALUES (?, ?, ?, ?, ?, ?)
        `;
        con.query(sql, [req.body.weight, req.body.title, req.body.image, 
                        req.body.flamable, req.body.degradable, req.body.container_id], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })

    app.put('/boxes/:id', (req, res) => {
        const sql = `
        UPDATE boxes SET weight = ?, title = ?, image = ?, flamable = ?, degradable = ?, container_id = ? WHERE id = ?
        `;
        con.query(sql, [req.body.weight, req.body.title, req.body.image, 
                        req.body.flamable, req.body.degradable, req.body.container_id, 
                        req.params.id], (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    })

    app.delete('/boxes/:id', (req, res) => {
        const sql = `
            DELETE FROM boxes
            WHERE id = ?
            `;
            con.query(sql, [req.params.id], (err, result) => {
                if (err) throw err;
                res.send(result);
            });
    })

}

export { boxesAPI };