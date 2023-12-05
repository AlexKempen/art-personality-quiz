import { useState } from "react";
import art from "./public/art.png";

import { Box, Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";

// Jade, Porcelain, Ivory 
const URLS = ["https://storymaps.arcgis.com/stories/b3269023b3df481792a79b86f7988c79",
    "https://storymaps.arcgis.com/stories/1a7552e74e3e4f4bba732cbb329b09bf",
    "https://docs.google.com/presentation/d/1tQpLiBlQRX9jq_HHD8lWp1NFoHiF_LuSIrHnEbpX-jw/edit?usp=sharing"];

export function Quiz(): JSX.Element {
    const [selected, setSelected] = useState<(number | null)[]>([null, null, null]);

    const makeRadioChangeHandler = (index: number) => {
        return (_: any, value: string) => {
            let copy = [...selected];
            copy[index] = parseInt(value);
            setSelected(copy);
        };
    }

    let disabled = false;
    selected.forEach((val) => {
        if (val == null) { disabled = true; }
    });

    return (<div id="quiz-container">
        <img id="left-art" alt="" src={art} />
        <img id="right-art" alt="" src={art} />
        <div id="quiz-grid">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                style={{ height: "100vh" }}
            >
                <Box>
                    <Card
                        elevation={4}
                        style={{ height: "100%", padding: "10px" }}
                    >
                        <CardContent>
                            <FormGroup row={false}>
                                <FormControl style={{ marginBottom: "20px" }} >
                                    <FormLabel>Which of these colors do you like the best?</FormLabel>
                                    <RadioGroup onChange={makeRadioChangeHandler(0)} >
                                        <FormControlLabel value="1" label="Ocean blue" control={<Radio />} />
                                        <FormControlLabel value="0" label="Forest green" control={<Radio />} />
                                        <FormControlLabel value="2" label="Simple white" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl style={{ marginBottom: "20px" }}>
                                    <FormLabel>How do you look at life?</FormLabel>
                                    <RadioGroup onChange={makeRadioChangeHandler(1)} >
                                        <FormControlLabel value="0" label="The hardest challenges are the most worthwhile." control={<Radio />} />
                                        <FormControlLabel value="1" label="There's an elegance to everything." control={<Radio />} />
                                        <FormControlLabel value="2" label="Life is a puzzle for us to solve." control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>How would most people describe you?</FormLabel>
                                    <RadioGroup onChange={makeRadioChangeHandler(2)} >
                                        <FormControlLabel value="0" label="Detailed, mysterious" control={<Radio />} />
                                        <FormControlLabel value="2" label="Regal, dignified" control={<Radio />} />
                                        <FormControlLabel value="1" label="Smooth, sanguine" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </FormGroup>
                        </CardContent>
                        <CardActions >
                            <Button
                                disabled={disabled}
                                onClick={() => {
                                    const index = Math.floor(Math.random() * 3);
                                    location.href = URLS[index];
                                }}
                            >
                                Find my art!
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </div>
    </div >);
}