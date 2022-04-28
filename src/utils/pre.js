import React from 'react';

const Pre = ({obj}) => {
    return (
        <div>
            <pre>
                {JSON.stringify(obj, null, 2)}
            </pre>
        </div>
    )
}

export default Pre
