import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для маршрутизации
import { Helmet } from 'react-helmet';
import Navbar4 from '../components/navbar4';
import Task from '../components/task';
import Footer1 from '../components/footer1';
import './exercises.css';

const Exercises = (props) => {
  const [tasks, setTasks] = useState([]); // Состояние для хранения списка заданий
  const [error, setError] = useState(null); // Состояние для хранения ошибки
  const [loading, setLoading] = useState(true); // Состояние для отслеживания процесса загрузки

  // Получаем все задания с сервера
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks'); // Обращение к API для получения всех задач
        if (!response.ok) {
          throw new Error('Ошибка при получении данных'); // Если ответ не OK, выбрасываем ошибку
        }
        const data = await response.json(); // Преобразуем ответ в JSON
        setTasks(data); // Сохраняем данные заданий в состояние
      } catch (error) {
        setError('Не удалось загрузить задания'); // Устанавливаем сообщение об ошибке
      } finally {
        setLoading(false); // Завершаем процесс загрузки
      }
    };

    fetchTasks();
  }, []); // useEffect срабатывает один раз при монтировании компонента

  // Если задания еще загружаются
  if (loading) {
    return <div>Загрузка заданий...</div>;
  }

  // Если произошла ошибка при загрузке
  if (error) {
    return <div>Ошибка: {error}</div>;
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
          <Link key={task.id} to={`/exercise/${task.id}`}> {/* Ссылка на страницу с конкретным заданием */}
            <Task
              heading={`Задание ${task.id}`} // Отображаем номер задания
              text={task.description} // Отображаем описание задания
              rootClassName="custom-class"
              text3={`Таблицы: ${task.tables.join(', ')}`} // Отображаем список таблиц
            />
          </Link>
        ))}
      </div>
      <Footer1 />
    </div>
  );
};

export default Exercises;
