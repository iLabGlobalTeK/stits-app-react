import { Paper, styled } from "@mui/material";

export const FormPageLayout = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "min(100vh,100%)",
}))