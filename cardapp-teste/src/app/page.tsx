import { Metadata } from "next";
import TelaInicial from "./tela-inicial/page";

export const metadata: Metadata = {
  title: "Cardapp - Tela Inicial",
};

export default function Home() {
  return (
    <>
      <div>
        <TelaInicial />
      </div>
    </>
  );
}
