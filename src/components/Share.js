import React from 'react'
import dropBox from "../assets/images/dropbox.png"
import gmail from "../assets/images/gmail.png"
import gdrive from "../assets/images/drive.png"
const FolderModal = () => {
    return (
        <>


            <div className="modal fade" id="shareModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title">Share</h5>
                            <button type="button" className="close" data-dismiss="modal">
                                <span >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className='row text-center g-4 my-4'>
                                <div className='col-sm-4'>
                                    <img src={dropBox} alt='Dropbox logo' />
                                    <p className='my-3'>Dropbox</p>
                                </div>
                                <div className='col-sm-4'>
                                    <img src={gmail} alt='Gmail  logo' />
                                    <p className='my-3'>Gmail</p>
                                </div>
                                <div className='col-sm-4'>
                                    <img src={gdrive} alt='Google Drive logo' />
                                    <p className='my-3'>Google Drive</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-4 mb-3 '>
                                <button type="button" className="btn" data-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-success g-btn-info ms-4" >Save</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FolderModal