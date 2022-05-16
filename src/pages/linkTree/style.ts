import styled from "styled-components";
import capa from '../../assets/images/capa.jpg'

export const Container = styled.div`
    height:100vh;
    position: relative;
    background:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(${capa});
    background-position:center;
    background-size:cover;
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
        }
        div{
            border:5px solid #611045;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
        }
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border:5px solid #611045;
        }
    }
    .links{

        ul{
            
            padding: 0 10px;
                li{
                    background-color: #611045;
                    margin-bottom: 10px;
                    padding: 10px 20px;
                    text-align: center;
                    list-style:none;
                    cursor: pointer;
                    border-radius: 30px;

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
    .footer{
        font-size: 12px;
        color: #fff;
        text-align: center;
        margin-top: 30px;
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
}
   
`