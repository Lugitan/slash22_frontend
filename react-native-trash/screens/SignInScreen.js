import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, SafeAreaView, StyleSheet } from 'react-native';

WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/633e3ca375ee46b58b0b',
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '633e3ca375ee46b58b0b',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'https://hackathon-trash.firebaseapp.com/__/auth/handler'}),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;}
  }, [response]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
        <Button
        disabled={!request}title="Login"
        onPress={() => {
            console.log('press')
            promptAsync();}}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
        paddingTop: 20
    }
});