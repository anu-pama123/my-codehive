import { Paper, Grid2, TextField } from "@mui/material";
import React from "react";

// CSS
import "../../Home/ProjectDiscussionForm/ProjectDiscussionForm.css";

const ProjectDiscussionform = () => {
    return (
        <Grid2>
            <TextField label="Name" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
        </Grid2>
    )
}

export default ProjectDiscussionform;