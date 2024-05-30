"use client"
import { useRouter } from "next/navigation"
import dataStep from "@/lib/dataStep";

export default function CardStep () {
  const router = useRouter();
  const data = dataStep();

  return(
    <>
      <div onClick={() => router.push('/detail/step1')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">{data.step1.title}</h3>
        <p>{data.step1.description}</p>
      </div>  

      <div onClick={() => router.push('/detail/step2')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">{data.step2.title}</h3>
        <p>{data.step1.description}</p>
      </div>

      <div onClick={() => router.push('/detail/step3')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">{data.step3.title}</h3>
        <p>{data.step3.description}</p>
      </div>

      <div onClick={() => router.push('/detail/step4')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">{data.step4.title}</h3>
        <p>{data.step4.description}</p>
      </div>

      <div onClick={() => router.push('/detail/step5')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">{data.step5.title}</h3>
        <p>{data.step5.description}</p>
      </div>

      <div onClick={() => router.push('/detail/step6')} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-4">{data.step6.title}</h3>
        <p>{data.step6.description}</p>
      </div>
    </>
  );
}
