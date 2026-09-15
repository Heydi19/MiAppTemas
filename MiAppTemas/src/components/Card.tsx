import {View, Text, StyleSheet} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    title: string;
    icon: string;  // nombre de icono de Ionicons, ejemplo: 'star', 'heart'
    description: string;
};

export default function Card({title, icon, description}: Props) {
    const {colors} = useTheme();

    return (
        <View style ={[
            styles.card,
            {
                backgroundColor: colors.cardBackground, 
                borderColor: colors.cardBorder,
            }
        ]}>
            {/*Icono en la parte superior */}
            <Ionicons 
                name={icon as any} 
                size={36} 
                color={colors.primary} 
                style={styles.icon} 
                />

            {/*Título */}
            <Text style={[styles.title, {color: colors.text}]}>
                {title}
            </Text>

            {/*Descripción */}
            <Text style={[styles.description, {color: colors.textSecondary}]}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 14,
        padding: 20,
        marginVertical: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3, // Para Android
    },
    icon: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },
});