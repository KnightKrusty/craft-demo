import React, { useState, useEffect } from 'react';
import './toast.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../../../redux/actions/actions';
import successIcon from "../../assets/success.svg";
import errorIcon from "../../assets/error.svg";

const Toast = () => {
    const toasts = useSelector(state => state.toasts || []);
    const dispatch = useDispatch();
    const [list, setList] = useState(toasts);

    useEffect(() => {
        setList([...toasts]);
    }, [toasts]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toasts.length && list.length) {
                deleteToast(toasts[0].id);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [toasts, list]);

    const deleteToast = (id) => {
        dispatch(removeToast(id));
    }
    return (
        <>
            <div className="notification-container bottom-left">
                {
                    list.map((toast, i) =>
                        <div
                            key={i}
                            className="notification toast bottom-left"
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            
                            <div className="notification-image">
                                <img src={toast.type == 'success' ? successIcon : errorIcon} alt="toast icon" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    );
}


export default Toast;
