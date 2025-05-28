import React from "react";
import HeaderSocials from "./HeaderSocials";
import useHomeVisibility from "../../hooks/useHomeVisibility";

const ConditionalSocials = () => {
  const isHomeActive = useHomeVisibility();

  // Only render HeaderSocials when home section is active
  return isHomeActive ? <HeaderSocials /> : null;
};

export default ConditionalSocials; 