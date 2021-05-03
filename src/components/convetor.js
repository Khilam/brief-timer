import React, { Component } from 'react'


export default class Convetor extends Component {
    state={ 
        Time : 0,
        heures :0,
        minutes:0,
        secondes :0,
        
    }
    convertir =()=>{
       let T = this.state.Time
       this.setState({
           heures:Math.floor(T/3600),
           minutes:Math.floor((T%3600)/60),
           secondes:Math.floor(T%60)

       })
    }
    //function handelChange pour changer l input avec setState et on ajoute event (e)//
    //onChange  pour changer l interieur de l input ajoute event (e)//
    handelChange = (e)=> {
        this.setState({
            Time : e.target.value 
        })
    }
reset =()=>{
    this.setState({
        heures:0,
        minutes:0,
        secondes:0
       
        
    })
}
start = () =>{
    this.inter =  setInterval(
        ()=> {
            if(this.state.secondes===59){
                   this.state.minutes++
                this.state.secondes=0
            }
            if(this.state.minutes===59){
                this.state.heures++
             this.state.minutes=0
         }
            this.setState({
              secondes: this.state.secondes+1,
            })
          },
          1000   
    )
}
stop = ()=>{
    
    clearInterval(this.inter)
   
        
    
       
}
    render() {
        return (
           /* <div>
                <input  type="text" className="form-control  py-4 " onChange={this.handelChange}/>
                <button type="button" onClick={this.convertir} >convertir</button>
                <div className="convertissuer">
                    <h2>Heures {String(this.state.heures).padStart(2,'0')}:</h2>
                   
                    <h2>Minutes {String(this.state.minutes).padStart(2,'0')}:</h2>
                    <h2>Secondes {String(this.state.secondes).padStart(2,'0')}:</h2>*/


<div className="timer-container"> 

      <div>
           <h2 className='h'> Timer </h2> 
           <p>The darck night of the sole</p>
           
</div>

<div className="timer">
  
           <input  type="text" className="form-control  py-4 " onChange={this.handelChange}/>
           <button type="button" onClick={this.convertir} ><strong>convertir</strong></button>
           </div>
           <div className="timer2">
  <div className="hours">
    <p className="digits">{String(this.state.heures).padStart(2,'0')}</p>
    <p><small>Heures</small></p>
  </div>
  <div className="minuts">
    <p className="digits">{String(this.state.minutes).padStart(2,'0')}</p>
    <p><small>Minutes</small></p>
  </div>
  <div className="seconds">
    <p className="digits">{String(this.state.secondes).padStart(2,'0')}</p>
    <p><small>Secondes</small></p>
  </div>
  </div>
 
                <div className="my-button">
                
                <button  className="button1"  type="button" onClick={this.start} ><strong>Start</strong></button>
                <button  className="button1"  type="button" onClick={this.stop} ><strong>Stop</strong></button>
                <button className="button1" type="button" onClick={this.reset} ><strong>Reset</strong></button>
                </div>
        </div>
        
        )
    }
}