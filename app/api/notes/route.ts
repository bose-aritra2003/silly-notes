import prisma from "@/lib/prisma-client";
import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const session: any = await getServerSession(authOptions);
    // console.log(session);
    if (!session) {
      return new NextResponse(JSON.stringify({error: 'unauthorized'}), {
        status: 401
      });
    }
    const userId = session?.user?.id;
    const notesFromDB = await prisma.note.findMany({
      where: {
        userId: userId
      }
    });
    return new NextResponse(JSON.stringify({notes: notesFromDB}));
  } catch (error) {
    return new NextResponse(JSON.stringify({error}));
  }
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const session: any = await getServerSession(authOptions);
    // console.log(session);
    if (!session) {
      return new NextResponse(JSON.stringify({error: 'Unauthorized'}), {
        status: 401
      });
    }
    const userId = session?.user?.id;
    const newNote = await req.json();
    const noteFromDB = await prisma.note.create({
      data: {
        title: newNote.title,
        content: newNote.content,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });
    return new NextResponse(JSON.stringify({note: noteFromDB}));
  } catch (error) {
    return new NextResponse(JSON.stringify({error}));
  }
}
