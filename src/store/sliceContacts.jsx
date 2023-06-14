import { createSlice } from "@reduxjs/toolkit";

export const sliceContacts = createSlice({
	name: 'contacts',
	initialState: [
		{ id: Math.random().toString(), name: 'Rosie Simpson', number: '459-12-56' },
		{ id: Math.random().toString(), name: 'Hermione Kline', number: '443-89-12' },
		{ id: Math.random().toString(), name: 'Eden Clements', number: '645-17-79' },
		{ id: Math.random().toString(), name: 'Annie Copeland', number: '227-91-26' },
	],
	reducers: {
		addContact(state, action) {
			// console.log(state);
			// console.log(action);
			state.push({
				id: Math.random().toString(),
	     		name: action.payload.name,
	      	number: action.payload.number,
			})
			console.log(state.contacts)
		},
		deleteContact(state, action) {
			return state.filter(item => item.id !== action.payload.id);
		},
	}
}) 

export const { addContact, deleteContact } = sliceContacts.actions;

// const sliceReducer = sliceContacts.reducer;
// export default sliceReducer;
