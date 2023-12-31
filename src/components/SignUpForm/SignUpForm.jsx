import css from './SignUpForm.module.css';

import { useState } from 'react';

export function SignUpForm({ onData }) {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, email, password } = state;

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
			<h4 className={css.title}>Sign Up</h4>
			<form className={css.form} onSubmit={handleSubmit}>
				<input 	onChange={handleChange}
							className={css.input}
							placeholder="Enter name..."
							required
            			fullWidth
            			name="name"
            			autoComplete="name"
            			autoFocus
            			value={name}/>
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
				<button className={css.button} type="submit" fullWidth>Sign Up</button>
			</form>
		</div>

  </section>
  );
}