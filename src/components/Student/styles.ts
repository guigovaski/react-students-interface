import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 15px;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        color: #000;
    }

    span:not(:last-child) {
        margin-bottom: 10px;
    }

    .icons {
        align-self: flex-end;

        svg {
            font-size: 20px;
            cursor: pointer;
        }

        .edit-component {
            color: #0D6EFD;
            margin-right: 15px;
        }

        .trash-component {
            color: #F24544;
        }
    }
`;
