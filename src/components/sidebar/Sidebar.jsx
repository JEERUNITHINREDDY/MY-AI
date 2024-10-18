import React, { useContext, useState } from 'react'

import './Sidebar.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context'


const Sidebar = () => {

    const [extented, setextended] = useState(false);
    const{onsent ,prevprompt,setrecentprompt, newchat} = useContext(Context)

    const loadprompt =async (prompt)=>{
        setrecentprompt(prompt)
        await onsent(prompt)
    }

        return (
            <div className='sidebar'>
            <div className="top">
                <img onClick={()=>{
                    setextended(prev=>!prev);
                }} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={()=> newchat() } className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {extented ? <p>New Chat</p> : null}
                </div>

                {extented
                    ? <div className="recent">
                        <p className='recent-title' >Recent</p>
                        {prevprompt.map((item, index)=>{
                            return (
                                <div onClick={()=>loadprompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}
                        
                    </div>
                    : null
                }

            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extented?<p>Help</p>:null} 
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extented?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extented?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
