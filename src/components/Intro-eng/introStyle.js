import styled from "styled-components";

export const IntroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 24px;
    text-align: center;
    color: #5385de;
    margin-top: 68px;
    line-height: 32px;
  }
  .username {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #1e1e1e;
    margin-top: 20px;
  }
  ._button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    align-items: center;
    padding: 16px 100px;
    background: #07a3b2;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);
    outline: none;
    border: none;
    color: white;
    margin-top: 20px;
    border-radius: 8px;
  }
  .div {
    min-width: 286px;
    min-height: 215px;
    background: #d9d9d9;
    margin-top: 30px;
  }
  .detail {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: #000000;
    margin-top: 15px;
    max-width: 284px;
  }
  .heading {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
  }
  ._text {
    max-width: 758px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #666666;
    margin: 0 auto;
    margin-top: 28px;
    margin-bottom: 40px;
    padding:  0 10px;
  }

 
`;

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  .tag_wrapper{
    display: flex;
    align-items: center;
    border: 2px solid #C2C9D1;
    border-radius:8px;
    padding: 15px 25px;
    color: #C2C9D1;
    margin: 0 8px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    p{
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      margin-left: 1rem;
    }
    i{
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    .tag_wrapper{
      padding: 10px 10px;
    }
  }
`;

export const VideoSection = styled.div`
  padding: 76px 0;
  padding-bottom: 120px;
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  video{
    border-radius: 32px;
  }
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #07a3b2;
`;

export const IntroContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
`;

export const FAQSection = styled.div`
 margin-top: 124px;
 text-align: center;
 margin-bottom: 8rem;
 padding: 0 10px;
 .heading{
  max-width: 623px;
  margin: 0 auto;
  margin-bottom: 3rem;

 }
`

export const BioFooter = styled.div`
min-height: 138px;
width: 100%;
background: #000000;
`

