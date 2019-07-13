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
import Modal from "@material-ui/core/Modal";

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

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
  },
  modal: {
    position: "absolute",
    // width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});
class Tasks extends Component {
  state = {
    open: false,
    setOpen: true
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div style={{float: 'right'}}>
        <Button variant="contained" color="primary" style={{margin: theme.spacing(1)}} className={classes.button} onClick={this.handleOpen}>
        Add Task
      </Button>
      </div>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.modal}>
            <main className={classes.main}>
              <CssBaseline />
              <Paper
                className={classes.paper}
                style={{ backgroundColor: "#e3f2fd" }}
              >
                <Avatar className={classes.avatar}>
                  <i class="material-icons">event_note</i>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Task
                </Typography>
                <form className={classes.form}>
                  <FormControl margin="normal" required fullWidth>
                    <MuiThemeProvider theme={theme}>
                      <TextField
                        className={classes.margin}
                        label="title"
                        type="text"
                        placeholder="title"
                        name="title"
                        value={this.props.title}
                        onChange={this.props.change}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        fullWidth
                      />
                    </MuiThemeProvider>
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <MuiThemeProvider theme={theme}>
                      <TextField
                        className={classes.margin}
                        label="Description"
                        type="text"
                        placeholder="description"
                        name="description"
                        value={this.props.description}
                        onChange={this.props.change}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        fullWidth
                      />
                    </MuiThemeProvider>
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <MuiThemeProvider theme={theme}>
                      <TextField
                        className={classes.margin}
                        type="date"
                        placeholder="dueDate"
                        name="dueDate"
                        value={this.props.dueDate}
                        onChange={this.props.change}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        fullWidth
                      />
                    </MuiThemeProvider>
                  </FormControl>

                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth={true}
                    className={classes.button}
                    onClick={e => {
                      this.props.click(e);
                      this.handleClose(e);
                    }}
                  >
                    Add Task
                  </Button>
                </form>
              </Paper>
            </main>
          </div>
        </Modal>
      </div>
    );
  }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tasks);
