"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const router = useRouter();

    const create = async () => {
        setTitle(title.trim());
        setContent(content.trim());
        if(!title || !content) return;
        await fetch('/api/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        setTitle("");
        setContent("");

        router.refresh();
    }

    return (
        <form className={"flex flex-col space-y-2 w-full md:w-1/3 lg:w-1/4 2xl:w-1/5"} onSubmit={create}>
            <h3 className={"font-bold text-2xl"}>Create a new note</h3>
            <input
                required
                className={"border-2 border-black px-2 py-1 cursor-text font-gloria"}
                type={"text"}
                placeholder={"Title"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                required
                className={"border-2 border-black px-2 py-1 cursor-text font-gloria"}
                placeholder={"Content"}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                className={"relative inline-block px-3 py-2 font-medium group w-1/2"}
                type={"submit"}
            >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Add note</span>
            </button>
        </form>
    );
}
export default CreateNote;