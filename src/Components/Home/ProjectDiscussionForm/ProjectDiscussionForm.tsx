import { Paper, Grid2, TextField } from "@mui/material";
import React from "react";

// CSS
import "../../Home/ProjectDiscussionForm/ProjectDiscussionForm.css";

const ProjectDiscussionform = () => {
  const formData = {
    name: " ",
    email: " ",
    location: " ",
    budget: " ",
    subject: " ",
    message: " ",
  };

  const handleFormSubmit = (e) => {};
  return (
    <Grid2>
      <div>
        <p>
          Please fill out the form below to provide details and initiate a
          discussion about the project. This will help us better understand your
          requirements and collaborate on the next steps.
        </p>
      </div>
      <form>
        <TextField label="Name" variant="standard"></TextField>
        <TextField label="Email" variant="standard"></TextField>
        <TextField label="Location" variant="standard"></TextField>
        <TextField label="Budget" variant="standard"></TextField>
        <TextField label="Subject" variant="standard"></TextField>
        <TextField label="Message" variant="standard"></TextField>
        <button onClick={(e) => handleFormSubmit(e.target)}>Submit</button>
      </form>
    </Grid2>
  );
};

export default ProjectDiscussionform;
