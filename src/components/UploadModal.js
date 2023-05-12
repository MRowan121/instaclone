import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";

const UploadModal = () => {
    const [open, setOpen] = useRecoilState(modalState)

    return (
        <div>
            <h1>Modal</h1>
            {open && <h1>The modal is open</h1>}
        </div>
    )
}

export default UploadModal;