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
                  <label>Visible</label>
                  <select className='form-control'>
                    <option>All</option>
                    <option>Private</option>
                    <option>Hidden</option>
                  </select>
                </div>

                <div className='mt-4 mb-3'>
                  <div className=" custom-control-inline">
                    <input type="radio" id="pass" className='mb-2' name='isPass'/>
                      <label className="ml-2" for="pass">No</label>
                  </div>
                  <div className="custom-control-inline">
                    <input type="radio" id="pass2" className='mb-2' name='isPass' checked/>
                      <label className=" ml-2" for="pass2">Yes</label>
                  </div>

                </div>

                <div className=' form-group'>
                  <label htmlFor="">Password</label>
                  <input type='text' className='form-control' placeholder='Password' />
                </div>

                <div className='d-flex justify-content-center mt-4 mb-3 '>
                  <button type="button" className="btn" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-outline-info ms-4" >Save</button>
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