import {Check, PencilSquare, Trash} from "react-bootstrap-icons";
import styled from "styled-components";
import {useState} from "react";

const StyledNote = styled.div`
  height: 18rem;
  width: 18rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.div`
  height: 20%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1)
`

const CreatedAt = styled.div`

`
const ActionButton = styled.button`
  border: 0;
  background: none;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`

const Body = styled.div`
  height: 80%;
`
const StyledTextArea = styled.textarea`
  border: none;
  background: none;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`


export default function Note({id, createdDate, createdTime, text, onClickDelete, handleSave}) {
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState(text);

    const onBodyChange = (e) => {
        setBody(e.target.value)
    }


    return (
        <StyledNote className="d-flex flex-column col-md-8 me-4 mt-4">
            <Title className="d-flex justify-content-between align-items-center px-2 ">
                <div className="d-flex">
                    <div className="me-2">
                        {createdDate}
                    </div>
                    <div>
                        {createdTime}
                    </div>
                </div>

                {
                    editing ?
                        <div>
                            <ActionButton onClick={() => {
                                setEditing(false)
                                handleSave(id, body)
                            }}>
                                <Check size={30}/>
                            </ActionButton>
                        </div>
                        :
                        <div className="d-flex align-items-center">
                            <ActionButton className="me-2" onClick={() => {
                                setEditing(true)
                            }}>
                                <PencilSquare size={20}/>
                            </ActionButton>
                            <ActionButton id={id} onClick={() => onClickDelete(id)}>
                                <Trash size={20}/>
                            </ActionButton>
                        </div>
                }

            </Title>
            <Body>
                <StyledTextArea className="px-2 h-100 w-100" disabled={!editing} onChange={onBodyChange}>
                    {body}
                </StyledTextArea>
            </Body>
        </StyledNote>
    )
}
