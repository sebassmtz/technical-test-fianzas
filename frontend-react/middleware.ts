import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    //  Aca va la logica de proteger las rutas
    console.log("token", token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/auth/signIn",
      newUser: "/auth/signUp",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
