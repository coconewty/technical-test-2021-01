import React, { Component } from "react";
import {
  FormWrapper,
  FormGroup,
  Label,
  LabelText,
  Input,
  clearTextColourKey,
  cipherTextColourKey,
} from "./styles";
import { encrypt, decrypt } from "./utils/cipherUtils";
import CipherVisual from "./CipherVisual";

class SimpleCaesarCipher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CLEARTEXT: "HELLO WORLD",
      CIPHERTEXT: "IFMMP XPSME",
      key: 1,
    };
  }

  setKey = (event) => {
    const newKeyValue = event.target.value;
    if (newKeyValue.length && newKeyValue >= 0 && newKeyValue <= 26) {
      const newKeyInt = parseInt(newKeyValue, 10);
      this.setState((state) => ({
        key: parseInt(newKeyValue, 10),
        CIPHERTEXT: encrypt(state.CLEARTEXT, newKeyInt),
      }));
    }
  };

  setText = (event) => {
    const name = event.target.name;
    const value = event.target.value.toUpperCase();

    if (name === "CLEARTEXT") {
      this.setState({
        CLEARTEXT: value,
        CIPHERTEXT: encrypt(value, this.state.key),
      });
    } else if (name === "CIPHERTEXT") {
      this.setState({
        CLEARTEXT: decrypt(value, this.state.key),
        CIPHERTEXT: value,
      });
    }
  };

  render() {
    return (
      <div>
        <FormWrapper>
          <FormGroup>
            <Label>
              <LabelText colourKey={clearTextColourKey}>CLEARTEXT</LabelText>
              <Input
                type="text"
                name="CLEARTEXT"
                value={this.state.CLEARTEXT}
                onChange={this.setText}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              KEY
              <Input
                type="number"
                value={this.state.key}
                onChange={this.setKey}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <LabelText colourKey={cipherTextColourKey}>CIPHERTEXT</LabelText>
              <Input
                type="text"
                name="CIPHERTEXT"
                value={this.state.CIPHERTEXT}
                onChange={this.setText}
              />
            </Label>
          </FormGroup>
        </FormWrapper>
        <CipherVisual rotateKey={this.state.key} />
      </div>
    );
  }
}

export default SimpleCaesarCipher;
