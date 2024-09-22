import Alarm from './Alarm';
import styles from './AlarmList.module.scss';

function AlarmList() {
  const alarmas = [
    {
      hora: '5:00',
      periodo: 'AM',
      diasSeleccionados: ['L', 'M', 'X', 'J', 'V', 'S'],
      categorias: ['Frases', 'Retos', 'Música'],
    },
    {
      hora: '8:30',
      periodo: 'AM',
      diasSeleccionados: ['L', 'M', 'X', 'J', 'S'],
      categorias: ['Frases', 'Retos', 'Música'],
    },
    {
      hora: '7:00',
      periodo: 'PM',
      diasSeleccionados: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      categorias: ['Frases', 'Música'],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Alarmas</h1>
      <button className={styles.crearAlarma}>CREAR ALARMA +</button>
      <div className={styles.alarmasContainer}>
        {alarmas.map((alarma, index) => (
          <Alarm
            key={index}
            hora={alarma.hora}
            periodo={alarma.periodo}
            diasSeleccionados={alarma.diasSeleccionados}
            categoriasSeleccionadas={alarma.categorias}
          />
        ))}
      </div>
    </div>
  );
};

export default AlarmList;