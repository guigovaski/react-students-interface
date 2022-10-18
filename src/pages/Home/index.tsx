import { FormEvent, useEffect, useMemo, useState } from "react";
import { StudentComponent } from "../../components/Student";
import { deleteStudent, getAll, getById, updateStudent } from "../../services/api";
import * as S from "./styles";
import { Student } from "./types";
import { AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import { createStudent } from "../../services/api";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlusCircleFill } from "react-icons/bs";
import { ErrorBox } from "../../components/global/Error/Validation/Validation";

export const Home = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState<Student[]>([]); 
    const [modal, setModal] = useState(false);
    const [studentId, setStudentId] = useState(0);
    const [errorAlert, setErrorAlert] = useState("");

    // form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        (async () => {
            const res = await getAll();
            setUsers(res);
        })();
    }, []);

    const usersFilter = useMemo(() => {
        const searchLower = search.toLowerCase(); 
        return users.filter(u => u.name.toLowerCase().includes(searchLower));
    }, [search])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log("CAIU AQUIIIIII");

        try {
            const res = await createStudent(name, email);
            console.log(res);
            setUsers(users.concat(res));
            setModal(false);
        } catch (err: any) {
            setErrorAlert(err.message);
        }
    }

    const handleOpenModalEdit = async (id: number) => {
        const student = await getById(id);
        
        if (student) {
            setName(student.name);
            setEmail(student.email);
            setModal(true);
            setStudentId(id);
        } else {
            return;
        }
    }

    const handeStudentEdit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await updateStudent(studentId, name, email);
            setUsers(users.map(u => {
                if (u.studentId === studentId) {
                    u.name = name;
                    u.email = email;
                }
                return u;
            }));
        } catch (err: any) {
            setErrorAlert(err.message);
        } finally {
            setModal(false);
        }
    }

    const handleStudentDelete = async (id: number, name: string, email: string) => {
        if (confirm(`Você tem certeza que deseja excluir ${name} estudante?`)) {
            try {
                await deleteStudent(id, name, email);
                setUsers(users.filter(u => u.studentId !== id));
            } catch (err: any) {
                setErrorAlert(err.message);
            }
        } else {
            return;
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const handleOpenAddStudent = () => {
        setName("");
        setEmail("");
        setStudentId(0);
        setModal(true);
    }

    const handleCloseErrorAlert = () => {
        setErrorAlert("");
    }

    return (
        <S.Wrapper>
            <S.Container>
                <header>
                    <div className="header-container">
                        <img src="/public/images/logo.png" alt="Logo" />
                        <span>Students</span>
                    </div>
                    <div className="header-btns">
                        <button onClick={handleOpenAddStudent} className="btn-add">
                            <AiOutlinePlus />
                            Adicionar aluno
                        </button>
                        <div className="logout-area" onClick={handleLogout} >
                            <span>Sair</span>
                            <button className="btn-logout">
                                <AiFillCloseCircle />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="search-container">
                    <div className="search-area">
                        <BiSearchAlt2 />
                        <input type="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>

                {errorAlert && (
                    <ErrorBox>
                        {errorAlert || "Something went wrong"}
                        <button onClick={handleCloseErrorAlert}>
                            <AiFillCloseCircle />
                        </button>
                    </ErrorBox>
                )}

                <h1>Alunos</h1>
                <div className="students-container">
                    {search && usersFilter.map((item, index) => (
                        <StudentComponent 
                        key={index} 
                        name={item.name} 
                        email={item.email} 
                        handleStudentEdit={() => handleOpenModalEdit(item.studentId)}
                        handleStudentDelete={() => handleStudentDelete(item.studentId, item.name, item.email)}
                    />
                    ))}

                    {users.length > 0 && !search && users.map((item, index) => (
                        <StudentComponent 
                            key={index} 
                            name={item.name} 
                            email={item.email} 
                            handleStudentEdit={() => handleOpenModalEdit(item.studentId)}
                            handleStudentDelete={() => handleStudentDelete(item.studentId, item.name, item.email)}
                        />
                    ))}
                </div>
            </S.Container>
            {modal && (
                    <div className="modal">
                        <div className="modal-area">
                            <button onClick={() => setModal(false)} className="btn-close">
                                <AiFillCloseCircle />
                            </button>
                            <h3>Adicionar novo aluno</h3>
                            <BsPlusCircleFill style={{fontSize: "30px"}} />
                            <form method="post">
                                <label htmlFor="name">Nome</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <button type="submit" onClick={studentId > 0 ? handeStudentEdit : handleSubmit}>Confirmar</button>
                            </form>
                        </div>
                    </div>
                )}
        </S.Wrapper>
    );
}