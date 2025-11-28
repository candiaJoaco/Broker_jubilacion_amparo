import React, {useState} from 'react'
import api from '../api'

export default function Conversar(){
  const [messages, setMessages] = useState([{from:'amparo', text:'Hola, ¿en qué puedo ayudarte?'}])
  const [input, setInput] = useState('')

  const send = async ()=>{
    if(!input.trim()) return
    const userMsg = {from:'user', text: input}
    setMessages(prev => [...prev, userMsg])
    setInput('')
    try{
      const res = await api.post('/chat', { message: input })
      setMessages(prev => [...prev, {from:'amparo', text: res.data.reply}])
    }catch(e){
      setMessages(prev => [...prev, {from:'amparo', text: 'Error simulando respuesta.'}])
    }
  }

  return (
    <div style={{maxWidth:900, margin:'0 auto', background:'#fff', padding:20, borderRadius:10}}>
      <h2>Conversar</h2>
      <div style={{minHeight:220, border:'1px solid #eee', padding:12}}>
        {messages.map((m,i)=>(
          <div key={i} style={{marginBottom:8}}>
            <strong>{m.from}:</strong> {m.text}
          </div>
        ))}
      </div>
      <div style={{display:'flex', gap:8, marginTop:8}}>
        <input value={input} onChange={e=>setInput(e.target.value)} style={{flex:1}} placeholder="Escribe..." />
        <button onClick={send} style={{padding:'8px 12px', background:'#299fd7', color:'#fff', borderRadius:8}}>Enviar</button>
      </div>
    </div>
  )
}
