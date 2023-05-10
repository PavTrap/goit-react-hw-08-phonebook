import React from 'react';
import css from './Contacts.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
	return(
		<ul className={css.block_list}>
			{contacts.map(({ id, name, number}) => (
				<li key={id} className={css.list}>
					<p>{name}: {number}</p>
					<button 
						type='button'
						onClick={() => onDeleteContact(id)}
						className={css.button}>
						delete
					</button>
				</li>
			))}
		</ul>
	)
}
