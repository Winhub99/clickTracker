import React, {  useState } from "react";

import "./CircleClick.css"
const CircleClick=()=>{

    type tPoint={
        x:number,
        y:number
    }

    type Points = tPoint[]

    const [points,setPoints] = useState<Points>([])
    const [popped,setpopped] = useState<Points>([])
    const handlePlaceCircle = (e:React.MouseEvent)=>{
        const {clientX,clientY} = e;
        setPoints([...points,{x:clientX,y:clientY,}])
        console.log(e)
    }

    const handleUndo=()=>{
        const newPoints =  [...points]
        const poppedElement = newPoints.pop()
        if(!poppedElement) return;
        setpopped([...popped,poppedElement])
        setPoints(newPoints)
    }

    const handleRedo= ()=>{
        const topItem = popped.pop()
        if(!topItem) return;
        setPoints([...points,topItem])
    }
    return(
        <>
        <button disabled={points.length===0} onClick={handleUndo}>Undo</button>
        <button disabled={popped.length===0} onClick={handleRedo}>Redo</button>
        <div className="container2" onClick={handlePlaceCircle}>
            {points.map(point=>(
            <div className="point" key={point.x * point.y} style={{
                left:point.x -5,
                top:point.y -5
            }}>
                
            </div>))}
        </div>
        </>
    )
}

export default CircleClick;