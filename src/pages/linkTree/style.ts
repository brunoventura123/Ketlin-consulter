
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    max-height: 100vh;
    position: relative;
    background-color: #611045;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .container{
        width: 320px;
        padding-top: 10px;

    .ketlinInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #FFF;
        
        .name{
            font-size: 23px;
            margin-top: 20px;
            margin: 0;
            padding: 0;
            font-family: 'Dancing Script', cursive;
        }
        .desc{
            margin-bottom: 20px;
            font-size: 12px;
            font-weight: normal;
            padding: 0;
            margin: 0;
            margin-bottom: 20px;
        }

        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
    .links{

        ul{
            
            padding: 0;
                li{
                    background-color: #A66D7E;
                    margin-bottom: 10px;
                    padding: 10px 20px;
                    text-align: center;
                    list-style:none;
                    cursor: pointer;

                    &:hover{
                        opacity:.9;
                    }
                
                a{
                    text-decoration: none;
                    color: #FFF;
                    width: 100%;
                    margin: 10px 20px;
                    height: 100%;
                }
            } 
        } 
    }
}
    .footer{
        font-size: 12px;
        padding-bottom:10px;
        color: #fff;
        a{
            text-decoration: none;
            transition: all ease .3s;
            color: #fff;
            &:hover{
                color: #fff;;
                text-decoration: underline;
            }
        }
    }
`