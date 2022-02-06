import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import { Button, TextField, Grid } from "@material-ui/core";


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "150px",
        paddingRight: "150px"
    },
    root: {
        minWidth: 200
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

const ContactForm = () => {
    const classes = useStyles();

    return (
        <div className="contact-me">
            <div className="container">
                <Grid
                    container
                    spacing={4}
                    className={classes.gridContainer}
                    justify="center"
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <div className='get-in-touch'>
                            Get In Touch
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>


                        <form className="contact-form" method="post">
                            <div className="input">
                                {/* <label>Name</label> */}
                                {/* <input type="text" name="fullname" /> */}
                                <TextField fullWidth name="name" label="Name" margin="dense" />
                            </div>
                            <div className="input">
                                {/* <label>Email</label> */}
                                {/* <input type="email" name="email" /> */}
                                <TextField fullWidth name="email" label="E-Mail" margin="dense" />
                            </div>
                            <div className="input">
                                {/* <label>Message</label> */}
                                {/* <textarea name="message" rows="5"></textarea> */}
                                <TextField fullWidth multiline rows={5} name="message" label="Message" margin="normal" />
                            </div>
                            <div>
                                {/* <input type="submit" className='submit-button' /> */}
                                <Button variant="contained" color="primary">Submit</Button>
                            </div>
                        </form>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ContactForm;