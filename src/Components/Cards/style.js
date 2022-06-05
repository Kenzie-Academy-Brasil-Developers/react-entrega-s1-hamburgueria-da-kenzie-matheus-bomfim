import styled from "styled-components"

export const Div = styled.div`
width: 270px;
height: 346px;
background: #FFFFFF;
border: 2px solid #E0E0E0;
border-radius: 5px;
img{
width: 180px;
height: 150px;
}

h2{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;
color: #333333;
}

span{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #828282;
}

p{
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
color: #27AE60;
}

button{
width: 106px;
height: 40px;
left: 20px;
top: 133px;
background: #27AE60;
border: 2px solid #27AE60;
border-radius: 8px;
text-align: center;
cursor: pointer;
}

button:hover{
    transform: scale(1.03);
    color: white;
}

.infos{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: inherit;
    height: inherit;
    margin: 15px;
}
`