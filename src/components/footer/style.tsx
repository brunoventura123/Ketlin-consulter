import styled from "styled-components";

export const Container = styled.footer`
	background: #390728;
	box-shadow: inset 30px 30px 53px #170310,
            inset -30px -30px 53px #5b0b40;
	padding-top: 30px;
	height: auto;

section
{
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	margin: auto;
	background: linear-gradient(to bottom,#4187f608,#4187f608);
	background-size: cover;
	background-position: center;
}
section:before
{
	content: '';
	position: absolute;
	width: 100%;
	height: 50%;
	bottom: 0;
	background: #000;
	background: rgba(0,0,0,0.1);
	backdrop-filter: blur(5px);
	border-top: 1px solid rgba(255,255,255,0.5);
}
ul
{
	position: relative;
	display: flex;
}
ul li
{
	position: relative;
	list-style: none;
	margin: 10px;
}
ul li a
{
	position: relative;
	width: 80px;
	height: 80px;
	display: inline-block;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: #fff;
	font-size: 2em;
	border: 1px solid rgba(255,255,255,0.4);
	border-right: 1px solid rgba(255,255,255,0.2);
	border-bottom: 1px solid rgba(255,255,255,0.2);
	box-shadow: 0 5px 45px rgba(0,0,0,0.1);
	background: rgba(255,255,255,0.1);
	backdrop-filter: blur(2px);
	overflow: hidden;
	transition: 0.5s;
}
ul li a:hover
{
	transform: translateY(-20px);
}
ul li a:before
{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 50px;
	height: 100%;
	background: rgba(255,255,255,0.5);
	transform: translateX(150px) skewX(45deg);
	transition: 0.5s;
}
ul li a:hover:before
{
	transform: translateX(-150px) skewX(45deg);
}

.footer{
        font-size: 12px;
        color: #fff;
        text-align: center;
        margin-top: 30px;
		padding-bottom: 10px;
        a{
            transition: all ease .3s;
            color: #FFF;
            letter-spacing:3px;
            &:hover{
                color: blue;
            }
        }
        span{
            color: red;
        }
    }

@media (max-width:770px) {
	padding-top: 50px;
	ul li a{
		width: 40px;
		height: 40px;
		margin: auto;
		i{
			font-size: 20px;
		}
	}
	section{
		height: 60px;
	}
	section:before
{
	width: 100%;
	height: 50%;
}

}
@media (max-width: 650px) {
	ul{
		justify-content: center;
		margin: 0;
		margin-bottom: -7px;
        padding: 0;
		li{
			margin: 0 10px;
		}
	}
	ul li a{
		i{
			font-size: 18px;
		}
	}
}
`