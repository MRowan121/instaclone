import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";
import Modal from 'react-modal';
import { AiOutlineCamera } from 'react-icons/ai'
import { useRef, useState } from "react";

const UploadModal = () => {
    const [open, setOpen] = useRecoilState(modalState)
    const [selectedFile, setSelectedFile] = useState(null)
    const filePickerRef = useRef(null)

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

    return (
        <div>
            {open && (
                <Modal
                    isOpen={open}
                    onRequestClose={() => {setOpen(false); setSelectedFile(null)}}
                    className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white outline-none border-2 rounded-md shadow-md"
                >
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        {selectedFile ? (
                            <img 
                                onClick={() => setSelectedFile(null)} 
                                src={selectedFile} 
                                alt='' 
                                className="w-full max-h-[400px] object-cover cursor-pointer"
                            />
                        ) : (<AiOutlineCamera 
                            className="cursor-pointer text-5xl bg-red-200 p-2 rounded-full border-2 text-red-500"
                            onClick={() => filePickerRef.current.click()}
                            />)
                        }
                        <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
                        <input 
                            type="text" 
                            maxLength="150" 
                            placeholder="Please enter your caption..." 
                            className="m-4 border-none text-center w-full outline-none"
                        />
                        <button 
                            disabled 
                            className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
                        >
                            Upload Post
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default UploadModal;