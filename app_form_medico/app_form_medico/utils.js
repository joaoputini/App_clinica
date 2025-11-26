// Constantes para Especialidades e UFs
export const ESPECIALIDADES_MEDICAS = [
  'Selecione uma especialidade',
  'Cardiologia',
  'Dermatologia',
  'Ginecologia',
  'Pediatria',
  'Ortopedia',
  'Oftalmologia',
  'Neurologia',
  'Clínica Médica',
  // ... adicione mais conforme necessário
];

export const UFS_BRASIL = [
  'Selecione a UF', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 
  'RR', 'SC', 'SP', 'SE', 'TO',
];

// Modelo de dados de um médico
export const MEDICO_MODELO = {
  // Profissional
  nome: '',
  especialidade: ESPECIALIDADES_MEDICAS[0],
  crm: '',
  // Endereço
  logradouro: '',
  numero: '',
  complemento: '',
  cidade: '',
  uf: UFS_BRASIL[0],
};