import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

export const Session = async () => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <pre>{JSON.stringify(session)}</pre>
        </div>
    );
}