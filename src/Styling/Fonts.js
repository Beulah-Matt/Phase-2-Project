import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../Fonts-Images/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../Fonts-Images/fonts/Montserrat-SemiBold.ttf'
import MontserratBold from '../Fonts-Images/fonts/Montserrat-Bold.ttf';
import Communist from '../Fonts-Images/fonts/COMMI___.ttf'
const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Communist';
    src: url(${Communist});
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Communist';
    color: var();
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Fonts;