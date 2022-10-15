import React, { useState } from "react";
import copy from "clipboard-copy";
import Tooltip from "@material-ui/core/Tooltip";

export default function CopyToClipboard({ children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  function handleOnTooltipClose() {
    setShowTooltip(false);
  }

  function onCopy(content) {
    copy(content);
    setShowTooltip(true);
  }

  return (
    <Tooltip
      open={showTooltip}
      title={"Copied To Clipboard!"}
      leaveDelay={500}
      onClose={handleOnTooltipClose}
      placement="top"
    >
      {children({ copy: onCopy })}
    </Tooltip>
  );
}
