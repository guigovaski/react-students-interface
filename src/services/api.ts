import axios from "axios";
import { Student } from "../pages/Home/types";
// import jwt from "jsonwebtoken";

const api = axios.create({
    baseURL: "https://localhost:7109/api/"
});

export async function register(email: string, password: string, confirmPassword: string) {
    const res = await api.post("authentication/register", {
        email,
        password,
        confirmPassword
    });
    return res.data;
}

export async function authenticate(email: string, password: string) {
    const res = await api.post("authentication/login", {
        email,
        password
    });
    return res.data;
}

export async function getAll(): Promise<Student[]> {
    const res = await api.get("students", {
        headers: {
            "Authorization": `Bearer ${getJwtToken()}`
        }
    });
    return res.data;
}

export async function getById(id: number): Promise<Student> {
    const res = await api.get(`students/${id}`, {
        headers: {
            "Authorization": `Bearer ${getJwtToken()}`
        }
    });
    return res.data;
}

export async function createStudent(name: string, email: string): Promise<Student> {
    const res = await api.post("students", {
        name,
        email
    }, {
        headers: {
            "Authorization": `Bearer ${getJwtToken()}`
        }
    });
    return res.data;
}

export async function updateStudent(id: number, name: string, email: string) {
    const res = await api.put(`students/${id}`, {
        studentId: id,
        name,
        email
    }, {
        headers: {
            "Authorization": `Bearer ${getJwtToken()}`
        }
    });
    return res.data;
}

export async function deleteStudent(id: number, name: string, email: string) {
    const res = await api.delete(`students/${id}`, {
        data: {
            studentId: id,
            name,
            email
        },
        headers: {
            "Authorization": `Bearer ${getJwtToken()}`
        }
    });
    return res.data;
}

function getJwtToken() {
    const token = localStorage.getItem("@App:token");
    // JWT verify (token validation)
    return token ? token : null;
}
