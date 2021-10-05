import React, {useState} from 'react'

export default function LinkForm({refreshLinks}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    const resetForm = () => {
        setName('')
        setDescription('')
        setUrl('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {name, url, description}
        try{
            const res = await fetch('/.netlify/functions/createLink',{
                method: 'POST',
                body: JSON.stringify(body)
            })
            resetForm()
            refreshLinks()
        }catch(error){
            console.error(error)
        }
    }

    return (
        <div className="card">
            <div className="card-header"><h5>Add Link</h5></div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control mb-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url" className="mb-2">URL</label>
                        <input
                            type="text"
                            name="url"
                            className="form-control mb-2"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="mb-2">Description</label>
                        <textarea
                            name="description"
                            className="form-control mb-4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
