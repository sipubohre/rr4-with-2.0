import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactS3 from 'react-s3';

const config = {
    bucketName: 'm83-paas',
    dirName: 'codeSnippet', /* optional */
    region: 'us-west-2',
    accessKeyId: 'AKIAI5XATNQSQUXEYMFA',
    secretAccessKey: '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',
}

class S3Uploader extends Component {

    fileUpload = (event) => {
        console.log("file", event.target.files[0])
        let file = event.target.files[0]
        ReactS3.uploadFile(file, config)
        .then(data => {
            console.log("response",data)
        })
        .catch(err => {
            console.error("error", err)
        })
    }
    render () {
        return(
            <React.Fragment>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">S3 Uploader</li>
                    </ol>
                </nav>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">S3 file upload</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.fileUpload}/>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default S3Uploader;