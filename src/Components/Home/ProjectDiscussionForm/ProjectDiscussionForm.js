import { Paper, Grid2, TextField } from "@mui/material";
import React from "react";

// CSS
import "../../Home/ProjectDiscussionForm/ProjectDiscussionForm.css";

const ProjectDiscussionform = () => {
    return (
        <Grid2>
            <div>
                <p>Please fill out the form below to provide details and initiate a discussion about the project.
                This will help us better understand your requirements and collaborate on the next steps.</p>
            </div>
            <TextField label="Name" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
            <TextField label="Standard" variant="standard"></TextField>
        </Grid2>
    )
}

export default ProjectDiscussionform;