import React from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import './Homepage.scss'
const homepage = () => {
    return (
        <>
                <div className='homepage'>
                    <div className="homepage__header">
                        <div className="homepage__header-sidebar">
                            <div className="homepage__header-inputcontainer">
                                <input type="text" className='homepage__header-input' placeholder='Tìm hoặc bắt đầu một cuộc trò chuyện'/>
                            </div>
                        </div>
                        <div className="homepage__header-chatbar">
                            <div className="homepage__header--chat">
                                <ChatHeader/>
                            </div>
                        </div>
                    </div>
                    <div className="homepage__content">
                        <div className='homepage__sidebar'>
                            <div className="homepage__sidebar-container">
                                <div className="homepage__sidebar-content">
                                    <div className="homepage__sidebar-avatar">
                                        <svg aria-hidden="false" viewBox="0 0 24 24">
                                            <g fill="none" fillRule="evenodd">
                                                <path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path>
                                                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="homepage__sidebar-title">
                                        Bạn bè
                                    </div>
                                </div>
                            </div>
                            {/* <div className='homepage__channels'>
                                <div className="homepage__channels-header">
                                    <div className="homepage__channels-expandicon">
                                    <IconButton className={classes.button} aria-label="settings">
                                        <ExpandMoreIcon/>
                                    </IconButton>
                                        </div>
                                    <p>Text Channels</p>
                                    <div className="homepage__channels-addicon">
                                        <AddChannelPopup/>
                                    </div>
                                </div>
                                <div className="homepage__channels-list">
                                    <SidebarChannel/>
                                </div>
                            </div>
                            <div className="homepage__voice">
                                <Sidebarvoice/>
                            </div>
                            <div className="homepage__avatar">
                                    <BadgeAvatars/>
                            </div> */}
                        </div>
                        <div className="homepage__mid">
                            <div className="homepage__mid-imagecontainer">
                                <img className="homepage__mid-image" src="https://i.ibb.co/2kwT26j/PIGCM-THUMNAIL-REMAKE.png" alt="Discord background" />
                            </div>
                            <p className="homepage__mid-text">Không ai ở xung quanh để chơi với bạn.</p>
                        </div>
                        {/* <div className="chat">
                            <div className='chat__message'>
                                <ChatMessage/>
                            </div>
                            <div className="chat__searchbar">
                                <ChatSearchBar/>
                            </div>
                        </div> */}
                        <div className="activity">
                            <div className="activity__container">
                                <div className="activity__container-heading">
                                    Hoạt động ngay bây giờ
                                </div>
                                <div className="activity__container-content">
                                    <div className="activity__container--head">
                                        Bây giờ nó yên tĩnh...
                                    </div>
                                    <div className="activity__container--para">
                                    Khi một người bạn bắt đầu một hoạt động, giống như chơi một trò chơi hoặc đi chơi trên giọng nói, chúng tôi sẽ hiển thị nó ở đây!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default homepage
