"use client";

import {useRouter} from "next/navigation";

const DeleteNote = ({noteId}: any) => {
  const router = useRouter();
  const deleteNote = async () => {
    await fetch(`/api/notes/${noteId}`, {
      method: "DELETE",
    });
    router.replace("/notes");
  }

  return (
    <div>
      <button
        className={"font-gloria text-lg transition ease-in-out hover:scale-150 cursor-pointer"}
        type={"submit"}
        onClick={deleteNote}
      >
        X
      </button>
    </div>
  );
}
export default DeleteNote;
