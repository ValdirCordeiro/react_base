import storage from '../utils/storage';

export async function buscarToken() {
    try {
        const token = await storage.get("token");

        return token;
    } catch (error) {
        console.log("Erro ao buscar Token " + error.mensage);
    }
}

export async function buscarUsuarioLogado() {
    try {
        const usuario = await storage.get("usuario");

        return usuario;
    } catch (error) {
        console.log("Erro ao buscar usuario " + error.mensage);
    }
}

