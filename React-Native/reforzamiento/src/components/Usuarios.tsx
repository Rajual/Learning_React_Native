import { useUsuarios } from '../hooks/useUsuarios';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const { usuarios, paginaAnterior,paginaSiguiente } = useUsuarios();
    const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h1>Usuarios:</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => renderItem(usuario))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={paginaAnterior}>
                Anterior
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>
                Siguiente
            </button>
        </>
    )
}
