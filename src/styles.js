import Styled, { css } from "styled-components";

export const clearTextColourKey = "#0e2cd6";
export const cipherTextColourKey = "#48c70e";

export const Srikethrough = Styled.span`
  text-decoration: line-through;
`;

const boxStyle = css`
  border: 3px solid #ccc;
  box-shadow: -3px 3px 0 0px #9b27aa;
`;

export const TitleBox = Styled.div`
  ${boxStyle}
  display: inline-block;
  padding: 0 20px;
  position: relative;
  top: 10px;
  &:after {
    ${boxStyle}
    content: '😃';
    display: block;
    position: absolute;
    top: -20px;
    right: -20px;
    background: #333;
    width: 25px;
    height: 25px;
    line-height: 27px;
    text-align: center;
    border-radius: 50%;
  }
`;

export const FormWrapper = Styled.div`
  ${boxStyle}
  padding: 0 20px;
  max-width: 400px;
  padding: 10px;
  margin: 15px;
  @media (min-width: 460px) {
    padding: 20px;
    margin: 15px auto 0;
  }
`;

export const FormGroup = Styled.div`
  text-align: left;
  & + & {
    margin: 15px 0 0;
  }
  * {
      box-sizing: border-box;
  }
`;

export const Label = Styled.label`
  color: #767676;
  font-size: 14px;
  font-weight: bold;
`;

export const LabelText = Styled.span`
  &:after {
    content: '';
    display: inline-block;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    position: relative;
    left: 3px;
    top: 1px;
    ${(props) => props.colourKey && `background: ${props.colourKey};`}
  }
`;

export const Input = Styled.input`
  display: block;
  width: 100%;
  margin: 5px 0 0;
  border: 1px solid #ddd;
  padding: 5px;
  font-size: 18px;
`;

export const CipherVisualWrapper = Styled.div`
  height: 240px;
  width: 240px;
  position: relative;
  margin: 15px auto;
  background: #eee;
  border-radius: 50%;
  border: 2px solid ${clearTextColourKey};
`;

export const CipherVisualOuterRing = Styled.div`
  height: 230px;
`;

export const CipherVisualInnerRing = Styled.div`
  background: #ccc;
  height: 168px;
  width: 168px;
  position: absolute;
  top: 25px;
  left: 25px;
  border-radius: 50%;
  padding: 10px;
  ${(props) => `transform: rotate(-${props.rotate}deg);`}
  transition: transform 1s;
  border: 2px solid ${cipherTextColourKey};
`;

const charSyles = css`
  font-family: monospace;
  display: inline-block;
  position: absolute;
  top: 5px;
  left: 50%;
  height: 115px;
  transform-origin: bottom center;
  transform: translate(-50%, 0)
    ${(props) => props.rotate > 0 && css`rotate(${props.rotate}deg)`};
`;

export const CipherVisualOuterChar = Styled.span`
  ${charSyles}
  height: 115px;
`;

export const CipherVisualInnerChar = Styled.span`
  ${charSyles}    
  height: 90px;
`;
