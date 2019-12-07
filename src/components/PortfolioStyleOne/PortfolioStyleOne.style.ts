import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";


export const PortfolioStyleOneBase = styled.div`

  background: ${DefaultStyle.secondary};
  padding: 50px 0px;
  text-align: center;
  
  p{
    color: #fff;
  }
  
  img{
      border-radius: 50%;
      height: 150px;
      width: 150px;
      object-fit: cover;
      top:0;
  }
  
  .card{
    max-width: 20rem;
    margin: 10px;
    border: none;
    background: transparent;
  }
  
  .carousel-indicators{
    display: none;
  }
  
  .carousel-control-prev, .carousel-control-next{
    color:red !important;
  }
  
  .fa-star{
    color: #ffaa04;
  }

`;