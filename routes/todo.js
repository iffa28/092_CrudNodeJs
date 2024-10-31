import express, { Router } from "express";

const router = express.Router();

const todos = [];

router.get('/', (req, res) => { res.json(todos); });

router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo)
});

// Endpoint untuk menghapus tugas
router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.status(200).json({ message: `Tugas. '${deletedTodo.task}' telah dihapus` });
});

//Endpoint untuk memperbarui tugas
router.put('/:id', (req, res) =>{
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas tidak ditemukan' });
    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID '${todo.id}' telah diperbarui`,
        updatedTodo: todo
    });
});
export default router;