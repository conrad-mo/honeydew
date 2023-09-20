import Image from 'next/image'
import './page.css'
import HomeScreen from "../components/homescreen";
export default function Home() {
  return (
    <main className="flex justify-center min-h-screen">
      <HomeScreen></HomeScreen>
    </main>
  )
}
