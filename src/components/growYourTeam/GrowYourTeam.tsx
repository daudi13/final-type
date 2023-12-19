import React from 'react';
import { ModalContext } from '@/context/GrowModalContext';

interface MyComponentsProps {
  text: string
}

const GrowYourTeam: React.FC<MyComponentsProps> = ({text}) => {
  const { dispatch } = React.useContext(ModalContext);

  return (
    <button onClick={() => dispatch({ type: "CHANGE_MODAL" })} style={{
      border: "none", padding: "13px 32px", borderRadius: "30px", color: "#fff", backgroundColor: "0DAAD5", fontWeight: "700"}}>{text}</button>
  )
}


export default GrowYourTeam;