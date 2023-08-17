import { cva, sva } from "~/styled-system/css";
import { styled } from "~/styled-system/jsx"

export const button = cva({
    base: {
        outline: 0,
        rounded: "sm",
        py: "2",
        px: "3",
        w: "full",
        _placeholder: {
            fontWeight: "500"
        }
    },
    variants: {
        variant: {
            outline: {
                borderWidth: "1px",
                borderColor: "slate.400",
                _focus: {
                    borderWidth: "3px",
                    borderColor: "slate.500"
                },
                _placeholder: {
                    color: "slate.400"
                }
            },
            filled: {
                bg: "slate.100",
                _focus:{
                    bg:"slate.200"
                }
            }
        },
        error: {
            true: {
                color: "red.500",
                _placeholder: {
                    color: "red.400"
                },
            }
        }
    },
    compoundVariants: [
        {
            variant: "filled",
            error: true,
            css: {
                bg: "red.50",
                _placeholder: {
                    color: "red.300"
                },
                _focus: {
                    bg: "red.100"
                }
            }
        },
        {
            variant: "outline",
            error: true,
            css: {
                borderWidth: "1px",
                borderColor: "red.500",

                _focus: {
                    borderWidth: "3px",
                    borderColor: "red.600"
                },
            }
        }
    ],
    defaultVariants: {
        variant: "outline"
    },
})
export const Input = styled("input", button)