import React, { useState } from 'react';
import { Resizable } from "re-resizable";
import Draggable from 'react-draggable';

const ResizableWindow = ({ onClose }) => {
    const [windowSize, setWindowSize] = useState({ width: 320, height: 200 });
    const [isMaximized, setIsMaximized] = useState(false);

    // Calculate the maximum allowed width and height based on the screen size
    const maxWidth = window.innerWidth; 
    const maxHeight = window.innerHeight; 

    const handleMaximize = () => {
        if (!isMaximized) {
            setWindowSize({ width: maxWidth, height: maxHeight });
        } else {
            setWindowSize({ width: 320, height: 200 });
        }
        setIsMaximized(!isMaximized);
    };

    const handleClose = () => {
        onClose();
        // Re-enable overflow when the popup is closed
        document.body.style.overflow = 'auto';
    };

    // Disable overflow when the popup is opened
    document.body.style.overflow = 'hidden';

    return (
        <div className={`${!isMaximized ? "resizable-window fixed top-0 left-0 right-0 bottom-0 bg-transparent " : "" } z-50`}>
            <Draggable handle=".handle" bounds="parent" >
                <Resizable
                    className="border border-gray-400 rounded shadow bg-white overflow-hidden"
                    size={{ width: windowSize.width, height: windowSize.height }}
                    onResizeStop={(e, direction, ref, d) => {
                        // Calculate the new size and ensure it doesn't exceed the maximum allowed dimensions
                        const newWidth = Math.min(windowSize.width + d.width, maxWidth);
                        const newHeight = Math.min(windowSize.height + d.height, maxHeight);
                        setWindowSize({ width: newWidth, height: newHeight });
                    }}
                    maxWidth={maxWidth} // Set the maximum allowed width
                    maxHeight={maxHeight} // Set the maximum allowed height
                >
                    <div>
                        <div className="handle bg-gray-300 px-2 py-1 border-b border-gray-400 flex justify-between cursor-move">
                            <span>Title Bar</span>
                            <div>
                                <button onClick={handleClose}>Close</button>
                                <button onClick={handleMaximize}>{isMaximized ? 'Restore' : 'Maximize'}</button>
                                <button>Minimize</button>
                            </div>
                        </div>
                        <div className="content p-4 cursor-pointer">
                            {/* Your window content goes here */}
                            {/* Example content */}
                            <p>This is the content of the window.</p>
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </div>
    );
};

export default ResizableWindow;
