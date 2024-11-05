const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Datos iniciales
const data = {
  "eventos": [
    {
      "id": 1,
      "nombre": "Summer Music Festival",
      "aforo": 100,
      "fecha": "2024-08-21"
    },
    {
      "id": 2,
      "nombre": "Annual Developer Conference",
      "aforo": 400,
      "fecha": "2024-09-12"
    },
    {
      "id": 3,
      "nombre": "City Marathon",
      "aforo": 50,
      "fecha": "2024-09-16"
    },
    {
      "id": 4,
      "nombre": "Modern Art Exhibition",
      "aforo": 20,
      "fecha": "2024-10-10"
    },
    {
      "id": 5,
      "nombre": "International Cuisine Expo",
      "aforo": 800,
      "fecha": "2024-11-14"
    }
  ],
  "eventos-confesiones": [
    {
      "id": 1,
      "nombre": "Retiro Espiritual Verano",
      "aforo": 50,
      "fecha": "2024-08-15"
    },
    {
      "id": 2,
      "nombre": "Congreso de Jóvenes",
      "aforo": 300,
      "fecha": "2024-09-20"
    },
    {
      "id": 3,
      "nombre": "Encuentro Familiar",
      "aforo": 150,
      "fecha": "2024-10-05"
    }
  ],
  "gastos": [
    {
      "id": 1,
      "eventoId": 1,
      "nombre": "Alquiler de equipo de sonido",
      "categoria": "Equipamiento",
      "precio": 2500000.00,
      "fecha": "2024-08-15"
    },
    {
      "id": 2,
      "eventoId": 1,
      "nombre": "Personal de seguridad",
      "categoria": "Personal",
      "precio": 800000.00,
      "fecha": "2024-08-21"
    },
    {
      "id": 3,
      "eventoId": 1,
      "nombre": "Catering artistas",
      "categoria": "Alimentación",
      "precio": 450000.00,
      "fecha": "2024-08-21"
    },
    {
      "id": 4,
      "eventoId": 2,
      "nombre": "Alquiler venue",
      "categoria": "Instalaciones",
      "precio": 3500000.00,
      "fecha": "2024-09-10"
    },
    {
      "id": 5,
      "eventoId": 2,
      "nombre": "Coffee break",
      "categoria": "Alimentación",
      "precio": 1200000.00,
      "fecha": "2024-09-12"
    },
    {
      "id": 6,
      "eventoId": 3,
      "nombre": "Medallas participantes",
      "categoria": "Materiales",
      "precio": 750000.00,
      "fecha": "2024-09-14"
    },
    {
      "id": 7,
      "eventoId": 3,
      "nombre": "Señalización ruta",
      "categoria": "Logística",
      "precio": 300000.00,
      "fecha": "2024-09-15"
    },
    {
      "id": 8,
      "eventoId": 4,
      "nombre": "Seguros obras de arte",
      "categoria": "Seguros",
      "precio": 4500000.00,
      "fecha": "2024-10-08"
    },
    {
      "id": 9,
      "eventoId": 4,
      "nombre": "Iluminación especial",
      "categoria": "Equipamiento",
      "precio": 1800000.00,
      "fecha": "2024-10-09"
    },
    {
      "id": 10,
      "eventoId": 5,
      "nombre": "Stands expositores",
      "categoria": "Instalaciones",
      "precio": 5500000.00,
      "fecha": "2024-11-12"
    }
  ],
  "ingresos": [
    {
      "id": 1,
      "eventoId": 1,
      "nombre": "Venta entradas generales",
      "categoria": "Entradas",
      "precio": 3500000.00,
      "fecha": "2024-08-20"
    },
    {
      "id": 2,
      "eventoId": 1,
      "nombre": "Venta entradas VIP",
      "categoria": "Entradas",
      "precio": 1800000.00,
      "fecha": "2024-08-21"
    },
    {
      "id": 3,
      "eventoId": 1,
      "nombre": "Patrocinio bebidas",
      "categoria": "Patrocinio",
      "precio": 2500000.00,
      "fecha": "2024-08-15"
    },
    {
      "id": 4,
      "eventoId": 2,
      "nombre": "Inscripciones early bird",
      "categoria": "Inscripciones",
      "precio": 4500000.00,
      "fecha": "2024-09-01"
    },
    {
      "id": 5,
      "eventoId": 2,
      "nombre": "Inscripciones regulares",
      "categoria": "Inscripciones",
      "precio": 3200000.00,
      "fecha": "2024-09-10"
    },
    {
      "id": 6,
      "eventoId": 3,
      "nombre": "Inscripciones maratón",
      "categoria": "Inscripciones",
      "precio": 2500000.00,
      "fecha": "2024-09-14"
    },
    {
      "id": 7,
      "eventoId": 3,
      "nombre": "Patrocinio deportivo",
      "categoria": "Patrocinio",
      "precio": 1800000.00,
      "fecha": "2024-09-15"
    },
    {
      "id": 8,
      "eventoId": 4,
      "nombre": "Venta catálogos",
      "categoria": "Merchandising",
      "precio": 850000.00,
      "fecha": "2024-10-10"
    },
    {
      "id": 9,
      "eventoId": 4,
      "nombre": "Entradas exposición",
      "categoria": "Entradas",
      "precio": 1200000.00,
      "fecha": "2024-10-10"
    },
    {
      "id": 10,
      "eventoId": 5,
      "nombre": "Venta stands",
      "categoria": "Stands",
      "precio": 8500000.00,
      "fecha": "2024-11-13"
    }
  ]
};

const router = jsonServer.router(data);
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware para headers
server.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  res.header('Accept', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// Rutas personalizadas para totales
server.get('/api/v1/eventos/:id/ingresos-totales', (req, res) => {
  const eventoId = parseInt(req.params.id);
  const ingresosEvento = router.db
    .get('ingresos')
    .filter({ eventoId })
    .value();

  const total = ingresosEvento.reduce((sum, ingreso) => sum + ingreso.precio, 0);
  
  res.json({ total });
});

server.get('/api/v1/eventos/:id/gastos-totales', (req, res) => {
  const eventoId = parseInt(req.params.id);
  const gastosEvento = router.db
    .get('gastos')
    .filter({ eventoId })
    .value();

  const total = gastosEvento.reduce((sum, gasto) => sum + gasto.precio, 0);
  
  res.json({ total });
});

// Rutas para obtener gastos e ingresos por evento
server.get('/api/v1/eventos/:id/gastos', (req, res) => {
  const eventoId = parseInt(req.params.id);
  const gastos = router.db
    .get('gastos')
    .filter({ eventoId })
    .value();
  
  res.json(gastos);
});

server.get('/api/v1/eventos/:id/ingresos', (req, res) => {
  const eventoId = parseInt(req.params.id);
  const ingresos = router.db
    .get('ingresos')
    .filter({ eventoId })
    .value();
  
  res.json(ingresos);
});

// Montar el router en el prefijo api/v1
server.use('/api/v1', router);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`JSON Server está corriendo en el puerto ${PORT}`);
});