
import './App.css';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Daniel Lauria – Analista Financiero y Consultor de Gestión</h1>
      <p>
        ¡Bienvenido/a! Soy Daniel Lauria, profesional con amplia experiencia en análisis financiero y gestión de PyMEs.
        Ofrezco soluciones a medida para potenciar tu negocio.
      </p>
      <a
        href="mailto:dan.alb.lauria@gmail.com"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Contactame
      </a>
      <div style={{ marginTop: '40px' }}>
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
          alt="Finanzas y consultoría"
          style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
        />
      </div>
    </div>
  );
}

export default App;
