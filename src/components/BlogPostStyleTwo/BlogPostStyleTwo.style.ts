import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";

export const BlogPostStyleTwoBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  .card{
    border: none;
  }
  
  .card-body{
    padding: 1.25rem 0px;
  }
  
  .price{
    color: ${DefaultStyle.primary} !important; 
  }

`;