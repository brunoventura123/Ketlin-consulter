import styled from "styled-components";

export const Container = styled.div`
   margin-top: 50px;
    .info{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        margin-bottom: 50px;
        border-bottom: 1px solid #402c2a;
        
        .text{
            flex: 1;
            padding-right: 30px;
            color: #FFF;
            text-align: center;
            font-size: 20px;
        }
        .image{
            flex:1;
            display: flex;
            justify-content: center;
            padding-bottom: 50px;
            img{
            width: 400px;
        }
        } 
    }
    @media (max-width:770px) {
        .info{
            flex-direction: column;
            padding: 0 10px;
            margin-bottom: 30px;
            .text{
                padding: 0;
                margin-bottom: 20px;
                font-size: 18px;
            }
        }
        .info.reverse{
            flex-direction: column-reverse;
        }
    }
    @media (max-width:650px) {
        .info .text{
            font-size: 14px;
        }
        .info .image{
            padding-bottom: 30px;
        }
        .info .image img{
            width: 300px;
        }
    }
`