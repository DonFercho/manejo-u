// routes/organizaciones.routes.js
const express = require('express')
const router = express.Router()

// Listar organizaciones
router.get('/', (req, res) => {
    req.getConnection((err, conn) => {
    if (err) return res.status(500).send(err)
    conn.query('SELECT * FROM organizacion', (err, rows) => {
        if (err) return res.status(500).send(err)
        res.json(rows)
    })
    })
})

// Obtener una organización
router.get('/:id', (req, res) => {
    req.getConnection((err, conn) => {
    if (err) return res.status(500).send(err)
    conn.query('SELECT * FROM organizacion WHERE id_organizacion = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).send(err)
        res.json(row)
    })
    })
})

// Crear organización
router.post('/', (req, res) => {
    req.getConnection((err, conn) => {
    if (err) return res.status(500).send(err)
    conn.query('INSERT INTO organizacion SET ?', [req.body], (err, result) => {
        if (err) return res.status(500).send(err)
        res.json({ message: 'Organización creada', id: result.insertId })
    })
    })
})

// Actualizar organización
router.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
    if (err) return res.status(500).send(err)
    conn.query('UPDATE organizacion SET ? WHERE id_organizacion = ?', [req.body, req.params.id], (err) => {
        if (err) return res.status(500).send(err)
        res.json({ message: 'Organización actualizada' })
    })
    })
})

// Eliminar organización
router.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
    if (err) return res.status(500).send(err)
    conn.query('DELETE FROM organizacion WHERE id_organizacion = ?', [req.params.id], (err) => {
        if (err) return res.status(500).send(err)
        res.json({ message: 'Organización eliminada' })
    })
    })
})

module.exports = router
