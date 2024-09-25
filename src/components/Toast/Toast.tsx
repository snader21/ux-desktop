import WarningIcon from "../Icons/WarningIcon";
import styles from "./styles.module.scss";
import CloseIcon from "../Icons/CloseIcon";

function Toast({
  text,
  onClose,
  variation = undefined,
}: {
  text: string;
  onClose: () => void;
  variation: string | undefined;
}) {
  return (
    <div
      className={[
        styles["toast"],
        variation === "danger" ? styles["toast--danger"] : "",
      ].join(" ")}
    >
      <div className={styles["toast__content"]}>
        <div className={styles["toast__content__header"]}>
          <WarningIcon fill="#fff" width={16} height={16} />
          <span className={styles["toast__content__header__text"]}>{text}</span>
          <div className={styles["toast__content__header__close"]}>
            <CloseIcon fill="#fff" width={16} height={16} onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
