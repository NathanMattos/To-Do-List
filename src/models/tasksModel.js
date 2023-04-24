const connection = require('./connection')

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)', [title, 'pendente', dateUTC])

    return { insertId: createdTask.insertId };
}

const deleteTask = async (id) => {
    const removedTask = await connection.query('DELETE from tasks WHERE id = ?', [id]);
    return removedTask;
}

const updateTask = async (id, task) => {
    const { title, status } = task;

    const query = 'UPDATE tasks set title = ?, status = ? WHERE id = ?';

    const [updatedTask] = await connection.query(query, [title, status, id]);

    return updatedTask;
}


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}