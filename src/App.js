import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Card from '@material-ui/core/Card';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ReactEcharts from 'echarts-for-react';






const styles = theme => ({
  button: {
    marginLeft: 5*theme.spacing.unit,
    marginRight: 5*theme.spacing.unit,
    marginBottom:2*theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  buttoncenter:{
    marginLeft: 15*theme.spacing.unit,
    marginRight: 15*theme.spacing.unit,
    marginBottom:5*theme.spacing.unit,
  },
  chartdiv:{
    marginTop:5*theme.spacing.unit,
    weight:100,
    height:400,
  }
});






class App extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          optional:{
              title: {text: '需求与报价曲线'},
              xAxis: {},
              yAxis: {},
              series: [{
                  name:'line1',
                  type: 'line',
                  smooth: true,
                  data: []
              },
              {
                  name:'line2',
                  type: 'line',
                  smooth: true,
                  data: []
              }]
          },

          sale_elec_count_st:0,
          sale_elec_price_st:0,
          sale_num_st:0,

          purchase_num_st:0,
          purchase_elec_count_st:0,
          purchase_elec_price_st:0,

          sale_tatal_count:0,
          purchase_tatle_count:0,
          lazyUpdate:false,
    }
  };



  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSureClick(index,e){

    if(index===0){
        var var_sale_tatal_count = parseFloat(this.state.sale_tatal_count) + parseFloat(this.state.sale_elec_count_st);
        var item1 = [var_sale_tatal_count,parseFloat(this.state.sale_elec_price_st)];
        this.state.optional.series[0].data.push(item1);
        this.setState(prevState => ({
          sale_tatal_count:var_sale_tatal_count,
          lazyUpdate:!prevState.lazyUpdate,

        }));

      };

    if(index===1){
      var var_purchase_tatle_count =  parseFloat(this.state.purchase_tatle_count) + parseFloat(this.state.purchase_elec_count_st);
      var item2 = [var_purchase_tatle_count,parseFloat(this.state.purchase_elec_price_st)];
      this.state.optional.series[1].data.push(item2);
      this.setState(prevState => ({
          purchase_tatle_count:var_purchase_tatle_count,
          lazyUpdate:!prevState.lazyUpdate,
      }));
    };



  }


    onClearChart(e){
      this.state.optional.series[0].data.splice(0,this.state.optional.series[0].data.length);
      this.state.optional.series[1].data.splice(0,this.state.optional.series[1].data.length);
      this.setState(prevState => ({
          lazyUpdate:!prevState.lazyUpdate,
      }));
    }


   render() {
     const { classes } = this.props;

     return (
       <div className="APP">
         <header className="App-header">
           <Card className="App-card">
             <div className="d">
               <TextField
                 id="sale_elec_count"
                 label="售电商电量"
                 defaultValue=""
                 type="number"
                 className={classes.textField}
                 margin="normal"
                 variant="outlined"
                 onChange={this.handleChange('sale_elec_count_st')}
               />
               <TextField
                 id="sale_elec_price"
                 label="对应电量报价"
                 type="number"
                 defaultValue=""
                 className={classes.textField}
                 margin="normal"
                 variant="outlined"
                 onChange={this.handleChange('sale_elec_price_st')}
               />
               <TextField
                 id="sale_num"
                 label="售电商编号"
                 type="number"
                 defaultValue=""
                 className={classes.textField}
                 margin="normal"
                 variant="outlined"
                 onChange={this.handleChange('sale_num_st')}
               />

               <Button variant="contained" color="primary" className={classes.button} onClick={this.onSureClick.bind(this,0)}>
                 确定
               </Button>

               <Button variant="contained" color="primary" className={classes.button}>
                 生成需求曲线
               </Button>
             </div>



             <div className="d2">
               <TextField
                 id="purchase_elec_count"
                 type="number"
                 label="购电商电量"
                 defaultValue=""
                 className={classes.textField}
                 margin="normal"
                 variant="outlined"
                 onChange={this.handleChange('purchase_elec_count_st')}
               />
               <TextField
                 id="purchase_elec_price"
                 type="number"
                 label="对应电量报价"
                 defaultValue=""
                 className={classes.textField}
                 margin="normal"
                 variant="outlined"
                 onChange={this.handleChange('purchase_elec_price_st')}
               />
               <TextField
                 id="purchase_elec_num"
                 type="number"
                 label="购电商编号"
                 defaultValue=""
                 className={classes.textField}
                 margin="normal"
                 variant="outlined"
                 onChange={this.handleChange('purchase_num_st')}
               />

               <Button variant="contained" color="primary" className={classes.button} onClick={this.onSureClick.bind(this,1)}>
                 确定
               </Button>

               <Button variant="contained" color="primary" className={classes.button}>
                 生成报价曲线
               </Button>

               <Button variant="contained" color="primary" className={classes.buttoncenter} onClick={this.onClearChart.bind(this)}>
                 清除结果
               </Button>

             </div>

             <div className={classes.chartdiv}>
               <ReactEcharts
                   lazyUpdate={this.state.lazyUpdate}
                   option={this.state.optional}
                   notMerge={false}
                   style={{width: '100%',height:'100%'}}
               />
             </div>


           </Card>


         </header>

       </div>
     );
   }


};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
