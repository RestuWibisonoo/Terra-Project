export default function Page({params}: any){
  return (
    <div className="min-h-screen">
      <div className="py-5 mx-4 mt-16 bg-slate-400 rounded-lg shadow-xl text-center">
      <p className="text-emerald-800 font-bold items-center text-center">{params.slug} Blm Jadi</p>
      </div>
    </div>
  )
}