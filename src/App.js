
import './App.css';
import Delete from './components/Delete';
import FileUpload from './components/FileUpload';
import FolderModal from "./components/FolderModal";
import Share from "./components/Share"
function App() {
  return (
    <div className="container">
      <FolderModal/>
      <Share/>
      <FileUpload/>
      <Delete/>
      <div className='flex align-items-center justify-content-center w-100 h-100 '>

      <button type="button" className="m-3 btn  btn-primary" data-toggle="modal" data-target="#FolderModal">
        Folder Setting
      </button>

      <button className='m-3 btn  btn-success' data-toggle="modal" data-target="#shareModal">
        Share
      </button>

      <button className='m-3 btn  btn-info' data-toggle="modal" data-target="#fileUpload">
        Upload
      </button>

      <button className='m-3 btn  btn-danger' data-target="#delete" data-toggle="modal">
      Delete
      </button>
      </div>  
   

    </div>


  );
}

export default App;
