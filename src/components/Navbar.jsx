import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation()

  const title = {
    '/': 'Amparo',
    '/dashboard': 'Amparo',
    '/finanzas': 'Finanzas',
    '/conversar': 'Conversar',
    '/bienestar': 'Bienestar',
    '/ajustes': 'Ajustes'
  }[loc.pathname] || 'Amparo'

  return (
    <header style={{
      position: 'fixed',      // 🔥 SIEMPRE ARRIBA
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,           // 🔥 POR ENCIMA DE TODO

      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      padding:'12px 24px',
      background:'#fff',
      boxShadow:'0 2px 10px rgba(0,0,0,0.06)'
    }}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <img src="/img/logo.png" alt="logo" style={{height:48}}
          onError={(e)=>{e.target.style.display='none'}}
        />
        <h2 style={{margin:0, color:'#299fd7'}}>{title}</h2>
      </div>

      <nav style={{display:'flex', gap:16}}>
        <Link to="/dashboard" style={{textDecoration:'none', color:'#299fd7'}}>Inicio</Link>
        <Link to="/finanzas" style={{textDecoration:'none', color:'#299fd7'}}>Finanzas</Link>
        <Link to="/conversar" style={{textDecoration:'none', color:'#299fd7'}}>Conversar</Link>
        <Link to="/bienestar" style={{textDecoration:'none', color:'#299fd7'}}>Bienestar</Link>
        <Link to="/ajustes" style={{textDecoration:'none', color:'#299fd7'}}>Ajustes</Link>
      </nav>
    </header>
  )
}
