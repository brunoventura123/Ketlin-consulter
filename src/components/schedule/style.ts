import styled from "styled-components";

export const Container = styled.div`
    @keyframes isShadow {
        0%,100%{ box-shadow: 0 0 7px #FFF;}
        30%,70%{ box-shadow: 0 0 13px #FFF;}
    }
    .area{
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        .img{
            flex: 1;
            display: flex;
            justify-content: center;
        }
        .container{
            flex: 1;
        }
        .container a
{
    position: relative;
    display: inline-block;
    padding: 20px 25px;
    margin: 0 20px;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 22px;
    overflow: hidden;
    transition: 0.5s;
    -webkit-box-reflect: below  1px linear-gradient(transparent,#0005);;
}
.container a:hover
{
    background: #AD1D7B;
    color: #050801;
    box-shadow: 0 0 5px #AD1D7B,
                0 0 25px #AD1D7B,
                0 0 50px #AD1D7B,
                0 0 200px #AD1D7B;
}
.container a span
{
    position: absolute;
    display: block;
}
.container a span:nth-child(1)
{
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#AD1D7B);
    animation: animate1 1s linear infinite;
    animation-delay: 0s;
}
@keyframes animate1
{
    0%
    {
        left: -100%;
    }
    50%,100%
    {
        left: 100%;
    }
}
.container a span:nth-child(3)
{
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#AD1D7B);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
}
@keyframes animate3
{
    0%
    {
        right: -100%;
    }
    50%,100%
    {
        right: 100%;
    }
}
.container a span:nth-child(2)
{
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#AD1D7B);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
@keyframes animate2
{
    0%
    {
        top: -100%;
    }
    50%,100%
    {
        top: 100%;
    }
}
.container a span:nth-child(4)
{
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#AD1D7B);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animate4
{
    0%
    {
        bottom: -100%;
    }
    50%,100%
    {
        bottom: 100%;
    }
}

 }

 @media (max-width: 770px) {
     .area{
         flex-direction: column;

         .container{
             margin-top: 30px;

             a{
                 font-size: 18px;
             }
         }
     }
 }
 @media (max-width: 650px) {
     .area .container a{
         font-size: 12px;
         padding: 13px 15px;
     }
 }
`