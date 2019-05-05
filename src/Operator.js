import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    marginLeft: 5*theme.spacing.unit,
    marginRight: 5*theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});


function Operator(props) {
  const { classes } = props;
  return (
    <div className="APP">
      <header className="App-header">
        <Card className="App-card">
          <div className="d">
            <TextField
              id="outlined-uncontrolled"
              label="售电商电量"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-uncontrolled"
              label="对应电量报价"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-uncontrolled"
              label="售电商编号"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>


          <div>
            <Button variant="contained" color="primary" className={classes.button}>
              生成需求曲线
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              确定
            </Button>
          </div>


          <div className="d2">
            <TextField
              id="outlined-uncontrolled"
              label="购电商电量"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-uncontrolled"
              label="对应电量报价"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-uncontrolled"
              label="购电商编号"
              defaultValue=""
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>


          <div>
            <Button variant="contained" color="primary" className={classes.button}>
              生成报价曲线
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              确定
            </Button>
          </div>

        </Card>


      </header>

    </div>
  );
}

Operator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Operator);
