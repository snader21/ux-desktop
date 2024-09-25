import { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatchToast } from "../../providers/ToastProvider/ToastProvider";

function AddPhraseForm({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const dispatchToast = useDispatchToast();

  const handleAddPhrase = () => {
    onAdd(text);
    dispatchToast("Frase creada con éxito");

    setText("");
    onClose();
  };

  return (
    <div className={styles["form-content"]}>
      <p className={styles["form-title"]}>Nueva frase</p>
      <input
        type="text"
        placeholder="Escribe tu frase aquí..."
        className={styles["form-input"]}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={styles["form-actions"]}>
        <button onClick={onClose} className={styles["form-cancel-button"]}>
          CANCELAR
        </button>
        <button
          disabled={!text}
          onClick={handleAddPhrase}
          className={[
            styles["form-add-button"],
            !text && styles["form-add-button--disabled"],
          ].join(" ")}
        >
          AGREGAR
        </button>
      </div>
    </div>
  );
}

export default AddPhraseForm;
