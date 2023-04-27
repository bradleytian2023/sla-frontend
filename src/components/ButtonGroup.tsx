import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { ReactComponent as Check } from '@zendeskgarden/svg-icons/src/16/check-lg-fill.svg';
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';

const Example = () => (
  <>
    <div style={{display: "flex"}}>
      <span>
        <Button style={{ backgroundColor: "#FFB057", borderColor: "#FFB057", borderBottomLeftRadius: "20px", borderTopLeftRadius: "20px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", width: "5vw", marginRight: "3px", height:"2vw" }}>
          <Button.EndIcon>
            <Check style={{ color: "#FFFFFF" }} />
          </Button.EndIcon>
        </Button>
        <MD style={{ textAlign:"center" }}>new</MD>
      </span>
      <span>
        <Button style={{ backgroundColor: "#E35B66", borderColor: "#E35B66", borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", width: "5vw", marginRight: "3px", height:"2vw" }}>
          <Button.StartIcon>
            <Check style={{ color: "#FFFFFF" }} />
          </Button.StartIcon>
        </Button>
        <MD style={{ textAlign:"center" }}>open</MD>
      </span>
      <span>
        <Button style={{ backgroundColor: "#3091EC", borderColor: "#3091EC", borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", width: "5vw", marginRight: "3px", height:"2vw" }}>
          <Button.StartIcon>
            <Check style={{ color: "#FFFFFF" }} />
          </Button.StartIcon>
        </Button>
        <MD style={{ textAlign:"center" }}>pending</MD>
      </span>
      <span>
        <Button style={{ backgroundColor: "#2F3941", borderColor: "#2F3941", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px", width: "5vw", height:"2vw" }}>
          <Button.StartIcon>
            <Check style={{ color: "#FFFFFF" }} />
          </Button.StartIcon>
        </Button>
        <MD style={{ textAlign:"center"}}>on-hold</MD>
      </span>
    </div>
  </>
);

export default Example;