import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-16">
      <div className='text-8xl'>Honeydew</div>
      <div>Generate the perfect cover letters</div>
      <button className='hover:bg-green-600 p-1'>Start</button>
    </main>
  )
}
