"use client";

import {useRouter} from "next/navigation";

const DeleteNote = ({noteId}: any) => {
    const router = useRouter();
    const deleteNote = async () => {
        await fetch(`http://localhost:3000/api/notes/${noteId}`, {
            method: "DELETE",
        });
        router.replace("/notes");
    }

    return (
        <div>
            <button
                className={"font-gloria text-lg hover:text-2xl cursor-pointer"}
                type={"submit"}
                onClick={deleteNote}
            >
                X
            </button>
        </div>
    );
}
export default DeleteNote;
