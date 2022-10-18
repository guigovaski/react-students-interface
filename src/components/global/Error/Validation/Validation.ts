import styled from "styled-components";

export const ErrorBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #EF9A9A;
    border: 2px solid #B71C1C;
    border-radius: 8px;
    padding: 10px 5px;
    color: #fff;
    font-size: 18px;

    button {
        border: none;
        background-color: transparent;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        cursor: pointer;

        svg {
            color: #B71C1C;
            font-size: 20px;
        }
    }
`;
