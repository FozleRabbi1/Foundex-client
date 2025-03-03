import React from 'react';

const layout = ({children, resentPost} :{ children :  React.ReactNode, resentPost : React.ReactNode}) => {
    return (
        <div>
            {children}
            {resentPost}
        </div>
    );
};

export default layout;