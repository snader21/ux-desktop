import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './Alarm.module.scss';

function Alarm({ hora, periodo, diasSeleccionados, categoriasSeleccionadas }) {
  const dias = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const categorias = ['Frases', 'Retos', 'Música'];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.time}>
          {hora}
          <span className={styles.period}>{periodo}</span>
        </h1>
        <div className={styles.icons}>
          <FaEdit className={styles.icon} />
          <FaTrash className={styles.icon} />
        </div>
      </div>

      <div className={styles.dias}>
        {dias.map((dia, index) => (
          <div
            key={index}
            className={styles.dia}
            style={{
              backgroundColor: diasSeleccionados.includes(dia) ? '#0A3AA3' : '#fff',
              color: diasSeleccionados.includes(dia) ? '#fff' : '#0A3AA3',
            }}
          >
            {dia}
          </div>
        ))}
      </div>

      <div className={styles.categorias}>
        {categorias.map((categoria, index) => (
          <button
          key={index}
          className={`${styles.botonCategoria} ${
            categoriasSeleccionadas.includes(categoria) ? styles.selected : ''
          }`}
          onClick={() => toggleCategoria(categoria)}
          style={{
            backgroundColor: categoriasSeleccionadas.includes(categoria) ? '#0A3AA3' : '#fff',
            color: categoriasSeleccionadas.includes(categoria) ? '#fff' : '#0A3AA3',
          }}
        >
          {categoria}
        </button>
        ))}
      </div>
    </div>
  );
};

export default Alarm;
