import { useState } from "react";
import { useEffect } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { api } from "../../service/api";
import { ContainerNoteItem, Content } from "./styled";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <ContainerNoteItem isNew={isNew}>
      <Content>
      <input
        list="ingredient"
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
   
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button_add" : "button_delete"}
      >
        {isNew ? <FiPlus size={25} /> : <FiX />}
      </button>
      </Content>
    </ContainerNoteItem>
  );
}
