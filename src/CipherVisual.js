import React from "react";
import {
  CipherVisualWrapper,
  CipherVisualOuterRing,
  CipherVisualInnerRing,
  CipherVisualOuterChar,
  CipherVisualInnerChar,
} from "./styles";
import { alphabet } from "./utils/cipherUtils";

const circumferencePartial = 13.846;

const CipherVisual = ({ rotateKey }) => (
  <CipherVisualWrapper>
    <CipherVisualOuterRing>
      {[...alphabet].map((char, i) => (
        <CipherVisualOuterChar key={i} rotate={i * circumferencePartial}>
          {char}
        </CipherVisualOuterChar>
      ))}
    </CipherVisualOuterRing>
    <CipherVisualInnerRing rotate={rotateKey * circumferencePartial}>
      {[...alphabet].map((char, i) => (
        <CipherVisualInnerChar key={i} rotate={i * circumferencePartial}>
          {char}
        </CipherVisualInnerChar>
      ))}
    </CipherVisualInnerRing>
  </CipherVisualWrapper>
);

export default CipherVisual;
