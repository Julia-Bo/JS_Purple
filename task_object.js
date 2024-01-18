'use strict'

/* 
Написать объект ToDoList, который хранит 
в себе задачи {'title': 'Помыть посуду', 
id: 1, priority: 1} и имеет методы: 
- Добавить задачу 
- Удалить задачу по id 
- Обновить имя или приоритет по id 
- Отсортировать задачи по приоритету 
*/

const toDoList = {
    tasks: [{
        title: 'Помыть посуду',
        id: 1,
        priority: 1,
    }],

    findTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    },

    addTask: function (newTask) {
        if (this.tasks.includes(newTask)) {
            return `Задача ${newTask.title} была добавлена ранее`
        }

        const task = this.findTaskById(newTask.id)
        if (task) {
            return `Задача с номером id ${newTask.id} уже имеется в списке. Пожалуйста присвойте другой id`
        }

        return this.tasks.push(newTask);
    },

    deleteTask: function (id) {
        const taskIindex = this.tasks.findIndex((task) => task.id === id)
        this.tasks.splice(taskIindex, 1);

        return toDoList.tasks;
    },

    setName: function (id, newTitle) {
        const task = this.findTaskById(id)
        task.title = newTitle;

        return toDoList.tasks;
    },

    setPriority: function (id, newPriority) {
        const task = this.findTaskById(id)
        task.priority = newPriority;

        return toDoList.tasks;
    },

    sortByPrior: function () {
        this.tasks.sort((a, b) => {
            return a.priority - b.priority;
        })
        return toDoList.tasks;
    },


};

const task2 = {
    title: 'Приготовить ужин',
    id: 2,
    priority: 2,
};
const task3 = {
    title: 'Выучить 10 новых слов на английском',
    id: 2,
    priority: 3,
};
const task4 = {
    title: 'Полить цветы',
    id: 3,
    priority: 4,
};
const task5 = {
    title: 'Выгулять собаку',
    id: 4,
    priority: 5,
};
const task6 = {
    title: 'Записать видео',
    id: 5,
    priority: 6,
};

console.log(toDoList.addTask(task2));
console.log(toDoList.addTask(task2));
console.log(toDoList.addTask(task3));
console.log(toDoList.addTask(task4));
console.log(toDoList.addTask(task5));
console.log(toDoList.addTask(task6));


console.log(toDoList.deleteTask(2));

console.log(toDoList.setName(1, 'Повесить гирлянду'));
console.log(toDoList.setPriority(3, 2));

console.log(toDoList.sortByPrior());