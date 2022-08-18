import notFoundImage from '/assets/notFound.svg';
import styles from '../styles/InvalidCityModal.module.css';

interface InvalidCityModalProps {
  setIsValidCity: (argument: boolean) => void;
}

export function InvalidCityModal({ setIsValidCity }: InvalidCityModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img src={notFoundImage} alt="Page not found" />
        <h1>Cidade inválida!</h1>
        <p>Por favor, informe o nome válido de uma cidade.</p>

        <button
          type="button"
          onClick={() => {
            setIsValidCity(true);
          }}
        >
          Corrigir
        </button>
      </div>
    </div>
  );
}
