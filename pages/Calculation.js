import React from 'react'
import  { Component } from 'react';
import Components from './Components';
import Result from './Result';

const Calculation = () => {

    // constructor(()=>{
    //     super();

    //     this.state = {
    //         result: ""
    //     }
    // })

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

  return (
    <>
      <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <Result result={this.state.result}/>
                    <Components onClick={this.onClick}/>
                </div>
            </div>
    
    </>
  )
}

export default Calculation