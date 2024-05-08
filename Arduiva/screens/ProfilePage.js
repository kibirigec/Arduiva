import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faCog, faCreditCard, faUserCog, faGavel, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ProfilePage = () => {
    const Stack = createNativeStackNavigator();  

    function MyStack() {
        return (
          <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsPage} />
            <Stack.Screen name="Payment Methods" component={PaymentMethods} />
            <Stack.Screen name="Manage Account" component={ManageAccount} />
            <Stack.Screen name="Legal" component={LegalPage} />
          </Stack.Navigator>
        );
      }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={null}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerContent}>
                        <FontAwesomeIcon icon={faUser} size={20} color="#efa400" style={styles.icon} />
                        <View style={styles.contactInfo}>
                            <Text style={styles.userName}>Kibirige Calvin</Text>
                            <Text style={styles.number}>+25675910888</Text>
                        </View>
                    </View>
                    <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
                </View>
            </TouchableOpacity>

            <View style={styles.profileInfo}>
                <TouchableOpacity style={styles.infoItem}>
                    <View style={styles.infoContent}>
                        <FontAwesomeIcon icon={faCog} size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoText}>Settings</Text>
                    </View>
                    <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem}>
                    <View style={styles.infoContent}>
                        <FontAwesomeIcon icon={faCreditCard} size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoText}>Payments</Text>
                    </View>
                    <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem}>
                    <View style={styles.infoContent}>
                        <FontAwesomeIcon icon={faUserCog} size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoText}>Manage Arduiva Account</Text>
                    </View>
                    <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoItem}>
                    <View style={styles.infoContent}>
                        <FontAwesomeIcon icon={faGavel} size={20} color="#000" style={styles.icon} />
                        <Text style={styles.infoText}>Legal</Text>
                    </View>
                    <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingHorizontal: 8,
        marginVertical: 0,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginTop: 24,
        backgroundColor: '#fff',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 16,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    userName: {
        fontSize: 24,
        fontFamily: 'Asap-Medium',
        fontWeight: '500',  
        marginLeft: 4,
    },
    profileInfo: {
        marginTop: 20,
        backgroundColor: '#fafafa',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    infoContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        fontFamily: 'Asap-Light',
        fontWeight: '500',
    },
    number: {
        fontSize: 14,
        fontFamily: 'Asap-Light',
        fontWeight: '500',
        color: '#333',
    },
    contactInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    closeModalButton: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        alignItems: 'center',
    },
    closeModalButtonText: {
        fontSize: 16,
        fontFamily: 'Asap-Medium',
    },
});

export default ProfilePage;
