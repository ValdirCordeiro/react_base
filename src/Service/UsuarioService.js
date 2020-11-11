import api from "../utils/http-common";

const LOGIN = "/login";
const BUSCAR_USUARIOS = "/usuarios";
const DELETAR_USUARIOS = "/usuarios";

export default class UsuarioService {

    static criaUsuario(data) {
        return {
            "id": data.id,
            "login": data.login,
            "nome": data.nome,
            "ativo": data.ativo,
            "email": data.email,
            "permissao": data.permissao
        }
    }

    static async login(login, senha) {
        try {

            if (!login || !senha) {
                return { error: "Preenha login e senha." };
            }

            const dados = JSON.stringify({ "login": login, "senha": senha });

            const data = await api.post(LOGIN, dados, buscarHeaderLogin());

            return { "dados": data.data, "error": null };
        } catch (error) {
            return { error: error.menssage };
        }
    }

    static async buscarUsuarios(nome) {
        try {

           if(!nome) {
               nome = "";
           }

           const usuarios = await api.get(BUSCAR_USUARIOS + `/${nome}`);

           return usuarios.data;
        } catch (error) {
            console.log(error);
        }

    }

    static async deletarUsuarios(id) {
        try {

           if(!id) {
               throw new Error("Erro ao deletar usuario")
           }

            const resposta = await api.delete(DELETAR_USUARIOS + `/${id}`);

            console.log(resposta);

            return true;
        } catch (error) {
            console.log(error);
        }

    }
}


async function buscarHeaderLogin() {
    return {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    };
}