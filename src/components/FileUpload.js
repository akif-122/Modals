import React from 'react'
import device from "../assets/images/Vector.png"
import gdrive from "../assets/images/drive.png"
const FileUpload = () => {
    return (
        <>


            <div className="modal fade" id="fileUpload">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title">File Upload</h5>
                            <button type="button" className="close" data-dismiss="modal">
                                <span >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className='row text-center g-5 g-sm-4 my-5'>
                                
                                <div className='col-sm-6'>
                                    <img src={gdrive} alt='Google Drive logo' />
                                    <p>Upload from your DropBox</p>
                                    <button className='btn btn-outline-info'>
                                        Upload
                                    </button>
                                </div>
                                <div className='col-sm-6'>
                                    <img src={device} alt='Local server' />
                                    <p>Upload from Device</p>

                                    <button className='btn btn-outline-info'>
                                        Upload
                                    </button>
                                    
                                </div>

                            </div>
                            <div className='d-flex justify-content-center mt-4 mb-3 '>
                                <button type="button" className="btn" data-dismiss="modal">No,I Cancel</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FileUpload