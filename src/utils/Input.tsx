export const Input = {
  parts: ["field"],
  baseStyle: {
    field: {
      color: "green.900",
    },
  },
  defaultProps: {
    variant: "filled",
    bg: "green.100",
  },
  variants: {
    filled: {
      field: {
        bg: "green.50",
        _hover: {
          bg: "green.100",
        },
        _focus: {
          bg: "green.100",
          borderColor: "green.400",
        },
        _selected: {
          bg: "green.100",
          borderColor: "green.400",
        },
        _active: {
          bg: "green.100",
          borderColor: "green.400",
        },
      },
    },
  },
};
