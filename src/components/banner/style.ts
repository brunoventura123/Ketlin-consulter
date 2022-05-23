import styled from "styled-components";

export const Container = styled.div`
    max-height: 300px;
    position: relative;
    
    .section2 {
        background-image: url('https://luciananikipa.com.br/novosite/wp-content/uploads/2020/03/cabides.jpg');
        background-size: cover;
        background-position:top;
        background-attachment: fixed;
        width: 100%;
        height: 300px;
        position: relative;
        
        
        .div{
            background-color:rgba(0,0,0,0.7);
            padding:50px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            

            .border{
                display: flex;
                justify-content:center;
                align-items:center;
                border:1px solid #BFA87E;
                color:#BFA87E;
                font-size:40px;
                font-weight: 500;
                text-align:center;
                width: 100%;
                
            }
        }
    }
    @media (max-width: 900px) {
        .section2{
            height: 200px;
        }
    }
    @media (max-width: 650px) {
        .section2 {

            .div{
                padding: 20px;
                .border{
                font-size: 20px;
        }
            }
        }
    }
`