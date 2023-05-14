import NextAuth, {type NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma-client";
import {compare} from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'name@company.com'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '••••••••'
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const userFromDB = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!userFromDB) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, userFromDB.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: userFromDB.id,
          email: userFromDB.email,
          name: userFromDB.name
        }
      }
    }),
  ],
  callbacks: {
    session: ({session, token}) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        }
      }
    },
    jwt: ({token, user}) => {
      if (user) {
        return {
          ...token,
          id: user.id,
        }
      }
      return token;
    }
  },
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}