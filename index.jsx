import { useState, useEffect } from 'react';

export default function ClienteApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [fotos, setFotos] = useState([]);
  const [inversion, setInversion] = useState({ historial: [] });

  const proyectos = [
    { id: 1, nombre: 'Verdi', codigo: 'VERDI' },
    { id: 2, nombre: 'Árbol', codigo: 'ARBORE' }
  ];

  const productos = [
    { id: 1, nombre: '🎨 Asesoría de Decoración', puntos: 500, descripcion: 'Sesión personalizada con diseñador' },
    { id: 2, nombre: '50% Descuento Persianas', puntos: 800, descripcion: 'Para toda tu vivienda' },
    { id: 3, nombre: '30% Descuento Electrodomésticos', puntos: 1000, descripcion: 'Línea blanca' },
    { id: 4, nombre: '25% Descuento Mobiliario', puntos: 1200, descripcion: 'Muebles y decoración' },
    { id: 5, nombre: '🎁 Pack Bienvenida Hogar', puntos: 600, descripcion: 'Kit + descuentos' }
  ];

  // LOGIN
  const handleLogin = () => {
    if (!email || !password) {
      alert('Por favor completa email y contraseña');
      return;
    }

    // IMPORTANTE: Aquí conectarías a Supabase
    // Por ahora usamos datos ficticios
    const user = {
      nombre: 'Cliente Test',
      email: email,
      referralCode: 'REFTEST123',
      fotos: [],
      referidos: [],
      inversion: { historial: [] }
    };

    setCurrentUser(user);
    setEmail('');
    setPassword('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('dashboard');
  };

  if (!currentUser) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{ 
          background: 'white', 
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          width: '100%',
          maxWidth: '500px'
        }}>
          <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>💎 Puntos</h1>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  const fotosPoints = fotos.length * 10;
  const referidosPoints = (currentUser.referidos?.length || 0) * 150;
  const totalPoints = fotosPoints + referidosPoints;

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        {/* HEADER */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '30px 20px',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>💎 Puntos</h1>
          <p style={{ margin: '0', fontSize: '14px', opacity: '0.9' }}>App de Fidelización</p>
        </div>

        {/* TABS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          borderBottom: '2px solid #e0e0e0',
          padding: '0 20px'
        }}>
          {['dashboard', 'fotos', 'referidos', 'premios', 'inversion'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 8px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '3px solid #667eea' : '3px solid transparent',
                color: activeTab === tab ? '#667eea' : '#999',
                fontWeight: '500',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.3s'
              }}
            >
              {tab === 'dashboard' && '📊'}
              {tab === 'fotos' && '📸'}
              {tab === 'referidos' && '👥'}
              {tab === 'premios' && '🎁'}
              {tab === 'inversion' && '💰'}
            </button>
          ))}
        </div>

        {/* CONTENIDO */}
        <div style={{ padding: '40px 30px' }}>
          {activeTab === 'dashboard' && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>Hola, {currentUser.nombre}!</h2>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                marginBottom: '30px'
              }}>
                <h3 style={{ margin: '0 0 10px 0', opacity: '0.9' }}>Tus Puntos Totales</h3>
                <div style={{ fontSize: '48px', fontWeight: 'bold' }}>{totalPoints}</div>
              </div>

              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
                  <span>📸 Fotos</span>
                  <span style={{ fontWeight: 'bold', color: '#667eea' }}>{fotosPoints} pts</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                  <span>👥 Referidos</span>
                  <span style={{ fontWeight: 'bold', color: '#667eea' }}>{referidosPoints} pts</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'premios' && (
            <div>
              <h3 style={{ marginBottom: '20px' }}>¿Cómo se Ganan Puntos?</h3>
              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '30px' }}>
                <div style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0' }}>📸 Foto: <strong>10 pts</strong></div>
                <div style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0' }}>💬 Testimonio: <strong>50 pts</strong></div>
                <div style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0' }}>👥 Referido: <strong>150 pts</strong></div>
                <div style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0' }}>🎥 Video: <strong>100 pts</strong></div>
                <div style={{ padding: '8px 0' }}>📝 Reseña: <strong>75 pts</strong></div>
              </div>

              <h3 style={{ marginBottom: '20px' }}>🎁 Canjea tus Puntos</h3>
              {productos.map(p => (
                <div key={p.id} style={{
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  padding: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h4 style={{ margin: '0' }}>{p.nombre}</h4>
                    <div style={{ fontWeight: 'bold', color: '#667eea' }}>{p.puntos} pts</div>
                  </div>
                  <p style={{ margin: '10px 0', fontSize: '13px', color: '#666' }}>{p.descripcion}</p>
                  <button
                    onClick={() => totalPoints >= p.puntos ? alert('✅ Canje procesado') : alert('❌ No hay puntos suficientes')}
                    disabled={totalPoints < p.puntos}
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: totalPoints >= p.puntos ? '#667eea' : '#ccc',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: totalPoints >= p.puntos ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {totalPoints >= p.puntos ? '🎁 Canjear' : '❌ Necesitas ' + (p.puntos - totalPoints) + ' pts'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'referidos' && (
            <div>
              <h3 style={{ marginBottom: '20px' }}>👥 Links de Referidos</h3>
              {proyectos.map(p => (
                <div key={p.id} style={{
                  background: '#f9f9f9',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  borderLeft: '4px solid #667eea'
                }}>
                  <strong>🏢 {p.nombre}</strong>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '4px',
                    marginTop: '8px',
                    border: '1px solid #e0e0e0',
                    wordBreak: 'break-all'
                  }}>
                    {typeof window !== 'undefined' ? `${window.location.origin}?ref=${currentUser.referralCode}&proyecto=${p.codigo}` : 'Cargando...'}
                  </div>
                  <button
                    onClick={() => alert('Link copiado')}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '8px',
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    🔗 Copiar Link
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'inversion' && (
            <div>
              <h3 style={{ marginBottom: '20px' }}>💰 Mi Inversión</h3>
              <input
                type="number"
                placeholder="Monto invertido"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="number"
                placeholder="Año de compra (ej: 2026)"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box'
                }}
              />
              <button
                onClick={() => alert('Proyección calculada')}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                📊 Calcular Proyección
              </button>
              <p style={{ marginTop: '20px', color: '#999', fontSize: '13px' }}>
                Proyección con 7% de valorización anual (promedio inmobiliario)
              </p>
            </div>
          )}

          {activeTab === 'fotos' && (
            <div>
              <h3 style={{ marginBottom: '20px' }}>📸 Comparte Fotos</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>Comparte fotos en redes y gana puntos</p>
              <textarea
                placeholder="Descripción"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box',
                  minHeight: '80px'
                }}
              />
              <input
                type="file"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px dashed #667eea',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  boxSizing: 'border-box',
                  cursor: 'pointer'
                }}
              />
              <button
                onClick={() => alert('Foto enviada')}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                ✅ Enviar Foto
              </button>
            </div>
          )}

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '12px',
              background: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              marginTop: '20px'
            }}
          >
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
