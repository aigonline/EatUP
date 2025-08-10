import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logout, updateProfile } from '../../store/slices/authSlice';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  // In a real app, get this from Redux state
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St, Anytown, USA',
  });

  // Preferences state
  const [preferences, setPreferences] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
  });

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // After logout, the AppNavigator will redirect to Login screen
  };

  const handleUpdateProfile = () => {
    // In a real app, dispatch an action to update profile
    alert('Profile updated!');
  };

  const renderSectionHeader = (title: string) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>
      
      {/* Personal Information */}
      {renderSectionHeader('Personal Information')}
      <View style={styles.section}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={user.name}
            onChangeText={(text) => setUser({...user, name: text})}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={user.email}
            onChangeText={(text) => setUser({...user, email: text})}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Phone</Text>
          <TextInput
            style={styles.input}
            value={user.phone}
            onChangeText={(text) => setUser({...user, phone: text})}
            keyboardType="phone-pad"
          />
        </View>
        
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      
      {/* Address */}
      {renderSectionHeader('Delivery Address')}
      <View style={styles.section}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput
            style={styles.input}
            value={user.address}
            onChangeText={(text) => setUser({...user, address: text})}
            multiline
          />
        </View>
      </View>
      
      {/* Preferences */}
      {renderSectionHeader('Preferences')}
      <View style={styles.section}>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Push Notifications</Text>
          <Switch
            value={preferences.notifications}
            onValueChange={(value) => 
              setPreferences({...preferences, notifications: value})
            }
            trackColor={{ false: "#E9ECEF", true: "#52B788" }}
            thumbColor={preferences.notifications ? "#FFFFFF" : "#FFFFFF"}
          />
        </View>
        
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Email Updates</Text>
          <Switch
            value={preferences.emailUpdates}
            onValueChange={(value) => 
              setPreferences({...preferences, emailUpdates: value})
            }
            trackColor={{ false: "#E9ECEF", true: "#52B788" }}
            thumbColor={preferences.emailUpdates ? "#FFFFFF" : "#FFFFFF"}
          />
        </View>
        
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Dark Mode</Text>
          <Switch
            value={preferences.darkMode}
            onValueChange={(value) => 
              setPreferences({...preferences, darkMode: value})
            }
            trackColor={{ false: "#E9ECEF", true: "#52B788" }}
            thumbColor={preferences.darkMode ? "#FFFFFF" : "#FFFFFF"}
          />
        </View>
      </View>
      
      {/* App Options */}
      {renderSectionHeader('App')}
      <View style={styles.section}>
        <TouchableOpacity style={styles.appOption}>
          <Text style={styles.appOptionText}>Order History</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.appOption}>
          <Text style={styles.appOptionText}>Payment Methods</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.appOption}>
          <Text style={styles.appOptionText}>Help & Support</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.appOption}>
          <Text style={styles.appOptionText}>About</Text>
        </TouchableOpacity>
      </View>
      
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      
      <View style={{ height: 32 }} /> {/* Bottom spacing */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  profileHeader: {
    backgroundColor: '#1B4332',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#52B788',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 16,
    color: '#1B4332',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
    marginTop: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#52B788',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  preferenceText: {
    fontSize: 16,
    color: '#343A40',
  },
  appOption: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  appOptionText: {
    fontSize: 16,
    color: '#343A40',
  },
  logoutButton: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#DC3545',
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#DC3545',
    fontWeight: 'bold',
    fontSize: 16,
  },
});