import {style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";


const size = {
    sm: {
        padding: "20px"
    },
    lg: {
        padding: "50px"
    },
};


export const button = recipe({
    base: style({
        display: "flex",
        alignItems: "center",
        color: "red",
        background: "blue",
        border: "1px solid black",
    }),
    variants: {
        size,
    },
});

