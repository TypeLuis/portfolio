// import React from 'react'
import { CSSTransition } from 'react-transition-group';
import React, { useState, useEffect, useRef, useContext } from 'react';
import GADocuments from '../images/Certificate-of-Completion-Luis_Lopez.pdf'


const Modal = (props) => {
    const [activeMenu, setActiveMenu] = useState(props.menu);
    const [menuHeight, setMenuHeight] = useState(null);

    const modal = props.modal
    const setModal = props.setModal

    window.onclick = function (event) {
        if (event.target.id == 'myModal') {
            setModal('')
        }
    }

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    // console.log(modal.summary.replace(/[\r\n]/gm, '').trim().split('⋆'))
    return (
        <div id="myModal" className="modal" >
            {/* <button onClick={() => {  console.log('hi'); setActiveMenu('video'); }}>video</button> */}

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                // gives this the secondary menu because it's transitioning from primary
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="modal-content" >
                    <div className="modal-header">
                        <span onClick={() => { setModal('') }} className="close">x</span>
                        <a href={modal.link.site}><h2>{modal.name}</h2></a>
                    </div>
                    <div className="modal-body">

                        <img src={modal.gif} />

                        {/* <p className="portfolio-description">{modal.summary}</p> */}

                        <ul className="portfolio-description">
                            {modal.summary.replace(/[\r\n]/gm, '').trim().split('⋆').map((item, i) => {
                                if(item === '') return
                                console.log(item)
                                return(
                                    // <>
                                        <li>
                                            {item != '' && item.trim()}
                                        </li>
                                    // </>
                                )
                            })}
                        </ul>


                        <div className="skill-list">

                            {modal.skills.frontend.length > 0 &&
                                <div>

                                    <a href={modal.link.frontend} target="_blank" rel="noopener noreferrer">

                                        <span data-text='*Github Link'>frontend:</span>
                                    </a>

                                    <ul>
                                        {modal.skills.frontend.map((item, i, { length }) => {
                                            return (

                                                <>
                                                    {length === i + 1 ?

                                                        <li>{item}</li>

                                                        :
                                                        <li>{item}, </li>

                                                    }

                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }

                            {modal.skills.backend.length > 0 &&
                                <div>
                                    <a href={modal.link.backend} target="_blank" rel="noopener noreferrer">

                                        <span data-text='*Github Link'>backend: </span>
                                    </a>

                                    <ul>
                                        {modal.skills.backend.map((item, i, { length }) => {
                                            return (

                                                <>
                                                    {length === i + 1 ?

                                                        <li>{item}</li>

                                                        :
                                                        <li>{item}, </li>

                                                    }

                                                </>

                                            )
                                        })}
                                    </ul>
                                </div>
                            }

                            {modal.skills.libraries.length > 0 &&
                                <div>
                                    <span>libraries:</span>
                                    <ul>
                                        {modal.skills.libraries.map((item, i, { length }) => {
                                            return (

                                                <>
                                                    {length === i + 1 ?

                                                        <li>{item}</li>

                                                        :
                                                        <li>{item}, </li>

                                                    }

                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                        </div>


                    </div>
                </div>
            </CSSTransition>


        </div>
    )
}

export default Modal