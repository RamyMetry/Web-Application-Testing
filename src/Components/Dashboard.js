import React,{useState} from "react"
import Display from "./Display"

function Dashboard(){

    const[strike,setStrike]=useState(0);
    const[ball,setBall]=useState(0);
    
    const AddStrike=e=>{
        setStrike(e=>{
          if (e>=3){
            return 0;
          }else return e+1;
        });
      }
    
      const AddBall=e=>{
        setBall(Current=>{
          if (Current>=4){
            return 0;
          }else return Current+1
        })
      }
    
      const Foul=e=>{
        setStrike(Current=>{
          if(Current>=2){
            return Current;
          }else return Current+1
        })
      }
    
      const Hit=e=>{
        setBall(0);
        setStrike(0);
      }
    

    return(
        <div>
          <Display strike={strike} ball={ball}/>
          <button onClick={AddStrike}>Strike</button>
          <button onClick={AddBall}>Ball</button>
          <button onClick={Foul}>Foul</button>
          <button onClick={Hit}>Hit</button>
          
        </div>
    )
}

export default Dashboard;