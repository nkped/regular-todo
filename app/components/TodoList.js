import { HiPencilAlt } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi'

export default async function TodoList() {

    return(
        <div>
            <div>
                <h2>Hardcode title</h2>
                <p>some hardcoded description</p>
            </div>
            <div>
                <HiPencilAlt />
                <HiOutlineTrash />
            </div>
        </div>
    )
}