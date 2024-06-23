import { createSlice } from "@reduxjs/toolkit";

const myInitialData = {
  contacts: [],
};

const contactSlice = createSlice({
  initialState: myInitialData,
  name: "contacts-slice",
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({
        name: action.payload.name,
        phone: action.payload.phone,
      });
    },
    removeContact: (state, action) => {
      state.contacts.splice(action.payload.index, 1);
    },
  },
});

export default contactSlice.reducer;
export const { addContact, removeContact } = contactSlice.actions;
