import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";

export const GalleryStyleOneBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;

  .gallery{
    position: relative;
  }
  
  .gallery-img{
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 2px;
  }
  
  .badge{
    position: absolute;
    bottom: 15px;
    left: 15px;
  }

`;