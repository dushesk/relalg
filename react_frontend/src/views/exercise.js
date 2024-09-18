import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Для получения id из URL
import { Helmet } from 'react-helmet';
import Navbar4 from '../components/navbar4';
import Exercise1 from '../components/exercise1';
import Footer1 from '../components/footer1';
import './exercise.css';

const Exercise = () => {
  const { id } = useParams(); // Получаем id задания из URL
  const [task, setTask] = useState(null); // Состояние для хранения данных задания
  const [error, setError] = useState(null); // Состояние для обработки ошибок
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных

  // Получаем задание по id при загрузке компонента
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`/api/tasks/${id}`); // Обращение к API через fetch
        if (!response.ok) {
          throw new Error('Ошибка при получении данных'); // Обработка ошибок ответа
        }
        const data = await response.json(); // Получаем данные в формате JSON
        setTask(data); // Сохраняем данные задания в состояние
      } catch (error) {
        setError('Не удалось загрузить задание.'); // Устанавливаем сообщение об ошибке
      } finally {
        setLoading(false); // Завершаем процесс загрузки
      }
    };

    fetchTask();
  }, [id]); // useEffect срабатывает при изменении id

  // Если задание еще загружается
  if (loading) {
    return <div>Загрузка задания...</div>;
  }

  // Если произошла ошибка при загрузке задания
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="exercise-container">
      <Helmet>
        <title>Exercise - RelAlgoPractice</title>
        <meta property="og:title" content="Exercise - RelAlgoPractice" />
      </Helmet>
      <Navbar4
        action1="Регистрация"
        action2="Вход"
        logoAlt="Здесь вы найдете логотип для нашего сайта"
        rootClassName="navbar4-root-class-name9"
      />
      <Exercise1
        rootClassName="exercise1-root-class-name1"
        heading={`Задача ${task.id}`} // Заголовок с номером задачи
        text={task.description} // Описание задачи
      />
      <Footer1 />
    </div>
  );
};

export default Exercise;
