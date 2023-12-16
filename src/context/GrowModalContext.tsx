"use client"

import { ActionType, StateType } from "@/app/types/types";
import { createContext, useReducer } from "react";

const INITAL_STATE = {
  modalOpen: false
};

export const ModalContext = createContext<{ state: StateType; dispatch: React.Dispatch<ActionType>}>({ state: INITAL_STATE, dispatch: () => { } });

const reducer = (state : StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_MODAL":
      return {
        modalOpen: state.modalOpen === false ? true : false
      };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITAL_STATE)
  return (
    <ModalContext.Provider value={{state, dispatch}}>
      {children}
    </ModalContext.Provider>
  )
}