import React, { useState } from "react";
import styled from "styled-components";
import Alarm from "../../Icons/Alarm";

const AlarmIcon = styled.div`
  /* Add styling for the Alarm icon here */
  /* This is just an example, use your actual styling */
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  /* Add styling for the dropdown menu here */
  /* This is just an example, use your actual styling */
  position: absolute;
  top: 64px; /* Adjust the distance from the Alarm icon */
  right: 0;
  width: 150px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const MenuItem = styled.div`
  /* Add styling for the menu items here */
  /* This is just an example, use your actual styling */
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function DropAlert() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAlarmClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <AlarmIcon onClick={handleAlarmClick}>
        <Alarm></Alarm>
      </AlarmIcon>
      <DropdownMenu open={menuOpen}>
        {/* Add your menu items here */}
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </DropdownMenu>
    </div>
  );
}
