import React from 'react'
import TwentyTwenty from './TwentyTwenty'
import {ArchiveContainer, ArchiveHeading} from './ArchiveElements'

function Archive() {
    return (
        <>
            <ArchiveContainer id ="archive">
                <ArchiveHeading>
                    Archive
                </ArchiveHeading>
                <TwentyTwenty/>
            </ArchiveContainer>
        </>
    )
}

export default Archive
