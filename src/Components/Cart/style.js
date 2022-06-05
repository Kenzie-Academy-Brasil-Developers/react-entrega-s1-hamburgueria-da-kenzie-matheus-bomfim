import styled from "styled-components";

export const Aside = styled.aside`
display: flex;
flex-direction: column;
width: 365px;
height: 530px;
border: 2px solid #f5f5f5;
margin: 50px;
align-items: center;
`

export const DivName = styled.div`
width: inherit;
height: 65px;
background: #27AE60;
border-radius: 5px 5px 0px 0px;

h2{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;
color: #FFFFFF;
}
`

export const Ul = styled.ul`
    width:360px;
    height: 980px;
    display: flex;
    flex-direction: column;
    overflow:auto;
    gap: 15px;

`

export const Li = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 300px;
    justify-content:space-between;

    img{
        width: 80px;
        height: 80px;
        background: #E0E0E0;
        border-radius: 5px;
    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 15px;
        color: #BDBDBD;
        cursor: pointer;
    }
    
    p:hover{
        transform: scale(1.08);
        color: black;
    }
`
export const DivNames = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
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
`

export const DivInfoValue = styled.div`
    display: flex;
    flex-direction: column;
    width: 363px;
    height: 150px;
    border: inherit;
    margin: 0px;
    align-items: center;

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #333333;
    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #828282;
    }

    button{
        width: 343px;
        height: 50px;
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        color: #828282;
        margin: 5px;
        cursor: pointer;
    }

    button:hover{
        transform: scale(1.02);
        color: #333333;
    }

    div{
        display: flex;
        flex-direction: row;
        gap: 250px;
    }
`

export const DivVazio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #333333;
    }
    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #828282;
    }
`