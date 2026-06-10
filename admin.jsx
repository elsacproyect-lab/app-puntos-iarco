import { useState } from 'react';

export default function AdminPanel() {
  const [adminPassword, setAdminPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clients, setClients] = useState([
    {
      id: 1,
      nombre: 'Cliente Test',
      email: 'test@email.com',
      telefono: '3001234567',
      puntos: 230,
      fotosPoints: 80,
      referidosPoints: 150,
      referralCode: 'REFTEST123',
      fotos: [
        { id: 1, plataforma: 'Instagram', descripcion: 'Foto del proceso', fecha: '7/6/2026' }
      ]
    }
  ]);
  const [newClient, setNewClient] = useState({ nombre: '', email: '', telefono: '' });

  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsLoggedIn(true);
      setAdminPassword('');
    } else {
      alert('❌ Contraseña incorrecta');
    }
  };

  const createClient = () => {
    if (!newClient.nombre || !newClient.email) {
      alert('Por favor completa los campos');
      return;
    }

    const newId = clients.length + 1;
    const generatedPassword = Math.random().toString(36).substring(2, 10).toUpperCase();

    const client = {
      id: newId,
      ...newClient,
      password: generatedPassword,
      puntos: 0,
      fotosPoints: 0,
      referidosPoints: 0,
      referralCode: 'REF' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      fotos: []
    };

    setClients([...clients, client]);

    alert(`✅ Cliente Creado!\n\nEmail: ${client.email}\nContraseña: ${client.password}\n\nLink: ${typeof window !== 'undefined' ? window.location.origin : ''}/app?email=${client.email}`);

    setNewClient({ nombre: '', email: '', telefono: '' });
  };

  if (!isLoggedIn) {
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
          maxWidth: '400px',
          width: '100%'
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🔐 Admin Panel</h1>

          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Contraseña:</label>
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Contraseña"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              marginBottom: '20px',
              boxSizing: 'border-box'
            }}
          />

          <button
            onClick={handleAdminLogin}
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1>👨‍💼 Panel Administrativo</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: '10px 20px',
              background: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            🚪 Salir
          </button>
        </div>

        {/* CREAR CLIENTE */}
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          marginBottom: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '20px' }}>➕ Crear Cliente</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Nombre:</label>
              <input
                type="text"
                value={newClient.nombre}
                onChange={(e) => setNewClient({...newClient, nombre: e.target.value})}
                placeholder="Nombre cliente"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email:</label>
              <input
                type="email"
                value={newClient.email}
                onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                placeholder="email@example.com"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Teléfono:</label>
            <input
              type="tel"
              value={newClient.telefono}
              onChange={(e) => setNewClient({...newClient, telefono: e.target.value})}
              placeholder="3001234567"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            onClick={createClient}
            style={{
              padding: '12px 30px',
              background: '#51cf66',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '16px'
            }}
          >
            ✓ Crear Cliente
          </button>
        </div>

        {/* LISTA DE CLIENTES */}
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '20px' }}>👥 Lista de Clientes</h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Nombre</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Email</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Teléfono</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Puntos</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>📸 Fotos</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>👥 Referidos</th>
                  <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Referido Code</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}><strong>{client.nombre}</strong></td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>{client.email}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{client.telefono}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center', fontWeight: 'bold', color: '#667eea' }}>{client.puntos}</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>{client.fotos.length} fotos = {client.fotosPoints} pts</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>1 referido = {client.referidosPoints} pts</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                      <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px', fontSize: '11px' }}>
                        {client.referralCode}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {clients.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999', marginTop: '20px' }}>No hay clientes registrados</p>
          )}
        </div>

        {/* FOTOS Y DESGLOSE */}
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          marginTop: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '20px' }}>📸 Fotos y Desglose de Puntos</h2>

          {clients.map(client => (
            <div key={client.id} style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '30px',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ margin: '0', color: '#333' }}>{client.nombre}</h3>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>{client.email}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>{client.puntos}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>Puntos Totales</div>
                </div>
              </div>

              <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ borderRight: '1px solid #e0e0e0' }}>
                    <div style={{ fontSize: '12px', color: '#666' }}>📸 Fotos Compartidas</div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea', marginTop: '5px' }}>{client.fotos.length}</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>= {client.fotosPoints} puntos</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#666' }}>👥 Referidos</div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea', marginTop: '5px' }}>1</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>= {client.referidosPoints} puntos</div>
                  </div>
                </div>
              </div>

              {client.fotos.length > 0 && (
                <div>
                  <h4 style={{ marginBottom: '15px', color: '#333' }}>📷 Fotos Enviadas:</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
                    {client.fotos.map(foto => (
                      <div key={foto.id} style={{
                        background: '#f5f5f5',
                        padding: '15px',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>📸</div>
                        <strong style={{ fontSize: '12px' }}>{foto.plataforma}</strong>
                        <p style={{ fontSize: '11px', color: '#666', margin: '5px 0 0 0' }}>{foto.fecha}</p>
                        <p style={{ fontSize: '11px', color: '#999', margin: '5px 0 0 0' }}>{foto.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
