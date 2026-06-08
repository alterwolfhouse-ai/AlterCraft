import React, { createContext, useContext, useMemo, useState } from 'react';

export type ACOSRole = 'admin' | 'sales' | 'production' | 'finance' | 'marketing' | 'hr';

export type ACOSUser = {
  id: string;
  name: string;
  email: string;
  role: ACOSRole;
  phone?: string;
  enabled: boolean;
  lastLoginAt?: string;
};

type SignInResult = {
  ok: boolean;
  message?: string;
};

type AuthContextValue = {
  user: ACOSUser | null;
  isAdmin: boolean;
  signIn: (email: string, password: string) => SignInResult;
  signOut: () => void;
};

const SESSION_KEY = 'altercraft-acos-session';
const LOCAL_DEMO_EMAILS = new Set(['support@altercraft.in', 'admin@altercraft.in']);
const LOCAL_DEMO_PASSWORD = 'AlterCraft#2026';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const canUseLocalDemo = () => {
  if (typeof window === 'undefined') return false;
  return ['localhost', '127.0.0.1'].includes(window.location.hostname);
};

const readSession = (): ACOSUser | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as ACOSUser) : null;
  } catch {
    return null;
  }
};

const writeSession = (user: ACOSUser | null) => {
  if (typeof window === 'undefined') return;
  if (!user) {
    window.localStorage.removeItem(SESSION_KEY);
    return;
  }
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ACOSUser | null>(() => readSession());

  const value = useMemo<AuthContextValue>(() => {
    const signIn = (email: string, password: string): SignInResult => {
      const normalizedEmail = email.trim().toLowerCase();

      // Static hosting cannot securely verify passwords. Local demo login exists only for
      // development preview; production must replace this with the backend JWT cookie flow.
      if (!canUseLocalDemo()) {
        return {
          ok: false,
          message: 'Secure backend authentication is not connected on the live site yet.',
        };
      }

      if (!LOCAL_DEMO_EMAILS.has(normalizedEmail) || password !== LOCAL_DEMO_PASSWORD) {
        return { ok: false, message: 'Invalid ACOS credentials.' };
      }

      const nextUser: ACOSUser = {
        id: 'acos-admin-local',
        name: 'AlterCraft Admin',
        email: normalizedEmail,
        role: 'admin',
        phone: '+918817503658',
        enabled: true,
        lastLoginAt: new Date().toISOString(),
      };
      writeSession(nextUser);
      setUser(nextUser);
      return { ok: true };
    };

    const signOut = () => {
      writeSession(null);
      setUser(null);
    };

    return {
      user,
      isAdmin: user?.role === 'admin' && user.enabled,
      signIn,
      signOut,
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
