import React, { useState } from 'react';
import ResizableWindow from './ResizableWindow';

const ParentComponent = () => {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const handleOpenWindow = () => {
        setIsWindowOpen(true);
    };

    const handleCloseWindow = () => {
        setIsWindowOpen(false);
    };

    return (
        <div>
            <p>hello world</p>
            <button onClick={handleOpenWindow}>Open Window2</button>
            {isWindowOpen && <ResizableWindow onClose={handleCloseWindow} />}
        </div>
    );
};

export default ParentComponent;
