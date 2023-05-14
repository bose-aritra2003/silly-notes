import prisma from "@/lib/prisma-client";
import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const GET = async (req: NextRequest, context: { params: any }) => {
  try {
    const session: any = await getServerSession(authOptions);
    // console.log(session);
    if (!session) {
      return new NextResponse(JSON.stringify({error: 'unauthorized'}), {
        status: 401
      });
    }
    const userId = session?.user?.id;
    const noteFromDB = await prisma.note.findUnique({
      where: {
        id: context.params.id,
      },
    });
    // console.log(noteFromDB);
    if (noteFromDB?.userId !== userId) {
      return new NextResponse(JSON.stringify({error: 'unauthorized'}), {
        status: 401
      });
    }
    return new NextResponse(JSON.stringify({note: noteFromDB}));
  } catch (error) {
    return new NextResponse(JSON.stringify({error}));
  }
}

export const DELETE = async (req: NextRequest, context: { params: any }) => {
  try {
    const session: any = await getServerSession(authOptions);
    // console.log(session);
    if (!session) {
      return new NextResponse(JSON.stringify({error: 'unauthorized'}), {
        status: 401
      });
    }
    const noteFromDB = await prisma.note.delete({
      where: {
        id: context.params.id,
      }
    });
    // console.log(noteFromDB);
    return new NextResponse(JSON.stringify({note: noteFromDB}));
  } catch (error) {
    return new NextResponse(JSON.stringify({error}));
  }
}
