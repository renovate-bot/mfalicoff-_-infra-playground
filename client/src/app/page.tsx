'use client';

export default function Home() {

  const click = async () => {
    console.log("clicked")
    console.log(process.env.NEXT_PUBLIC_ROUTE)
    let res = await fetch(process.env.NEXT_PUBLIC_ROUTE!.toString())
    console.log(await res.json())
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <h1>hi</h1>
       <button onClick={() => click()}>click me</button>
      </div>
    </main>
  )
}
