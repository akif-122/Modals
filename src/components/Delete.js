import React from 'react'
import recycle from "../assets/images/Recycle.png"
const Delete = () => {
    return (
        <>


            <div className="modal fade" id="delete">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button type="button" className="close" data-dismiss="modal">
                                <span >&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='text-center'>
                                    <img src={recycle} alt="Recycle" />
                                    <h4 >Do you want to delete this folder?</h4>
                                    <p>This folder will have 15 files. Once you delete the folder 15 files will not show forever. There is no undo option. </p>
                            </div>
                           
                            <div className='d-flex justify-content-center mt-4 mb-3 '>
                                <button type="button" className="btn" data-dismiss="modal">No,I Cancel</button>
                                <button type="button" className="btn btn-outline-danger ml-4" >Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Delete