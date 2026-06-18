-- Ejecutar en SQL Editor de Supabase

-- Tabla de contactos / cotizaciones
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

-- Tabla de testimonios enviados por clientes
CREATE TABLE testimonials (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  visible BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert"
  ON testimonials FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select visible"
  ON testimonials FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow anon select visible only"
  ON testimonials FOR SELECT
  TO anon
  USING (visible = true);
