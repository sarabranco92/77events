// Mis en place une simulation d'API pour le formulaire de contact. Cette simulation permet de tester les scénarios de succès et d'erreur lors de l'envoi du formulaire
import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

// Simulation d'une API de contact
const mockContactApi = () => 
  new Promise((resolve, reject) => { 
    setTimeout(() => {

      // Simule un scénario de succès ou d'erreur
      if (Math.random() < 0.9) {
        resolve();
      } else {
        reject(new Error('Simulated API Error'));
      }
    }, 1000);
  });

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);

    // Gère l'envoi du formulaire
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);

      try {
        await mockContactApi();
        setSending(false);
        onSuccess(); 
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError] 
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field placeholder="" label="Nom" />
          <Field placeholder="" label="Prénom" />
          <Select
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
          />
          <Field placeholder="" label="Email" />
          <Button data-testid="button-test-id" type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"} 
          </Button>
        </div>
        <div className="col">
          <Field
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
}

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
}

export default Form;
