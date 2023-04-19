import React, { useEffect } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import { auth } from '../../../config/firebase';
import { useRecoilState } from 'recoil';
import userAtom from '../../../recoil';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
});

const formOptions = { resolver: yupResolver(validationSchema) };

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, getValues } = useForm(formOptions);
  const { errors } = formState;

  const [userData, setUser] = useRecoilState(userAtom);

  function onSubmit(data) {
    signInWithEmailAndPassword(auth, getValues('email'), getValues('password'))
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // navigate('/home');
        setUser({
          ...userData,
          auth: true,
          user: {
            email: user.email,
            uid: user.uid,
            accessToken: user.accessToken,
          },
        });
        navigate('/room');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <div className="signin">
      <h3>Connexion</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input_container">
          <label>Email</label>
          <input name="email" placeholder="test@email.com" type="email" {...register('email')} />
        </div>
        <div className="input_container">
          <label>Mot de passe</label>
          <input
            name="password"
            placeholder="**********"
            type="password"
            {...register('password')}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>

      <div className="divider"></div>
      <div>
        <p className="go_to_signup">
          Pas encore inscrit,
          <Link to="/signup">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
