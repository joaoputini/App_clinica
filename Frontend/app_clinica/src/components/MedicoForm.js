import React, { useState, useEffect} from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert, Platform, Picker } from "react-native";

const especialidades = [ 'Selecionar..', 'Cardiologia', 'Ortopedia', 'Ginecologia', 'Dermatologia'];

const initialMedicoState = {
    nome:'', especialidade:especialidades[0], crm:'',email:'',telefone:'',
    logradouro:'', numero:'',complemento:'',cidade:'', uf:'', cep:''
};
const MedicoForm = ({medico, onSave, onCancel, navigation}) => {
    // 1. Inicializa o estado com base no prop 'medico' se null então será
    // inicializado com initialMedicoState
    const [formData, setFormData] = useState(medico || initialMedicoState);

    // 2. Será usado para rastrear erros de validação
    const [errors, setErrors] = useState({});

    // 3. Define o título do botão em função do modo Cadastro / Alteração
    const isEditing =!!medico;
    const buttonTitle = isEditing ? 'Concluir Edição' : 'Concluir Cadastro';

    // 4. Campos obrigatórios
    const requireFields = ['nome', 'especialidade', 'crm', 'telefone',
                         'logradouro', 'numero', 'uf', 'cep'];

    useEffect(()=> { setFormData(medico||initialMedicoState)},[medico] )

    //função genérica para atualizar o estado do formulário
    const handleChange= (name, value ) => {
        setFormData(prev => ({...prev,[name]:value}));
        if (errors[name]){
            setErrors(prev => {
                const newErrors = {...prev};
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validade = () => {
        let valid = true ;
        const newErrors = {};
        
        requireFields.forEach(field => {
            //verificação de campo vazio ou apenas de espaço em branco 
            if (!formData[field] || String(formData[field]).trim() === ''){
                newErrors[field] = 'campo obrigatório';
                valid = false;
            }
        });
        
        setErrors(newErrors);
        return valid;
    }; 

    //função de submissão do formulário
    const handleSubmit = () => {
        if(validade()){
        //supondo que a função lida com a lógica de API/Estado
        onSave(formData);
        Alert.alert(
            isEditing ? 'Sucesso':'Cadastro concluido',
            isEditing ? 'Dados do médico atualizado.' : 'Novo médico Cadastro'
            );
            navigation.goBack();
        }else{
            Alert.alert('Error', 'por favor, preencha todos os campos.')
        }
    };

}