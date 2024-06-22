import { useReducer } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import Contact from "./components/Contact";

const contactReducers = (state, action) => {
  if (action.type == "ADD") {
    state = [
      ...state,
      { name: action.payload.name, phone: action.payload.phone },
    ];
  } else if ((action.type = "DEL")) {
    let temp = [...state];
    temp.splice(action.payload.index, 1);
    state = temp;
  }
  return state;
};

function App() {
  const [contacts, contactDispatch] = useReducer(contactReducers, []);

  return (
    <div>
      <AddContact contactDispatch={contactDispatch} />
      <Contact contactDispatch={contactDispatch} contacts={contacts} />
    </div>
  );
}

export default App;
