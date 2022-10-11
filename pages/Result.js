import React from 'react'

const Result = () => {
    let { result } = this.props;
    return (
        <>
            <div className="result">
                <p>{result}</p>
            </div>
        </>
    )
}

export default Result