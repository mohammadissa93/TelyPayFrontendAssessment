import React from "react";
import { Box, BoxProps } from "@mui/material";

function Logo(props: TProps) {
    return (
        <Box
            role="img"
            component="img"
            height="30px"
            width="30px"
            src="/assets/images/logo.svg"
            {...props}
        />
    );
}

type TProps = Omit<BoxProps, "role" | "component" | "src">;

export default Logo;
