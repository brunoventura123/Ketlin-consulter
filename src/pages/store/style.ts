import styled from "styled-components";

export const Container = styled.div`
    background-color: #390728;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center ;
    color: #FFF;

    form{
        width: 40%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2{
            color: #FFF;
        }

        input{
            margin-bottom: 20px;
            padding: 10px 20px;
            outline: none;
            border: 0;
            width: 100%;
        }
    }
    div{
        width: 40%;
        text-align: left;
        margin: 0;
        padding: 0;
    }
`