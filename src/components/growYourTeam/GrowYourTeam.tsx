import React from 'react';
import { ModalContext } from '@/context/GrowModalContext';
import { makeStyles } from 'tss-react/mui'

interface MyComponentsProps {
  text: string
}

const GrowYourTeam: React.FC<MyComponentsProps> = ({text}) => {
  const useStyle = makeStyles()(() => ({
    heroBtn: {
      alignSelf: "flex-start",
      border: "none",
      fontSize: "16px",
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: "700",
      textDecoration: "none",
      color: "#fff",
      padding: "12.5px 22px",
      backgroundColor: "#0E9AC0",
      borderRadius: "25px"
    }
  }))
  const { classes } = useStyle();
  const { dispatch } = React.useContext(ModalContext);

  return (
    <button className={classes.heroBtn} onClick={() => dispatch({ type: "CHANGE_MODAL" })}>{text}</button>
  )
}


export default GrowYourTeam;