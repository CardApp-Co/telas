import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cardapp - HomePage",
};

export default function TelaHomePageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
