import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Action from '../action';
import {connect} from 'react-redux';



 class FlightNumber extends Component {
     constructor(props) {
         super(props);
         this.getRowHtml = this.getRowHtml.bind(this);
     
         this.state = {
              keys:['id','title','details'],
              headers:['ID','TItle','Details'],
              rowClass: ['col-60', 'col-400', 'col-600']              
         }
     }
     componentDidMount(){
        this.props.Action()
console.log(this)       
     }

     getRowHtml() {
        return this.props.FlightData.map((obj)=>{
                                
            return <tr>
                {
                    this.state.keys.map((key, index)=><td className={this.state.rowClass[index]}>{obj[key]}</td>)
                }
            </tr>
        })
     }
     
    render() {
        
        return (
            <div>
               <table className="table table-fluid">
                    <thead>
                        <tr>
                            {
                                this.state.headers.map((v, index)=><th className={this.state.rowClass[index]}>{v}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                             this.props.FlightData.length && this.getRowHtml()
                            }
                    </tbody>
               </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   console.log(state);
    return {FlightData: state.reducerName.FlightData}
  }
  const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({Action},dispatch)
      
  }
  export default connect(mapStateToProps,mapDispatchToProps)(FlightNumber)