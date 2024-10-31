import { View, Text, ActivityIndicator } from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '~/utils/supabase';
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [Isready, setIsReady] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsReady(true);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!Isready) {
    return <ActivityIndicator />;
  }
  return (
    <AuthContext.Provider
      value={{ session, user: session?.user, isAuthenticated: !!session?.user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
