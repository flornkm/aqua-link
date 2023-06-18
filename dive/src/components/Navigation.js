import Image from 'next/image'

function Navigation({ online }) {
  return (
    <div className="w-screen px-8 py-6 border-b border-b-zinc-100 flex justify-between items-center gap-8">
      <div className="text-lg font-semibold">
        Diving Club Gmuend e.V.
      </div>
      <div className="flex items-center gap-2 text-zinc-500 px-3 py-2 transition-all hover:bg-zinc-100 cursor-pointer rounded-md">
        <Image src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" width={40} height={40} className="h-8 w-8 rounded-full bg-zinc-200 object-cover object-top" />
        <p className="font-medium">{online === 1 ? "Joan Ritter" : "André Jacoby"}</p>
      </div>
    </div>
  )
}

export default Navigation