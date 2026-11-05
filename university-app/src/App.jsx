import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentCard from './components/StudentCard';
import myPhoto from './assets/moi.jpg';

function App() {
  const etudiants = [
    {
      nomComplet: "Ahmed Ben Abdallah",
      email: "ahmedbenabdallah20060613@gmail.com",
      telephone: "+216 25180041",
      filiere: "Génie Logiciel et Systèmes d'informatique",
      groupe: "GLSI2",
      ville: "Mahdia",
      anneeEtude: "2ème année",
      image: myPhoto,
    },
    {
      nomComplet: "Slim Boubaker",
      email: "slim.boubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'informatique",
      groupe: "GLSI2",
      ville: "Mahdia",
      image: myPhoto,
    },
    {
      nomComplet: "Sarra Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Génie Logiciel et Systèmes d'informatique",
      groupe: "GLSI1",
      ville: "Sousse",
      anneeEtude: "2ème année",
      image: myPhoto,
    }
  ];

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <div className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            nomComplet={etudiant.nomComplet}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;