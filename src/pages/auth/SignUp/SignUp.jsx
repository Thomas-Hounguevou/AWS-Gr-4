import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false;
  }
  return (
    <div className="signin">
      <h3>Création de compte</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input_container">
          <label>Email</label>
          <input name="email" placeholder="test@email.com" type="email" {...register('email')} />
        </div>
        <div className="input_container">
          <label>Mot de passe</label>
          <input placeholder="**********" type="password" />
        </div>
        <button type="submit">S'inscrire</button>
      </form>

      <div className="divider"></div>
      <div>
        <p className="go_to_signup">
          Déjà inscrit
          <Link to="/signin">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
