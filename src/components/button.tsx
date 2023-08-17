import { cva } from "~/styled-system/css";
import { styled } from "~/styled-system/jsx"


export const button = cva({
  base: {
    display: "flex",
    cursor: "pointer",
    borderRadius: "sm",
    m: "1",
    px: "3.5",
    py: "2",
    fontSize:"var(--font-size,1rem)",
    _disabled:{
      bg:"gray.300",
      cursor:"default",
      _hover:{
        bg:"gray.300"
      }
    }
  },
  variants: {
    variant: {
      solid: {
        bg: "var(--main-color)",
        color: "white",
        _hover:{
          bg:"var(--hover-darken)"
        }
      },
      outline: {
        borderWidth: "0.125rem",
        borderColor: "var(--main-color)",
        color:"var(--main-color)",
        _hover:{
          bg:"var(--hover-color)"
        }
      },
    },
    styleColor:{
      sky:{
        "--main-color":"colors.sky.500",
        "--hover-darken":"colors.sky.600",
        "--hover-color":"colors.sky.50"
      },
      red:{
        "--main-color":"colors.red.500",
        "--hover-darken":"colors.red.600",
        "--hover-color":"colors.red.50"
      },
      violet:{
        "--main-color":"colors.violet.500",
        "--hover-darken":"colors.violet.600",
        "--hover-color":"colors.violet.50"
      },
      rose:{
        "--main-color":"colors.rose.500",
        "--hover-darken":"colors.rose.600",
        "--hover-color":"colors.rose.50"
      },
      pink:{
        "--main-color":"colors.pink.500",
        "--hover-darken":"colors.pink.600",
        "--hover-color":"colors.pink.50"
      },
      yellow:{
        "--main-color":"colors.yellow.500",
        "--hover-darken":"colors.yellow.600",
        "--hover-color":"colors.yellow.50"
      },
      slate:{
        "--main-color":"colors.slate.500",
        "--hover-darken":"colors.slate.600",
        "--hover-color":"colors.slate.50"
      },
      teal:{
        "--main-color":"colors.teal.500",
        "--hover-darken":"colors.teal.600",
        "--hover-color":"colors.teal.50"
      },
      emerald:{
        "--main-color":"colors.emerald.500",
        "--hover-darken":"colors.emerald.600",
        "--hover-color":"colors.emerald.50"
      }
    }
  },
  defaultVariants:{
    variant:"solid",
    styleColor:"sky"
  },
})
type ButtonVariant=typeof button["variantMap"]["variant"][number]
type ButtonThemeColor=typeof button["variantMap"]["styleColor"][number]

export const Button=styled("button",button)