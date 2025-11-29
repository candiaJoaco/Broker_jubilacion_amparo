import React, { useState } from 'react'

export default function Conversar(){
  const [messages, setMessages] = useState([{from:'amparo', text:'Hola, soy Amparo. ¿En qué puedo ayudarte con tu planificación de jubilación?'}])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  // Respuestas inteligentes del chatbot
  const getAmparoResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Respuestas contextuales basadas en el prompt original
    if (message.includes('hola') || message.includes('buenos') || message.includes('hi')) {
      return "Hola, soy Amparo. ¿Te ayudo a planear una jubilación más tranquila? ¿Qué edad tienes, cuánto puedes ahorrar al mes y qué tan cómodo te sientes con el riesgo (bajo/medio/alto)?";
    }
    
    if (message.includes('edad') || message.includes('años') || message.includes('año')) {
      return "Perfecto. La edad es clave para definir tu horizonte de inversión. ¿Podrías decirme tu edad exacta? Mientras más joven empieces, más puedes aprovechar el interés compuesto.";
    }
    
    if (message.includes('ahorro') || message.includes('ahorrar') || message.includes('mensual') || message.includes('dinero')) {
      return "Excelente que pienses en ahorrar. Recomiendo empezar con al menos el 10% de tus ingresos. Por ejemplo, si ganas S/2000 al mes, ideal ahorrar S/200. ¿Cuánto estimas poder destinar mensualmente?";
    }
    
    if (message.includes('riesgo') || message.includes('bajo') || message.includes('medio') || message.includes('alto') || message.includes('conservador')) {
      return "Entendido tu perfil de riesgo. Te explico:\n• Bajo: Fondos AFP tipo 1 (3-6% anual)\n• Medio: Fondos tipo 2 (7-12% anual)\n• Alto: Fondos tipo 3 (10-18% anual)\nEstos son rangos referenciales históricos.";
    }
    
    if (message.includes('afp') || message.includes('onp') || message.includes('jubilación') || message.includes('pensión')) {
      return "Es ideal no depender solo de AFP/ONP. Te sugiero diversificar:\n• Aporte voluntario a AFP (hasta 10% adicional)\n• Fondos mutuos conservadores\n• CTS como ahorro forzoso\n• Depósitos a plazo fijo";
    }
    
    if (message.includes('jubilar') || message.includes('retiro') || message.includes('jubilarme')) {
      return "Para una jubilación digna, considera:\n1. Ahorro sistemático mensual\n2. Diversificación (AFP + inversiones alternativas)\n3. Reducción de deudas\n4. Fondo de emergencia (3-6 meses de gastos)\n¿Por cuál te gustaría empezar?";
    }
    
    if (message.includes('calcul') || message.includes('simul') || message.includes('cuánto') || message.includes('cuanto')) {
      return "Para hacer un cálculo, necesito:\n• Tu edad actual\n• Edad de retiro planeada\n• Ahorro mensual estimado\n• Tolerancia al riesgo\n¿Tienes estos datos a mano?";
    }
    
    if (message.includes('deuda') || message.includes('deudas') || message.includes('endeudado')) {
      return "Reducir deudas es prioritario. Sugiero:\n• Pagar primero las de mayor interés\n• Evitar nuevas deudas innecesarias\n• Destinar 20% del ingreso a pago de deudas\n• Luego enfocarse en ahorro para jubilación";
    }

    if (message.includes('inversión') || message.includes('invertir') || message.includes('inversion')) {
      return "Para invertir inteligentemente:\n• Define tu horizonte temporal\n• Diversifica entre diferentes instrumentos\n• Considera tu tolerancia al riesgo\n• Revisa las comisiones cuidadosamente\n• Mantén una estrategia a largo plazo";
    }

    if (message.includes('cts') || message.includes('compensación')) {
      return "La CTS es un excelente instrumento de ahorro forzoso. Te recomiendo:\n• No retirarla a menos que sea estrictamente necesario\n• Considerarla como parte de tu fondo de jubilación\n• Elegir una entidad financiera que pague buenos intereses";
    }

    if (message.includes('fondo') || message.includes('mutuo') || message.includes('inversiones')) {
      return "Sobre fondos de inversión:\n• Fondos conservadores: 3-6% anual (bajo riesgo)\n• Fondos balanceados: 7-12% anual (riesgo medio)\n• Fondos growth: 10-18% anual (alto riesgo)\nEstos son rangos históricos referenciales.";
    }

    if (message.includes('comisión') || message.includes('comision') || message.includes('costo')) {
      return "Las comisiones en AFP:\n• Comisión sobre flujo: se paga sobre cada aporte\n• Comisión sobre saldo: se paga sobre el acumulado\n• Generalmente, comisión sobre saldo es mejor a largo plazo\n• Revisa tu estado de cuenta regularmente";
    }
    
    // Respuestas generales para cualquier otra cosa
    const generalResponses = [
      "Interesante punto. Para darte una mejor recomendación, ¿podrías contarme tu edad y capacidad de ahorro mensual?",
      "Comprendo tu consulta. En planificación previsional, es clave conocer tu horizonte temporal y tolerancia al riesgo.",
      "Excelente pregunta. La diversificación es fundamental: considera AFP, fondos mutuos, y CTS como complementos.",
      "Para optimizar tu jubilación, sugiero empezar con un diagnóstico de tu situación actual. ¿Qué edad tienes?",
      "Recuerda que además del aporte obligatorio, puedes hacer aportes voluntarios a tu AFP hasta el 10% adicional.",
      "La CTS puede ser un buen instrumento de ahorro forzoso si la mantienes en la cuenta y no la retiras.",
      "¿Has considerado los fondos de inversión conservadores? Son buena opción para perfiles de riesgo bajo-medio.",
      "Es importante revisar las comisiones de tu AFP. Las comisiones sobre saldo suelen ser más convenientes a largo plazo.",
      "Para una planificación efectiva, necesito saber: tu edad, ingreso mensual y tolerancia al riesgo. ¿Podrías compartirme esos datos?",
      "La clave del éxito en jubilación es empezar temprano y ser consistente con los ahorros, aunque sean montos pequeños al principio."
    ];
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  }

  const send = async ()=>{
    if(!input.trim() || loading) return
    
    const userMsg = {from:'user', text: input}
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    // Simular delay de respuesta (más realista)
    setTimeout(() => {
      const response = getAmparoResponse(input);
      setMessages(prev => [...prev, {from:'amparo', text: response}]);
      setLoading(false);
    }, 800 + Math.random() * 700); // Delay entre 0.8-1.5 segundos
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div style={{maxWidth:900, margin:'0 auto', background:'#fff', padding:20, borderRadius:10, boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
      <h2 style={{color: '#1a365d', marginBottom: 15}}>Conversar con Amparo</h2>
      
      <div style={{
        minHeight: 280, 
        maxHeight: 400,
        border: '1px solid #e2e8f0', 
        padding: 15, 
        marginBottom: 15,
        borderRadius: 8,
        background: '#f7fafc',
        overflowY: 'auto'
      }}>
        {messages.map((m,i)=>(
          <div key={i} style={{
            marginBottom: 12,
            display: 'flex',
            justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '10px 14px',
              borderRadius: 12,
              background: m.from === 'user' ? '#299fd7' : '#fff',
              color: m.from === 'user' ? '#fff' : '#2d3748',
              border: m.from === 'user' ? 'none' : '1px solid #e2e8f0',
              boxShadow: m.from === 'user' ? '0 2px 4px rgba(41, 159, 215, 0.3)' : '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                fontSize: 12, 
                fontWeight: 'bold', 
                marginBottom: 4,
                color: m.from === 'user' ? '#e6f7ff' : '#4a5568'
              }}>
                {m.from === 'user' ? 'Tú' : 'Amparo'}
              </div>
              <div style={{whiteSpace: 'pre-wrap', lineHeight: 1.5}}>
                {m.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{display: 'flex', gap: 10, alignItems: 'flex-end'}}>
        <textarea 
          value={input} 
          onChange={e=>setInput(e.target.value)} 
          onKeyPress={handleKeyPress}
          style={{
            flex: 1, 
            padding: 12,
            border: '1px solid #cbd5e0',
            borderRadius: 8,
            fontFamily: 'inherit',
            fontSize: 14,
            resize: 'vertical',
            minHeight: 60,
            outline: 'none'
          }} 
          placeholder="Escribe tu mensaje aquí... (Presiona Enter para enviar)" 
          disabled={loading}
          rows={3}
        />
        <button 
          onClick={send} 
          disabled={loading || !input.trim()}
          style={{
            padding: '12px 20px', 
            background: loading ? '#a0aec0' : '#299fd7', 
            color: '#fff', 
            border: 'none',
            borderRadius: 8,
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: (loading || !input.trim()) ? 0.6 : 1,
            transition: 'all 0.2s'
          }}
        >
          {loading ? 'Pensando...' : 'Enviar'}
        </button>
      </div>
      
      <div style={{
        marginTop: 12, 
        fontSize: 12, 
        color: '#718096', 
        textAlign: 'center',
        padding: 8,
        background: '#f0fff4',
        borderRadius: 6,
        border: '1px solid #c6f6d5'
      }}>
        💡 <strong>Amparo</strong> - Asesora financiera especializada en jubilación | Modo demo activo
      </div>
    </div>
  )
}