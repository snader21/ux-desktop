import { useEffect, useState } from "react";
import { useFakeAuth } from "../../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import EyeIcon from "../../components/Icons/EyeIcon";
import RightCircleArrow from "../../components/Icons/RightCircleArrow";
import { useDispatchToast } from "../../providers/ToastProvider/ToastProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useFakeAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dispatchToast = useDispatchToast();

  const isMailValid = (email: string) => {
    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(mailFormat);
  };

  const isFormValid = email && isMailValid(email) && password;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid) return;
    const result = login(email, password);
    if (!result) dispatchToast("Credenciales incorrectas", "danger");
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

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
        <p className={styles["login-header"]}>Te invitamos a iniciar sesión</p>
        <div className={styles["login-inputs"]}>
          <div className={styles["login-input-container"]}>
            <label className={styles["login-label"]}>Correo</label>
            <input
              type="text"
              placeholder="johndoe@example.com"
              className={styles["login-input"]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles["login-input-container"]}>
            <label className={styles["login-label"]}>Contraseña</label>
            <div className={styles["password-input-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="qwerty123"
                className={styles["login-input"]}
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
        </div>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleLogin}
          className={[
            styles["login-btn"],
            !isFormValid ? styles["login-btn--disabled"] : "",
          ].join(" ")}
          disabled={!isFormValid}
        >
          <span>Iniciar sesión</span>
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
