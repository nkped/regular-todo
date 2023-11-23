

export function CancelBtn() {

    return(
        <button className="py-3 w-2/5 font-mono font-medium text-orange-400 bg-transparent rounded-full hover:bg-green-500 hover:text-white outline-dashed outline-offset-4 outline-2 hover:outline-offset-0 outline-green-500 hover:font-extrabold">Cancel</button>
    )
}

export function AddBtn() {
    return(
        <button type="submit" className="py-3 w-2/5 font-mono font-medium text-green-500 bg-transparent rounded-full text-md hover:bg-green-500 hover:text-white outline-dashed outline-2 outline-offset-4 outline-green-500 hover:outline-offset-0 hover:font-extrabold">Create</button>
    )
}



/* OLD VERSION:       <button type="submit" className="py-4 mt-3 font-bold text-white bg-green-400 rounded-md border border-green-500 hover:shadow-md hover:font-extrabold">Update Todo</button> */