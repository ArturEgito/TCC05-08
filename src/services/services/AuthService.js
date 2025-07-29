import UsuarioService from './UsuarioService';
import EscolaService from './EscolaService';

const login = async (email, senha, tipoUsuario = 'usuario') => {
    try {
        if (tipoUsuario === 'escola') {
            return await EscolaService.login(email, senha);
        } else {
            return await UsuarioService.signin(email, senha);
        }
    } catch (error) {
        throw error;
    }
};

const logout = (tipoUsuario = 'usuario') => {
    if (tipoUsuario === 'escola') {
        EscolaService.logout();
    } else {
        UsuarioService.logout();
    }
};

const getCurrentUser = () => {
    const usuario = UsuarioService.getCurrentUser();
    const escola = EscolaService.getCurrentEscola();
    
    return usuario || escola;
};

const isAuthenticated = () => {
    return getCurrentUser() !== null;
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
    isAuthenticated,
}

export default AuthService;