import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma-client";
import {hash} from "bcrypt";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const {name, email, password} = await req.json();
    const hashedPassword = await hash(password, 12);
    const userFromDB = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword
      }
    });
    return new NextResponse(JSON.stringify({user: userFromDB}));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({
      error: "This email id is already registered!"
    }), {
      status: 500
    });
  }
}
