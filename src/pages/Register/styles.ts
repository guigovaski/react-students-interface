import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #023535;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: #fff;
    }

    .form-register {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 20px;
        background-color: #015958;
        border-radius: 0 6px 6px 6px;
    
        input {
            width: 300px;
            height: 35px;
            outline: 0;
            border: 1px solid #999;
            border-radius: 6px;
            padding: 0 10px;
        }

        .error-validation {
            color: #B71C1C;
            align-self: flex-start;
            margin-bottom: 15px;
        }

        label {
            align-self: flex-start;
            color: #fff;
        }

        span {
            color: #fff;
            font-size: 14px;
            margin-bottom: 5px;

            strong a {
                color: #fff;
            }
        }

        button {
            width: 100px;
            height: 30px;
            border: 0;
            background-color: #0FC2C0;
            color: #fff;
            border-radius: 6px;
            cursor: pointer;
        }
    }

   
`;