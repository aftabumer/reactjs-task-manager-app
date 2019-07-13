import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  button: {
    marginTop: "5px"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

class Task extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper} style={{ backgroundColor: "#e3f2fd" }}>
          <Avatar className={classes.avatar}>
            <i class="material-icons">event_note</i>
          </Avatar>
          <Typography component="h1" variant="h5">
            Task
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <MuiThemeProvider theme={theme}>
              <Typography component="h6" variant="h6">
            Title:
          </Typography>   
                {this.props.task.editStatus ? (
                  <TextField
                    className={classes.margin}
                    label="Title"
                    type="text"
                    name="e_title"
                    key={`task${this.props.index}`}
                    onChange={this.props.change}
                    value={this.props.e_title}
                    placeholder="Title"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    fullWidth
                  />
                ) : (
                  this.props.task.title
                )}
              </MuiThemeProvider>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <MuiThemeProvider theme={theme}>
              <Typography component="h6" variant="h6">
            Description:
          </Typography> 
                {this.props.task.editStatus ? (
                  <TextField
                    className={classes.margin}
                    type="text"
                    placeholder="Description"
                    label="Description"
                    key={`task${this.props.index}`}
                    name="e_description"
                    value={this.props.e_description}
                    onChange={this.props.change}
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    fullWidth
                  />
                ) : (
                  this.props.task.description
                )}
              </MuiThemeProvider>
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <MuiThemeProvider theme={theme}>
              <Typography component="h6" variant="h6">
            Due Date:
          </Typography> 
                {this.props.task.editStatus ? (
                  <TextField
                    className={classes.margin}
                    type="date"
                    name="e_dueDate"
                    key={`task${this.props.index}`}
                    value={this.props.e_dueDate}
                    onChange={this.props.change}
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    fullWidth
                  />
                ) : (
                  this.props.task.dueDate
                )}
              </MuiThemeProvider>
            </FormControl>

            {/* <li key={`task${index}`}>Title :{task.title}</li>
              <li key={`task${index}`}>Description :{task.description}</li>
              <li key={`task${index}`}>dueDate :{task.dueDate}</li> */}
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              className={classes.button}
              onClick={
                this.props.task.editStatus
                  ? () => this.props.save(this.props.index)
                  : () => this.props.edit(this.props.index)
              }
            >
              {this.props.task.editStatus ? "Save" : "Edit"}
            </Button>

            <Button
              variant="contained"
              color="secondary"
              fullWidth={true}
              className={classes.button}
              onClick={() => this.props.delete(this.props.index)}
            >
              Delete
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Task.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Task);
