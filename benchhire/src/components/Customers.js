import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

export default class customers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
             data:[],
             perPage: 9,
             currentPage: 0,
             headers:['id','nationality','manufacturer','orbit'],
             key:['payload_id','nationality','manufacturer','orbit'],
              rowClass: ['col-65', 'col-300', 'col-700']   

        }
    }

         //calling api
       receivedData(){
          axios.get('https://api.spacexdata.com/v3/payloads')
          .then((res)=>{
              const data=res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
              const tableData=slice.map((obj)=>
                {
                    return <tr>
                        {
                            this.state.key.map((key,index)=><td className={this.state.rowClass[index]}>{obj[key]}</td>)
                        }
                    </tr>
                }
                )
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                        tableData
                })
          })
       }
       // for pagination 
       handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
            this.setState({
                currentPage: selectedPage,
                offset: offset
            }, () => {
                this.receivedData()
            });
  
    };

    componentDidMount() {
        this.receivedData()
    }


    render() {
        return (
            <div>
               <table className="table table-fluid">
                    <thead>
                       <tr>
                           {
                               this.state.headers.map((v,index)=><th className={this.state.rowClass[index]}>{v}</th>)                          
                             }
                       </tr>
                     </thead>
                     <tbody>
                      
                            {this.state.tableData}
                       
                   </tbody>
               </table>
               <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
            </div>
        )
    }
}
