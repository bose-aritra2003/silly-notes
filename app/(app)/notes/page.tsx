'use client';
import Link from "next/link";
import CreateNote from "@/app/components/client/createNote";

export const runtime = 'experimental-edge';

// --------------------Components--------------------
const NotesPage = async () => {
    const getNotes = async () => {
        const res = await fetch('http://localhost:3000/api/notes', {
            cache: "no-store",
        });
        const data = await res.json();
        // console.log(data);
        return data.notes;
    }

    const notes = await getNotes();
    return (
        <div className={"px-10 md:px-20 mt-10 space-y-12"}>
            <h1 className={"font-bold text-center md:text-left text-3xl md:text-4xl w-full md:w-fit"}>Your notes</h1>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 xl:gap-12 2xl:gap-16"}>
                {
                    notes?.map((note: any) => {
                        return <Note key={note.id} note={note}></Note>
                    })
                }
            </div>
            <CreateNote />
        </div>
    );
}
export default NotesPage;

const Note = ({note}: any) => {
    const { id, title, content, createdAt } = note || {};

    return (
        <Link id={id} href={`/notes/${id}`}>
            <div className={"bg-yellow-300 space-y-5 shadow-xl p-5 cursor-pointer hover:shadow-2xl hover:border-black hover:border-2"}>
                <h2 className={"font-gloria underline underline-offset-2 text-lg"}>{title}</h2>
                <h5 className={"font-gloria"}>{content.substring(0, 25)}...</h5>
                <p className={"font-mono"}>{new Date(createdAt).toDateString()}</p>
            </div>
        </Link>
    )
}
