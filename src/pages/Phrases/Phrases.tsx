import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './Phrases.module.scss';

function Phrases() {
  const userPhrase = "Despierta y brilla, el mundo te espera";
  const systemPhrase = "El esfuerzo de hoy es el éxito del mañana";

  return (
    <div className={styles['motivational-container']}>
      <header className={styles.header}>
        <h1>Frases motivacionales</h1>
        <button className={styles['add-phrase-button']}>
          AGREGAR FRASE <span>+</span>
        </button>
      </header>

      <div className={styles['phrases-container']}>
        <div className={styles['phrase-card']}>
          <div className={styles['phrase-header']}>
            <h2>Frase del usuario</h2>
            <div className={styles.icons}>
              <FaEdit className={styles.icon} />
              <FaTrash className={styles.icon} />
            </div>
          </div>
          <div className={styles['phrase-content']}>
            <p>{userPhrase}</p>
          </div>
        </div>

        <div className={styles['phrase-card']}>
          <div className={styles['phrase-system-header']}>
            <h2>Frase del sistema</h2>
            <div className={styles['phrase-content']}>
              <p>{systemPhrase}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phrases;