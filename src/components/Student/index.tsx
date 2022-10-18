import * as S from "./styles";
import { Props } from "./types";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

export const StudentComponent = ({ name, email, handleStudentEdit, handleStudentDelete }: Props) => {

    return (
        <S.Wrapper className="student-component">
            <span><strong>Nome: </strong>{name}</span>
            <span><strong>E-mail: </strong>{email}</span>
            <div className="icons">
                <AiFillEdit onClick={handleStudentEdit} className="edit-component" />
                <BsFillTrashFill onClick={handleStudentDelete} className="trash-component" />
            </div>
        </S.Wrapper>
    );
}