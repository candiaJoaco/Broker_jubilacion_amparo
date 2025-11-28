import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function FooterNav(){
  const loc = useLocation().pathname

  const Item = ({to, icon, label}) => (
    <Link to={to} className={`footer-item ${loc === to ? 'active' : ''}`} style={{
      textDecoration: 'none', color: loc === to ? '#fff' : '#222', display:'flex', flexDirection:'column', alignItems:'center'
    }}>
      <div style={{
        width:48, height:48, borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center',
        background: loc === to ? '#299fd7' : 'transparent', color: loc === to ? '#fff' : '#444'
      }}>{icon}</div>
      <small style={{marginTop:6}}>{label}</small>
    </Link>
  )

  return (
    <footer style={{
      position:'fixed', bottom:12, left: '50%', transform:'translateX(-50%)',
      width: 'min(900px, calc(100% - 40px))', background:'#fff', padding:'10px 18px',
      display:'flex', justifyContent:'space-between', borderRadius:12, boxShadow:'0 6px 20px rgba(0,0,0,0.08)'
    }}>
      <Item to="/dashboard" icon="🏠" label="Inicio"/>
      <Item to="/finanzas" icon="💰" label="Finanzas"/>
      <Item to="/conversar" icon="💬" label="Conversar"/>
      <Item to="/bienestar" icon="💙" label="Bienestar"/>
      <Item to="/ajustes" icon="⚙️" label="Ajustes"/>
    </footer>
  )
}
