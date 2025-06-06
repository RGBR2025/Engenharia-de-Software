import Link from 'next/link';
import Sidebar from '../components/sidebar.jsx';

const usuario = "Usuário";
const time = "10 min"

export default function Home() {
  return (
      <div className="ml-80">
        <div className="m-8 w-282 flex gap-10">
          <img className="absolute w-6 left-92 mt-4" src="/icons/search-black.png" />
          <input className="pl-14 p-4 text-[var(--(--color-text-primary)] w-full focus:outline-none rounded-4xl bg-[var(--color-secundary-02)]" type="text" placeholder="Pesquisar..." />
          <div className="text-[var(--color-text-primary)] text-2xl flex items-center">
            <span className="flex gap-1">Olá, <b className="text-[var(--color-primary)]"> {usuario} </b>!</span>
            <button><div className="cursor-pointer rounded-full bg-black w-15 h-15 ml-4"></div></button>
          </div>  
        </div>

        <div className="bg-[var(--background-secundary)] w-218 h-50 m-8 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 p-5">
            <div className="w-15 h-15 rounded-full bg-black bg-cover" />
            <span className="text-[var(--color-text-secundary)]">Publique algo...</span>
          </div>
          <div className="flex justify-end pr-4 pt-10">
            <button className="hover:bg-[var(--color-primary-selection)] cursor-pointer bg-[var(--color-primary)] rounded-2xl p-2 text-white font-bold">Postar</button>
          </div>
        </div>

        <div className="bg-[var(--background-secundary)] w-218 h-150 m-8 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 p-3">
            <div className="w-8 h-8 rounded-full bg-[url('/avatar/leno.png')] bg-cover" />
            <span className="text-[var(--color-text-secundary)]"><b className="text-[var(--color-text-primary)]">{usuario} </b> • {time}</span>
          </div>
          <div className="h-100 bg-blue-500"></div>
          <div className="p-2 ">
            <div className="absolute">
              <img src="/icons/heart/heart-white.png" className="w-10" />
            </div>  
          </div>
        </div>  
      </div>
    );
}