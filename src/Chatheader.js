import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import "./Chatheader.css"

function ChatHeader({channelName}) {
    return (
            <div className='chatHeader'>

            <div className="chatHeader__left">
            <h3>
                <spam className="chatHeader__hash">
                    #
                </spam>
                {channelName}
            </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>

                <div className="chatHeader__search">
                    <input type="text" placeholder ="Search"/>
                    <SearchRoundedIcon/>
                    <SendRoundedIcon/>
                    <HelpRoundedIcon/>
                </div>

            </div>    
        </div>
    )
}

export default ChatHeader
