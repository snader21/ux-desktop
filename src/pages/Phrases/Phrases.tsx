import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./Phrases.module.scss";
import { usePhrases } from "../../contexts/PhrasesContext";
import { useModal } from "../../providers/ModalProvider/ModalProvider";
import AddPhraseForm from "../../components/Phrases/AddPhraseForm";

function Phrases() {
  const { phrases, addPhrase } = usePhrases();

  const { openModal, closeModal } = useModal();

  const modalContent = <AddPhraseForm onClose={closeModal} onAdd={addPhrase} />;

  return (
    <div className={styles["motivational-container"]}>
      <header className={styles.header}>
        <h1>Frases motivacionales</h1>
        <button
          className={styles["add-phrase-button"]}
          onClick={() => openModal(modalContent)}
        >
          AGREGAR FRASE <span>+</span>
        </button>
      </header>

      <div className={styles["phrases-container"]}>
        {phrases.map((phrase) => (
          <div key={phrase.id} className={styles["phrase-card"]}>
            <div className={styles["phrase-header"]}>
              <h2>
                {phrase.type === "user"
                  ? "Frase del usuario"
                  : "Frase del sistema"}
              </h2>
              <div className={styles.icons}>
                <FaEdit className={styles.icon} />
                <FaTrash className={styles.icon} />
              </div>
            </div>
            <div className={styles["phrase-content"]}>
              <p>{phrase.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phrases;
