import styled from "styled-components";
import mastheadBg from '../../../src/assets/images/feature-11.jpg'

export const MasterHeaderStyleTwoBase = styled.div`
`;

export const MastHeadBase = styled.div`
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: center;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${mastheadBg});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;

  .masthead-subheading {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 25px;
    color: #fff;
  }

  .masthead-heading {
    font-size: 3.25rem;
    font-weight: 700;
    line-height: 3.25rem;
    margin-bottom: 2rem;
    color: #fff;
  }

  @media (min-width: 768px) {
    padding-top: 17rem;
    padding-bottom: 12.5rem;

    .masthead-subheading {
      font-size: 2.25rem;
      line-height: 2.25rem;
      margin-bottom: 2rem;
    }

    .masthead-heading {
      font-size: 4.5rem;
      font-weight: 700;
      line-height: 4.5rem;
      margin-bottom: 4rem;
    }
  }

  @media screen and (min-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
    height:  calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;