import css from './LoginForm.module.css'

import { useState } from 'react';

export function LoginForm({ onData }) {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <section className={css.layout}>

		<div className={css.formBlock}>
			<h4 className={css.title}>Log In</h4>
			<form className={css.form} onSubmit={handleSubmit}>
				<input 	onChange={handleChange}
							className={css.input}
							placeholder="Enter email..."
							required
            			fullWidth
            			name="email"
            			autoComplete="email"
            			type="email"
            			value={email}/>
				<input 	onChange={handleChange}
							className={css.input}
							placeholder="Enter password..."
							required
            			fullWidth
            			name="password"
            			type="password"
            			autoComplete="current-password"
            			value={password}/>
				<button className={css.button} type="submit" fullWidth>Log In</button>
			</form>
		</div>

  </section>
  
  );
}