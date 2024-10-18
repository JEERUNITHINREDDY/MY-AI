import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onsent, recentprompt,showresult,loading,input,setinput, resultdata} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p className='gptname' >MY AI</p>
            <img src={assets.user_icon} alt="" />
        </div> 
        <div className="main-container">

            {!showresult
                ? <>
                     <div className="greet">
                <p><span>Heyy, buddyyyy</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly Summarize this concept; urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div><div className="card">
                    <p>Create a ERP planing for bank application</p>
                    <img src={assets.menu_icon} alt="" />
                </div><div className="card">
                    <p>Provide a optimized java code for sorting numbers </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
                </> 
                : <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentprompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gpt_img} alt="" />
                        {loading
                        ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div> 
                        :<p dangerouslySetInnerHTML={{__html:resultdata}}></p>
                         }
                        
                    </div>
                </div>
            }

           

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter your doubt here ' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onsent()} src={assets.send_icon} alt="" />:null} 
                    </div>
                </div>
               <p className='bottom-info'>MY AI can make mistakes. Check important info. All rights reserved &#xA9; 2024 <a  href="https://www.linkedin.com/in/jeeru-nithin-reddy-80586622b/">JEERU NITHIN REDDY</a>.</p>
            </div>
        </div>     
    </div>
  )
}

export default Main
