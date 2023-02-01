import React, { useState } from 'react'
import './explorer.css';

function Explorer({explorer}) {
    const [folder, setfolder] = useState(false)
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    })
    console.log('imported',explorer);

    const handleNewFolder = (e, isFolder)=>{
        e.stopPropagation();
        setExpand(true)

        setShowInput({
            visible:true,
            isFolder
        })
    }

    if(explorer.isFolder){
  return (
        <div style={{marginTop:5, cursor:'pointer'}}>
            <div className='folder'>
                <span onClick={()=>setExpand(!expand)}>📁{explorer.name}</span>
                <div>
                    <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
                    <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
                </div>
            </div>

            <div style={{paddingLeft:20, display:expand?'block':'none'}}>
                {
                    showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder?"📁":"📄" }</span>
                            <input type="text" 
                            autoFocus className="inputContainer__input"
                            onBlur={()=>setShowInput({...showInput, visible:false})}
                            />
                        </div>
                    )
                }
                {explorer.items.map((exp)=>{
                   return(
                    <>
                        {/*<span>📄{exp.name}</span> <br />*/}
                        <Explorer explorer={exp} key={exp.id}/>
                    </>
                   ) 
                })}
                
            </div>

        </div>
  );
}
              else{
    return <span className='file'>📄{explorer.name}<br></br></span>

  }
}

export default Explorer