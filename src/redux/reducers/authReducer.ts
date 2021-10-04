export interface AuthState {
  user: Record<string, any> | null;
  authStatus?: Record<string, any>;
  isAuthenticating: boolean;
}
