import { Welcome } from "@/containers"
export default function Home() {

  return (
    <div className="flex flex-col md:flex-row items-center w-full h-full overflow-hidden scroll-smooth">

      <div id='0' className="section-container bg-gray">
        <Welcome />
      </div>
      <div id='1' className="section-container bg-fondo-2 ">
        contenidos 2
        <img src='logo-long_WhiteCentered.png' alt='/' />
      </div>
      <div id='2' className="section-container bg-gray">
        contenidos 3
        <img src='logo-long_WhiteCentered.png' alt='/' />
      </div>
      <div id='3' className="section-container bg-fondo-1">
        contenidos 4
        <img src='logo-long_WhiteCentered.png' alt='/' />
      </div>
      <div id='4' className="section-container bg-gray">
        contenidos 5
        <img src='logo-long_WhiteCentered.png' alt='/' />
      </div>

    </div>
  );
}
