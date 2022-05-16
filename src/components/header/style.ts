import styled from "styled-components";



export const Container = styled.div<{ img: string, move: boolean }>`
    .bg{
        background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${props => props.img});
        background-position:top;
        background-size:cover;
        width:100vw;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        
        .logo{
            font-size: 35px;
            font-weight: bold;
            color: #26141E;
            text-shadow: 1px 1px 2px #fff;
        }
        p{
            font-weight: bold;
            margin: 0;
            padding: 0;
            color: #26141E;
            text-shadow: 0px 0px 2px #fff;
        }
    }

    .she-info{
        display:flex;
        flex-direction:column;
        justify-content:center;
        background-color:#FFF;
        align-items:center;
        padding:100px 0;

        .photo-text{
            display:flex;
            justify-content:center;
            background-color:#FFF;
            align-items:center;
            
            img{
                height:auto;
                width:500px;
                transition:all ease 2s;
                margin-top:${props => props.move ? '0' : '200'}px;
                opacity:${props => props.move ? 1 : 0};
            }
            
        
        .she-text{
            transition:all ease 2s;
            background-color:#a1a1a1;
            width:auto;
            max-width:400px;
            height: auto;
            font-size:22px;
            font-weight:500;
            padding: 0 50px 50px 50px;
            margin-left:${props => props.move ? '-80' : '200'}px;
            opacity:${props => props.move ? 1 : 0};
            margin-bottom:-70px;
            color:#333;

            

            span{
                font-size:100px;
                font-family:Segoi UI;
                font-family: 'Comforter Brush', cursive;
            }
            p{
                font-weight:normal;
                font-size:20px;
                margin-top:30px;
                color:#222;
            }
        }
    }
    .areatext{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    .text{
        padding:50px;
        max-width:900px;
        font-size:17px;
        line-heigth:23px;
    }

    }
    @media (max-width: 990px) {
        .bg{
            height: 200px;
        }
        .she-info .photo-text {
                padding: 50px;
                img{
                width: 300px;
                
            }
            .she-text{
                max-width: 300px;
                padding: 20px;

                span{
                    font-size: 50px;
                }
                p{
                    font-size: 16px;
                }
        }

        }
        
    }
    @media (max-width:650px) {
        .bg{
            
            .logo{
                font-size: 23px;
            }
            .consulter{
                font-size:16px;
            }
        }
        .she-info{
           height: auto;
         .photo-text {
            width: 320px;
            padding: 0px;
            align-items: center;
            img{
                z-index: 1000;
            }
                
            .she-text{
                margin-left:${props => props.move ? '0' : '180'}px;
                opacity:${props => props.move ? 1 : 0};
                margin-top:-30px;
                

            }
        }
    }
        .photo-text{
            flex-direction: column;
        }
    }
`