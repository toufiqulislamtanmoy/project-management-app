import { Inter } from "next/font/google";
import "../globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ReactQueryProvider from "@/utilitiis/providers/ReactQueryProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Authentication",
    description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
    return (
        <html>
            <body>

                <ReactQueryProvider>
                    <AntdRegistry>
                        <div>
                            {children}
                        </div>
                    </AntdRegistry>
                </ReactQueryProvider>
            </body>
        </html>


    );
}
