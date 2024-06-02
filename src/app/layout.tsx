import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import '@aws-amplify/ui-react/styles.css';
import Auth from "@/components/auth/Auth";
import NavBar from "@/components/NavBar";
import {isAuthenticated} from "@/utils/amplifyServerUtils";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Title Listing",
  description: "List all titles and comments app",
};

export default async function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <NavBar isSignedIn={await isAuthenticated()}/>
    <Auth>
      {children}
    </Auth>
    </body>
    </html>
  );
}
