import React from 'react'


export default function LinkCard({link , refreshLinks}) {
    const archiveLink = async () => {
        if (!link.archived){
            link.archived = true
        }else{
            link.archived = false
        }
        try{
            await fetch('/.netlify/functions/updateLink',{
                method:'PUT',
                body: JSON.stringify(link)
            })
            refreshLinks()
        }catch(error){
            console.error("Its". error)
        }
    }

    const deleteLink = async () => {
        const id = link._id
        try{
            await fetch('/.netlify/functions/deleteLink',{
                method:'DELETE',
                body: JSON.stringify({id})
            })
            refreshLinks()
        }catch(error){
            console.error("Its". error)
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-header"><h5>{link.name}</h5></div>
            <div className="card-body">
                <a href={link.url}>{link.url}</a>
                <p>{link.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning me-2" onClick={archiveLink}>
                    {!link.archived? "Archive" : "Remove Archive"}
                </button>
                <button className="btn btn-danger" onClick={deleteLink}>
                    Delete
                </button>
            </div>
        </div>
    )
}
