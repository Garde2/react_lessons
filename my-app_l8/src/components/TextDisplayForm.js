import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

function TextDisplayForm() {
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    setDisplayedText(text);
  };

  return (
    <div style={{ padding: 20 }}>
      <TextField
        lable="Введите текст"
        variant="outlined"
        fullWidth
        value={text}
        onChange={handleChange}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Отобразить текст{" "}
      </Button>
      {displayedText && (
        <Card elevation={4}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              style={{ wordWrap: "break-word" }}
            >
              {displayedText}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default TextDisplayForm;
