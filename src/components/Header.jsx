import "../Styles/Header.css";
import Settings from "../Settings/Settings";

export default function Header() {
  return (
    <div className="header container">
      <h1> {Settings.name} </h1>
      <p> {Settings.position} </p>
      <img src={Settings.profile_photo} alt="profile_pic" />
      <p className="header_para">
        Olá me chamo Felipe Dias. Eu sempre fui interessado em desenvolvimento
        de sistemas, e sempre curioso em aprender sobre novas tecnologias. No
        momento estou aprendendo a programar back-end com NodeJs, e para o
        front-end Reactjs Tenho algum conhecimento em java, springboot, css,
        HTML.
      </p>
    </div>
  );
}
