import React from 'react'

const FolderModal = () => {
  return (
    <>


      <div className="modal fade" id="FolderModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Folder Setting</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span >&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>

                <div className=' form-group'>
                  <label htmlFor="">Visible</label>
                  <select className='form-control'>
                    <option>All</option>
                    <option>Private</option>
                    <option>Hidden</option>
                  </select>
                </div>


                <div className=' form-group'>
                  <label htmlFor="">Password</label>
                  <input type='text' className='form-control' placeholder='Password'/>
                </div>

                <div className='d-flex justify-content-center mt-4 mb-3 '>
                  <button type="button" className="btn" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-success g-btn-info ms-4" >Save</button>
                </div>

              </form>


            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default FolderModal