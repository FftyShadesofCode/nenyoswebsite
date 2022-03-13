import React,{Component} from 'react';

class Uploader extends Component {
    render() {
        return (
            <div>
                <form action="/" method="POST" encType="multipart/form-data">
                    <div>
                        <label htmlFor="orchidName">Orchid Name</label>
                        <input
                            type="text"
                            id="orchidName"
                            placeholder="Orchid Name"
                            defaultValue=""
                            name="orchidName"
                            required="true"
                        />
                    </div>
                    <div>
                        <label htmlFor="orchidName">Grower Name</label>
                        <input
                            type="text"
                            id="growerName"
                            placeholder="Grower Name"
                            defaultValue=""
                            name="growerName"
                            required="true"
                        />
                    </div>
                    <div>
                        <label htmlFor="careInfo">Care Information</label>
                        <textarea
                            id="careInfo"
                            name="careInfo"
                            value=""
                            rows={2}
                            placeholder="Care Information"
                            required="true"
                            defaultValue={"\t\t\t\t"}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Upload Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            defaultValue=""
                            required=""
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
        <h1>Uploaded Images</h1>
        <div>
            items.forEach(function(image)
            <div>
                <div>
                    <img
                        src="data:image/<%=image.img.contentType%>;base64,
					<%=image.img.data.toString('base64')%>"
                    />
                    <div>
                        {/*<h5>&lt;%= image.name %&gt;</h5>*/}
                        {/*<p>&lt;%= image.desc</p>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Uploader;