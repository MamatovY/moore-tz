import { useEffect } from 'react';
import './App.scss';
import MainPage from './pages/mainPage';

function App() {
  useEffect(() => {
    console.log('%c Не успел стилизовать чекбоксы и активный каталог, полностью адаптивный может где-то политает но из-за того что было мало времени не успел хотя были много идей по js и анимаций', 'background: #0037ae; color: #fff; font-size:25px;');
  }, [])

  return (
    <div className='app'>
      <MainPage />
    </div>
  );
}

export default App;
