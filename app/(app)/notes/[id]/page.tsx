'use client';
import DeleteNote from "@/components/client/deleteNote";
import {redirect} from "next/navigation";

export const runtime = 'edge';

const NotePage = async ({ params }: any) => {
    const note = await getNote(params.id);
    const { id, title, content, createdAt } = note || {};
    return (
        <div className={"px-10 md:px-20 mt-10 space-y-12"}>
            <h1 className={"font-bold text-4xl w-fit"}>{ title }</h1>
            <div className={"cursor-text w-full xl:w-3/4 2xl:w-1/2 mt-10 mx-auto bg-yellow-300 space-y-8 p-5 shadow-2xl border-black border-2"}>
                <div className={"flex justify-between items-center"}>
                    <h2 className={"font-gloria text-xl underline underline-offset-4"}>{ title }</h2>
                    <DeleteNote noteId={ id }/>
                </div>
                <h5 className={"font-gloria text-lg leading-loose"}>{ content }</h5>
                <p className={"font-mono"}>{new Date(createdAt).toDateString()}</p>
            </div>
        </div>
    );
}
export default NotePage;

// --------------------Helper Functions--------------------
const getNote = async (noteId: string) => {
    const res = await fetch(
        `/api/notes/${noteId}`,
        {
            next: { revalidate: 10 }, //Incremental Static Regeneration (ISR)
        }
    );
    if(!res.ok) {
        redirect('/notes');
    }
    const data = await res.json();
    // console.log(data);
    return data.note;
}