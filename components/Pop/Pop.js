import PropTypes from "prop-types";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useState } from "react";

const Pop = ({
  showCloseBtn,
  children,
  header,
  renderTrigger,
  trigger,
  triggerOptions,
  w,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const ifTriggerOnHover = triggerOptions && triggerOptions.triggerOnHover;

  const PopoverOptions = ifTriggerOnHover
    ? {
        isOpen: isOpen,
        onClose: handleClose,
      }
    : {};

  renderTrigger = renderTrigger ? (
    renderTrigger(handleOpen)
  ) : (
    <Button variant="ghost" {...triggerOptions}>
      {trigger}
    </Button>
  );

  return (
    <Popover {...PopoverOptions} {...rest}>
      <PopoverTrigger>{renderTrigger}</PopoverTrigger>

      <PopoverContent
        w={w || "auto"}
        borderColor="gray.400"
        border="1px"
        _focus={{
          outline: "none",
          boxShadow: "0 0 4px rgba(0, 0, 0, .2), 0 0 10px rgba(0, 0, 0, .2)",
        }}
      >
        {header && (
          <PopoverHeader fontWeight="semibold">{header}</PopoverHeader>
        )}
        {!triggerOptions.triggerOnHover && <PopoverArrow />}
        {showCloseBtn && <PopoverCloseButton />}
        <PopoverBody p={0}>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

Pop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * element as the `header`
   */
  header: PropTypes.any,
  /**
   * function with `handleOpen` param, that @returns button for opening the Pop
   */
  renderTrigger: PropTypes.func,
  showCloseBtn: PropTypes.bool,
  /**
   * element of string as `opening-button`, prior to `renderTrigger` function
   */
  trigger: PropTypes.any,
  /**
   * object with all props to the `trigger` opening-button
   */
  triggerOptions: PropTypes.object,
  /**
   * string to re-define the `width` for the Pop
   */
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pop;
