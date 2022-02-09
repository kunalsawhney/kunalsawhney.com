import React from "react";
// import "./styles.css";
// import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import OutlinedCard from "./blogCard";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "50px",
        paddingRight: "50px"
    },
    root: {
        minWidth: 200,
        marginBottom: 15,
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

const blogData = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        url:
            "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        date: "Project 1 Image",
        blogName: "Medium"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        url:
            "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        date: "Project 1 Image",
        blogName: "Medium"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        url:
            "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        date: "Project 1 Image",
        blogName: "Medium"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        url:
            "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        date: "Project 1 Image",
        blogName: "Medium"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        url:
            "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        date: "Project 1 Image",
        blogName: "Medium"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        url:
            "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        date: "Project 1 Image",
        blogName: "Medium"
    }
];


const BlogGrid = () => {
    const classes = useStyles();

    const gridContent = blogData.map((blogObject) => (
        <Grid item xs={12}>
            <Card className={classes.root} raised="true">
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {blogObject.date}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {blogObject.title}
                    </Typography>
                    <br/>
                    {/* <Typography className={classes.pos} color="textSecondary"> */}
                        {/* adjective */}
                    {/* </Typography> */}
                    <Typography variant="body2" component="p">
                        {blogObject.blogName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a href={blogObject.url} style={{textDecoration: "none", color: "inherit"}}>Read Now</a>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    ));

    return (

        <div className="blog-grid">
            <div className="container">
            <Grid
                        container
                        spacing={4}
                        className={classes.gridContainer}
                        justify="center"
                    >
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="blog-header">BLOG</div>
                    </Grid>

                <div className="blog-grid-box">
                    <Grid item xs={12} sm={12} md={12}>
                        {gridContent}
                    </Grid>
                </div>
                </Grid>
            </div>
        </div>
    );
}

export default BlogGrid;
