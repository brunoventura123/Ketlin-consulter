import styled from "styled-components";

export const Container = styled.div`
    @keyframes move {
        0%,100%{bottom: 20;}
        50%{bottom: 30px;}
    }
    a{
        position:fixed;
        width:40px;
        height:40px;
        bottom:20px;
        right:20px;
        background-color:#25d366;
        color:#FFF;
        border-radius:50px;
        text-align:center;
        font-size:25px;
        box-shadow: 1px 1px 2px #888;
        z-index:1000;
        animation:move;
        animation-duration: 3s;
        animation-iteration-count: infinite;

        i{
            margin-top:8px;
            margin-left:3px;
        }
    }
   
`