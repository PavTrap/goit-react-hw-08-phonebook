import React from 'react';
import css from './Contacts.module.css';
import { deleteContact } from '../store/sliceContacts';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts }) => {
	// const contacts = useSelector(state => state.contacts)
	const dispatch = useDispatch()

	return(
		<ul className={css.block_list}>
			{contacts.map(({ id, name, number}) => (
				<li key={id} className={css.list}>
					<p>{name}: {number}</p>
					<button 
						type='button'
						onClick={() => dispatch(deleteContact({id}))}
						className={css.button}>
						Delete
					</button>
				</li>
			))}
		</ul>
	)
}
export default ContactList
