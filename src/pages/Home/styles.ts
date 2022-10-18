import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #023535;
    min-height: 100vh;

    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-area {
        background-color: #fff;
        position: fixed;
        z-index: 999;
        height: 500px;
        width: 500px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
            margin-bottom: 10px;
        }

        .btn-close {
            border: none;
            background-color: transparent;
            height: 20px;
            width: 20px;
            margin: 5px 5px 0 0;
            cursor: pointer;
            align-self: flex-end; 

            svg {
                font-size: 20px;
                color: #F24544;
            }
        }
    
        form {
            flex: 1;
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            label {
                align-self: flex-start;
            }

            input {
                height: 30px;
                width: 100%;
                border-radius: 8px;
                border: 1px solid #888;
                outline: 0;
                padding: 5px;
                margin-bottom: 10px;
            }

            button {
                width: 100px;
                height: 35px;
                border: 0;
                border-radius: 15px;
                background-color: #0CABA8;
                color: #fff;
                cursor: pointer;
                text-transform: uppercase;
            }
        }
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    color: #fff;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        margin: 20px 0;
    }

    .header-container {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        span {
            display: flex;
            font-size: 20px;
            margin-left: 20px;
        }
    }

    .header-btns {
        display: flex;
        align-items: center;

        .btn-add {
            width: 200px;
            height: 35px;
            border: 0;
            border-radius: 6px;
            background-color: #0CABA8;
            color: #fff;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: 500;
            margin-right: 50px;

            svg {
                margin-right: 3px;
            }
        }

        .logout-area {
            display: flex;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;

            .btn-logout {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
            border: none;
            background-color: transparent;
            margin-left: 10px;

                svg {
                    font-size: 25px;
                    color: #F24544;
                }
            }
        }
    }

    .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        .search-area {
            width: 800px;
            height: 40px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            background-color: #fff;

            svg {
                color: #000;
                font-size: 22px;
                margin: 0 10px;
            }

            input {
                height: 100%;
                width: 93%;
                font-size: 18px;
                padding: 5px 10px;
                outline: 0;
                border: 0;
            }
        }
    }

    .students-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
`;