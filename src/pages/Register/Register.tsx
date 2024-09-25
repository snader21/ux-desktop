import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFakeAuth } from "../../contexts/FakeAuthContext";
import styles from "./styles.module.scss";
import EyeIcon from "../../components/Icons/EyeIcon";
import RightCircleArrow from "../../components/Icons/RightCircleArrow";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useFakeAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isMailValid = (email: string) => {
    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(mailFormat);
  };

  const isFormValid =
    email &&
    isMailValid(email) &&
    password &&
    confirmPassword &&
    password === confirmPassword;

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    register(email, password, confirmPassword);
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles["outer-container"]}>
      <form className={styles["form-container"]}>
        <div className={styles["logo-container"]}>
          <img
            src="src/assets/logo.svg"
            alt="Logox"
            className={styles["logo"]}
          />
        </div>
        <p className={styles["register-header"]}>
          Registrate con tu cuenta de correo
        </p>
        <div className={styles["register-inputs"]}>
          <div className={styles["register-input-container"]}>
            <label className={styles["register-label"]}>Correo</label>
            <input
              type="text"
              placeholder="johndoe@example.com"
              className={styles["register-input"]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles["register-input-container"]}>
            <label className={styles["register-label"]}>Contraseña</label>
            <div className={styles["password-input-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="qwerty123"
                className={styles["register-input"]}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles["eye-icon"]}>
                <EyeIcon
                  onClick={togglePasswordVisibility}
                  stroke="#0a3aa3"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className={styles["register-input-container"]}>
            <label className={styles["register-label"]}>
              Confirma tu contraseña
            </label>
            <div className={styles["password-input-container"]}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="qwerty123"
                className={styles["register-input"]}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className={styles["eye-icon"]}>
                <EyeIcon
                  onClick={toggleConfirmPasswordVisibility}
                  stroke="#0a3aa3"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleRegister}
          className={[
            styles["register-btn"],
            !isFormValid ? styles["register-btn--disabled"] : "",
          ].join(" ")}
          disabled={!isFormValid}
        >
          <span>Registrar</span>
          <RightCircleArrow
            stroke={isHovered && isFormValid ? "#0a3aa3" : "#fff"}
            width={24}
            height={24}
          />
        </button>
      </form>
    </div>
  );
}

export default Register;
