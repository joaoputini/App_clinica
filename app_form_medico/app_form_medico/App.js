import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import FormularioMedico from './FormularioMedico'; // Importa o componente
import { MEDICO_MODELO } from './utils'; 

// Dados de Exemplo para Edição
const DADOS_PARA_EDICAO = {
  nome: 'Dr. Lucas Ribeiro',
  especialidade: 'Cardiologia',
  crm: '45678/SP',
  logradouro: 'Rua da Paz',
  numero: '300',
  complemento: 'Sala 501',
  cidade: 'São Paulo',
  uf: 'SP',
};

export default function App() {
  // Estado para simular qual médico estamos editando
  // Se for 'null', entra no modo Cadastro
  const [medicoAtivo, setMedicoAtivo] = useState(DADOS_PARA_EDICAO); // Começa em modo Edição

  const handleCancel = () => {
    console.log('Operação Cancelada');
    // Normalmente, aqui você navegaria de volta
    // Alert.alert("Cancelado", "A operação foi cancelada.");
  };

  const handleSubmit = (data, isEditing) => {
    console.log('Dados Submetidos:', data);
    console.log('Modo:', isEditing ? 'Edição' : 'Cadastro');
    
    // Lógica real de API/Banco de Dados seria chamada aqui
  };
  
  // Botão de alternância (apenas para demonstração)
  const toggleMode = () => {
      if (medicoAtivo === null) {
          setMedicoAtivo(DADOS_PARA_EDICAO); // Mudar para Edição
      } else {
          setMedicoAtivo(null); // Mudar para Cadastro (null)
      }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.toggleText} onPress={toggleMode}>
        {medicoAtivo ? "Mudar para Modo CADASTRO" : "Mudar para Modo EDIÇÃO"}
      </Text>
      
      {/* O componente FormularioMedico recebe 'medico' como prop */}
      <FormularioMedico 
        medico={medicoAtivo} 
        onCancel={handleCancel} 
        onSubmit={handleSubmit} 
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  toggleText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
  }
});