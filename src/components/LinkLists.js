import React from 'react'
import LinkCard from "./LinkCard"


export default function LinkLists({links, refreshLinks}) {
    return (
        <div>
            <h2 className="my-4">Links</h2>
            {links && links.filter(link => !link.archived).map(link => <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}></LinkCard> )}
            <h2 className="my-4">Archived Links</h2>
            {links && links.filter(link => link.archived).map(link => <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}></LinkCard> )}
        </div>
    )
}
