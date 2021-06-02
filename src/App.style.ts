import styled from "styled-components";
import {DefaultStyle} from "./assets/style/Style";

export const AppBase = styled.div`

body {
    background-color: ${DefaultStyle.bgColor};
    font-family: ${DefaultStyle.secondaryFont};
}

h1, h2, h3, h4, h5, h6 {
    font-family: ${DefaultStyle.primaryFont};
    color: ${DefaultStyle.primary}; 
}

p, li, a, ul, .btn {
    font-family: ${DefaultStyle.secondaryFont};
    font-size: 1rem;
    color: ${DefaultStyle.secondary};
}

/* Background */
.bg-primary-lynne{
  background: ${DefaultStyle.primary};
}

.bg-secondary-lynne{
  background: ${DefaultStyle.secondary};
}

/* Buttons */
.btn-primary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.primary};
  color:#fff;
}

.btn-primary-outline-${DefaultStyle.themeName}{
  background: none;
  border-color: ${DefaultStyle.primary};
  color:  ${DefaultStyle.primary};
}

.btn-secondary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.secondary};
  border-color: ${DefaultStyle.secondary};
  color:#fff;
}

.btn-secondary-outline-${DefaultStyle.themeName}{
  border-color: ${DefaultStyle.secondary};
  color:  ${DefaultStyle.secondary};
}

/* Badges */
.badge-primary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.primary};
  color: #fff;
}

.badge-secondary-${DefaultStyle.themeName}{
  background: ${DefaultStyle.secondary};
  color: #fff;
}

  .logo{
    height: 50px;
  }

  @media (min-width: 992px) {
    #mainNav {
      padding-top: 25px;
      padding-bottom: 25px;
      transition: padding-top .3s, padding-bottom .3s;
      border: none;
    }
  }

`;