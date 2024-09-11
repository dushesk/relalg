import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar4 from '../components/navbar4';
import Task from '../components/task';
import Footer1 from '../components/footer1';
import './exercises.css';
import { getAllTasks } from '../services/taskService.js';

const Exercises = (props) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllTasks();
        console.log('Fetched tasks:', data);  // логирование полученных данных
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);  // логирование ошибки
        setError(error.message);
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="exercises-container">
      <Helmet>
        <title>Exercises - RelAlgoPractice</title>
        <meta property="og:title" content="Exercises - RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        logoAlt="Здесь вы найдете логотип для нашего сайта"
        rootClassName="navbar4-root-class-name5"
      />
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            heading={`Задание ${task.id}`}
            text={task.description}
            rootClassName="custom-class"
            text3={`Таблицы: ${task.tables.join(', ')}`} // Пример, как можно отобразить массив таблиц
          />
        ))}
      </div>
      <Footer1></Footer1>
    </div>
  );
};

export default Exercises;
