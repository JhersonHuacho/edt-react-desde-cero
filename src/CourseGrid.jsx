import React from 'react';
import Curso from './Curso';

const cursos = [
    {
        id: 1,
        titulo: "React desde cero",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/4c858734-9c72-45db-84ca-eb9e79cbe8df.png",
        price: 10,
        profesor: "Francisco Huacho"
    },
    {
        id: 2,
        titulo: "Angular desde cero",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/9e7655f4-a855-4d30-a3e0-736fa47f479b.png",
        price: 20,
        profesor: "Jordy Huacho"
    },
    {
        id: 3,
        titulo: "Vue desde cero",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/55f8eb30-f5b1-4495-a23d-938aede6a38d.png",
        price: 30,
        profesor: "Nayeli Huacho"
    },
    {
        id: 4,
        titulo: "Firebase desde cero",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/813e44ac-2d0b-4f1a-8629-f3da272a4c6a.png",
        price: 40,
        profesor: "Dayana Huacho"
    },
    {
        id: 5,
        titulo: "Node desde cero",
        image: "https://edteam-media.s3.amazonaws.com/courses/original/671fe4c0-bbac-4bbe-8a0e-3fb0811a8353.png",
        price: 50,
        profesor: "Daneri Huacho"
    }
];

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {cursos.map(curso => (
            <Curso
                key={curso.id}
                id={curso.id}
                title={curso.titulo}
                image={curso.image}
                price={curso.price}
                profesor={curso.profesor}
            />
        ))}
    </div>
)

export default CourseGrid;