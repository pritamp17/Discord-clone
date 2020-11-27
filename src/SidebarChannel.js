import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appslice'
import "./SidebarChannel.css"

function SidebarChannel({id, channelName}) {
    const dispatch = useDispatch()

    return (
        <div className="SidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
            <h4><span className="SidebarChannel_hash">#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannel
